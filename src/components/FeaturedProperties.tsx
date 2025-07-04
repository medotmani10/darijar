
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropertyCard from './PropertyCard';
import { propertyService } from '@/services/propertyService';
import { Property, PropertyCategory } from '@/types/property';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [categories, setCategories] = useState<PropertyCategory[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [propertyType, setPropertyType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching featured properties and categories...');
        const [propertiesData, categoriesData] = await Promise.all([
          propertyService.getFeaturedProperties(),
          propertyService.getCategories()
        ]);
        
        console.log('Featured properties data:', propertiesData);
        console.log('Categories data:', categoriesData);
        
        setProperties(propertiesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('خطأ في تحميل البيانات');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // فلترة وترتيب العقارات
  const filteredAndSortedProperties = properties
    .filter(property => {
      if (propertyType === 'all') return true;
      return property.property_categories?.name_en?.toLowerCase() === propertyType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'area':
          return (b.area || 0) - (a.area || 0);
        case 'newest':
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              العقارات المتاحة
            </h2>
            <p className="text-lg text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              العقارات المتاحة
            </h2>
            <p className="text-lg text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              العقارات المتاحة
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="جميع الأنواع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأنواع</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name_en?.toLowerCase() || ''}>
                    {category.name_ar}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="ترتيب حسب الأحدث" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">الأحدث</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                <SelectItem value="area">المساحة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredAndSortedProperties.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">لا توجد عقارات مميزة متاحة حاليًا</p>
            <p className="text-sm text-gray-500 mt-2">تحقق من وحدة التحكم لمزيد من التفاصيل</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredAndSortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            عرض المزيد من العقارات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;