
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: '4567 123 50 966+',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      details: '4567 123 50 966+',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'info@darrental.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: 'الرياض - طريق الملك فهد',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: 'السبت - الخميس: 9:00 ص - 9:00 م',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              اتصل بنا
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في العثور على العقار المثالي. تواصل معنا الآن
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">
                  {info.details}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الأول
                    </label>
                    <Input placeholder="أدخل اسمك الأول" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الأخير
                    </label>
                    <Input placeholder="أدخل اسمك الأخير" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input type="email" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <Input type="tel" placeholder="أدخل رقم هاتفك" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    موضوع الرسالة
                  </label>
                  <Input placeholder="أدخل موضوع رسالتك" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <Textarea 
                    placeholder="أدخل رسالتك هنا..." 
                    className="min-h-32"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  كيف يمكننا مساعدتك؟
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    فريقنا المتخصص جاهز لمساعدتك في العثور على العقار المثالي. 
                    نوفر استشارات مجانية وخدمة عملاء متميزة على مدار 24 ساعة.
                  </p>
                  <p>
                    سواء كنت تبحث عن شقة للإيجار، فيلا فاخرة، أو مكتب تجاري، 
                    نحن هنا لنساعدك في كل خطوة.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-4">
                  اتصل بنا مباشرة
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>4567 123 50 966+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span>واتساب متاح</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>info@darrental.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="secondary" className="w-full">
                    اتصل الآن
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;