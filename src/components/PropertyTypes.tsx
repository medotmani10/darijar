import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { propertyService } from '@/services/propertyService';
import { PropertyCategory } from '@/types/property';

const PropertyTypes = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<PropertyCategory[]>([]);
  const [propertyCounts, setPropertyCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching categories and properties...');
        const [categoriesData, propertiesData] = await Promise.all([
          propertyService.getCategories(),
          propertyService.getProperties()
        ]);
        
        console.log('Categories data:', categoriesData);
        console.log('Properties data:', propertiesData);
        
        setCategories(categoriesData);
        
        // حساب عدد العقارات لكل صنف
        const counts: Record<string, number> = {};
        propertiesData.forEach(property => {
          if (property.category_id) {
            counts[property.category_id] = (counts[property.category_id] || 0) + 1;
          }
        });
        setPropertyCounts(counts);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('خطأ في تحميل البيانات');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    console.log('Category clicked:', categoryId);
    navigate(`/properties/category/${categoryId}`);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              استكشف حسب نوع السكن
            </h2>
            <p className="text-lg text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              استكشف حسب نوع السكن
            </h2>
            <p className="text-lg text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            استكشف حسب نوع السكن
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من خيارات الإقامة لتجد ما يناسب احتياجاتك
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">لا توجد أصناف متاحة حاليًا</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={category.icon || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400&h=300&fit=crop"}
                    alt={category.name_ar}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {propertyCounts[category.id] || 0} خيار
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{category.name_ar}</h3>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyTypes;