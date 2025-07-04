
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { propertyService } from '@/services/propertyService';
import { Property, PropertyCategory } from '@/types/property';

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [categories, setCategories] = useState<PropertyCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [location, setLocation] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propertiesData, categoriesData] = await Promise.all([
          propertyService.getProperties(),
          propertyService.getCategories()
        ]);
        
        setProperties(propertiesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // البحث عند تغيير النص
  useEffect(() => {
    if (searchTerm.trim()) {
      const searchProperties = async () => {
        try {
          const results = await propertyService.searchProperties(searchTerm);
          setProperties(results);
        } catch (error) {
          console.error('Error searching properties:', error);
        }
      };
      searchProperties();
    } else {
      // إعادة تحميل جميع العقارات عند مسح البحث
      const fetchProperties = async () => {
        try {
          const propertiesData = await propertyService.getProperties();
          setProperties(propertiesData);
        } catch (error) {
          console.error('Error fetching properties:', error);
        }
      };
      fetchProperties();
    }
  }, [searchTerm]);

  // فلترة العقارات
  const filteredProperties = properties.filter(property => {
    // فلتر نوع العقار
    if (propertyType !== 'all') {
      const categoryMatch = property.property_categories?.name_en?.toLowerCase() === propertyType;
      if (!categoryMatch) return false;
    }

    // فلتر نطاق السعر
    if (priceRange !== 'all') {
      const price = property.price;
      switch (priceRange) {
        case '0-3000':
          if (price >= 3000) return false;
          break;
        case '3000-6000':
          if (price < 3000 || price >= 6000) return false;
          break;
        case '6000-10000':
          if (price < 6000 || price >= 10000) return false;
          break;
        case '10000+':
          if (price < 10000) return false;
          break;
      }
    }

    // فلتر الموقع
    if (location !== 'all') {
      const locationMatch = property.location_ar.toLowerCase().includes(location.toLowerCase());
      if (!locationMatch) return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-20 pb-8 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                جميع العقارات المتاحة
              </h1>
              <p className="text-lg text-gray-600">جاري التحميل...</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              جميع العقارات المتاحة
            </h1>
            <p className="text-lg text-gray-600">
              اكتشف مجموعة واسعة من العقارات المتاحة للإيجار
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="ابحث عن عقار..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="نوع العقار" />
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

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="نطاق السعر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأسعار</SelectItem>
                <SelectItem value="0-3000">أقل من 3,000 دينار</SelectItem>
                <SelectItem value="3000-6000">3,000 - 6,000 دينار</SelectItem>
                <SelectItem value="6000-10000">6,000 - 10,000 دينار</SelectItem>
                <SelectItem value="10000+">أكثر من 10,000 دينار</SelectItem>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المواقع</SelectItem>
                <SelectItem value="تلمسان">تلمسان</SelectItem>
                <SelectItem value="الجزائر">الجزائر العاصمة</SelectItem>
                <SelectItem value="وهران">وهران</SelectItem>
                <SelectItem value="قسنطينة">قسنطينة</SelectItem>
                <SelectItem value="الرياض">الرياض</SelectItem>
                <SelectItem value="جدة">جدة</SelectItem>
                <SelectItem value="الدمام">الدمام</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              عرض {filteredProperties.length} عقار من أصل {properties.length}
            </p>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              فلاتر متقدمة
            </Button>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">لا توجد عقارات تطابق معايير البحث</p>
            </div>
          )}

          {/* Pagination */}
          {filteredProperties.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline">السابق</Button>
                <Button className="bg-primary text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">التالي</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;