
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Bed, Bath, Square, Phone, ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { propertyService } from '@/services/propertyService';
import { Property } from '@/types/property';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      
      try {
        const data = await propertyService.getPropertyById(id);
        if (data) {
          setProperty(data);
        } else {
          // Property not found is a valid case, handled by the UI
          setProperty(null);
        }
      } catch (error) {
        console.error('Error fetching property details:', error);
        // Optionally set an error state to show a message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const formatPrice = (price: number, currency: string) => {
    return `${price.toLocaleString()} ${currency === 'DZD' ? 'دينار' : currency}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-DZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextImage = () => {
    if (property?.images && property.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property?.images && property.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-lg">جاري التحميل...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">العقار غير موجود</h1>
              <Button onClick={() => navigate('/properties')} className="flex items-center gap-2">
                <ArrowLeft size={16} />
                العودة للعقارات
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const images = property.images && property.images.length > 0 
    ? property.images 
    : ['https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070'];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/properties')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            العودة للعقارات
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Images Section */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <img
                    src={images[currentImageIndex]}
                    alt={property.title_ar}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                {images.length > 1 && (
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image}
                          alt={`${property.title_ar} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Details */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">تفاصيل العقار</h2>
                  
                  {property.description_ar && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">الوصف</h3>
                      <p className="text-gray-600 leading-relaxed">{property.description_ar}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {property.area && (
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Square size={20} className="text-primary" />
                        <div>
                          <div className="text-sm text-gray-600">المساحة</div>
                          <div className="font-semibold">{property.area} م²</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bed size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-gray-600">غرف النوم</div>
                        <div className="font-semibold">{property.bedrooms}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bath size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-gray-600">دورات المياه</div>
                        <div className="font-semibold">{property.bathrooms}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Tag size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-gray-600">النوع</div>
                        <div className="font-semibold">{property.property_categories?.name_ar || 'عقار'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>تاريخ الإضافة: {formatDate(property.created_at)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title_ar}</h1>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="ml-1" />
                      <span>{property.location_ar}</span>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <Badge className="bg-primary text-white">
                        {property.status}
                      </Badge>
                      {property.featured && (
                        <Badge className="bg-yellow-500 text-white">
                          مميز
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {formatPrice(property.price, property.currency)}
                    </div>
                    <div className="text-gray-600">شهر</div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2">
                      <Phone size={16} />
                      اتصال مباشر
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      إرسال رسالة
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      حفظ في المفضلة
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">معلومات إضافية</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">العملة:</span>
                        <span>{property.currency === 'DZD' ? 'دينار جزائري' : property.currency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">رقم العقار:</span>
                        <span className="font-mono text-xs">{property.id.slice(-8)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
