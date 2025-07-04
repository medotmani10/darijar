export interface PropertyCategory {
  id: string;
  name_ar: string;
  name_en?: string;
  description_ar?: string;
  description_en?: string;
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  title_ar: string;
  title_en?: string;
  description_ar?: string;
  description_en?: string;
  location_ar: string;
  location_en?: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  category_id?: string;
  status: 'متاح' | 'مؤجر' | 'قيد المراجعة';
  featured: boolean;
  images: string[];
  created_at: string;
  updated_at: string;
  property_categories?: PropertyCategory;
}