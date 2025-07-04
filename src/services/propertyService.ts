
import { supabase } from '@/integrations/supabase/client';
import { Property, PropertyCategory } from '@/types/property';

export const propertyService = {
  // جلب جميع الأصناف
  async getCategories(): Promise<PropertyCategory[]> {
    console.log('Fetching categories from Supabase...');
    const { data, error } = await supabase
      .from('property_categories')
      .select('*')
      .order('name_ar');

    if (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }

    console.log('Categories fetched successfully:', data);
    return data || [];
  },

  // جلب جميع العقارات مع الأصناف
  async getProperties(): Promise<Property[]> {
    console.log('Fetching all properties from Supabase...');
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_categories (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }

    console.log('Properties fetched successfully:', data);
    return (data || []) as Property[];
  },

  // جلب العقارات المميزة فقط
  async getFeaturedProperties(): Promise<Property[]> {
    console.log('Fetching featured properties from Supabase...');
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_categories (*)
      `)
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured properties:', error);
      throw error;
    }

    console.log('Featured properties fetched successfully:', data);
    return (data || []) as Property[];
  },

  // جلب العقارات حسب الصنف
  async getPropertiesByCategory(categoryId: string): Promise<Property[]> {
    console.log('Fetching properties by category:', categoryId);
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_categories (*)
      `)
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching properties by category:', error);
      throw error;
    }

    console.log('Properties by category fetched successfully:', data);
    return (data || []) as Property[];
  },

  // جلب عقار واحد بواسطة المعرف
  async getPropertyById(id: string): Promise<Property | null> {
    console.log(`Fetching property with id: ${id}`);
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_categories (*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching property with id ${id}:`, error);
      // لا ترمي خطأ إذا كان السبب هو عدم العثور على نتيجة
      if (error.code === 'PGRST116') {
        return null;
      }
      throw error;
    }

    console.log(`Property with id ${id} fetched successfully:`, data);
    return data as Property | null;
  },

  // البحث في العقارات
  async searchProperties(searchTerm: string): Promise<Property[]> {
    console.log('Searching properties with term:', searchTerm);
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_categories (*)
      `)
      .or([
        `title_ar.ilike.%${searchTerm}`,
        `location_ar.ilike.%${searchTerm}`,
        `description_ar.ilike.%${searchTerm}`
      ])
      .order('created_at', { ascending: false });
  
    if (error) {
      console.error('Error searching properties:', error);
      throw error;
    }
  
    console.log('Properties search results:', data);
    return (data || []) as Property[];
  }
};
