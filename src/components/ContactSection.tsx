
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-xl text-white/90 mb-8">
            فريقنا المتخصص جاهز لمساعدتك في العثور على العقار المناسب
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8"
            >
              <Phone className="ml-2" size={20} />
              4567 123 50 966+
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8"
            >
              واتساب
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2">المكتب الرئيسي</h3>
            <p className="text-white/90">الرياض - طريق الملك فهد</p>
          </Card>

          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
            <p className="text-white/90">info@darrental.com</p>
          </Card>

          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
            <p className="text-white/90">السبت - الخميس: 9:00 ص - 9:00 م</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;