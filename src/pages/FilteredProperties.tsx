
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { propertyService } from '@/services/propertyService';
import { Property, PropertyCategory } from '@/types/property';

const FilteredProperties = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [category, setCategory] = useState<PropertyCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryId) return;
      
      try {
        console.log('Fetching properties for category:', categoryId);
        const [propertiesData, categoriesData] = await Promise.all([
          propertyService.getPropertiesByCategory(categoryId),
          propertyService.getCategories()
        ]);
        
        setProperties(propertiesData);
        
        // العثور على بيانات الصنف
        const foundCategory = categoriesData.find(cat => cat.id === categoryId);
        setCategory(foundCategory || null);
      } catch (error) {
        console.error('Error fetching filtered properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-20 pb-8 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                جاري التحميل...
              </h1>
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
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4 flex items-center gap-2 mx-auto"
            >
              <ArrowRight size={16} />
              العودة للرئيسية
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {category ? `عقارات ${category.name_ar}` : 'العقارات المفلترة'}
            </h1>
            <p className="text-lg text-gray-600">
              {properties.length} عقار متاح في هذا الصنف
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">لا توجد عقارات متاحة في هذا الصنف حاليًا</p>
              <Button 
                onClick={() => navigate('/properties')}
                className="mt-4"
              >
                عرض جميع العقارات
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilteredProperties;