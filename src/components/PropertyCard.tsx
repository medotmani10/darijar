
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Phone, Eye } from 'lucide-react';
import { Property } from '@/types/property';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();
  
  const formatPrice = (price: number, currency: string) => {
    return `${price.toLocaleString()} ${currency === 'DZD' ? 'دينار' : currency}`;
  };

  const mainImage = property.images && property.images.length > 0 
    ? property.images[0] 
    : 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070';

  const handleViewProperty = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt={property.title_ar}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Status Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="bg-primary text-white">
            {property.status}
          </Badge>
          {property.featured && (
            <Badge className="bg-yellow-500 text-white">
              مميز
            </Badge>
          )}
        </div>

        {/* Property Type */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {property.property_categories?.name_ar || 'عقار'}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {property.title_ar}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="ml-1" />
          <span className="text-sm">{property.location_ar}</span>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            {property.area && (
              <div className="flex items-center">
                <Square size={16} className="ml-1" />
                <span>{property.area} م²</span>
              </div>
            )}
            <div className="flex items-center">
              <Bath size={16} className="ml-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Bed size={16} className="ml-1" />
              <span>{property.bedrooms}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price, property.currency)}
            </div>
            <div className="text-sm text-gray-600">شهر</div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
              onClick={handleViewProperty}
            >
              <Eye size={16} className="ml-1" />
              عرض
            </Button>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 flex items-center">
              <Phone size={16} className="ml-1" />
              اتصل
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;