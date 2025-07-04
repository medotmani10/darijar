
import { Wifi, Monitor, Users, Calendar, Shield, Phone, Search, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Wifi,
      title: 'خدمة واي فاي عالية السرعة',
      description: 'انترنت فائق السرعة متاح في جميع أنحاء الشقة',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Monitor,
      title: 'مساحات عمل جميلة',
      description: 'مضاحات مصممة خصيصاً للعمل والدراسة بكفاءة عالية',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Users,
      title: 'أساسيات الحياة',
      description: 'جميع الأساسيات المطلوبة للحياة اليومية متوفرة ومجهزة',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      title: 'باقات جديدة',
      description: 'عروض وباقات متنوعة تناسب جميع الاحتياجات والعقاريات',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'جميع العقارات معتمدة ومفحوصة لضمان أعلى معايير الجودة',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
    {
      icon: Phone,
      title: 'حجز مباشر',
      description: 'احجز العقار مباشرة عبر الهاتف مع فريق خدمة العملاء المتخصص',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Search,
      title: 'بحث متقدم',
      description: 'ابحث عن العقار المناسب لك بسهولة من خلال فلاتر البحث المتقدمة',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Headphones,
      title: 'دعم فني 24/7',
      description: 'فريق الدعم الفني متاح على مدار الساعة لمساعدتك في أي وقت',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">خدمات مميزة</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات شقتنا المفروشة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            سواء كنت تعمل عن بُعد أو تريد مكان للعمل أو تستثمر في مدينة جديدة، نحن نوفر لك "تكنولوجي" وسائل
            <br />
            راحة مخصصة تجعلك في منزلك في مدينتك الجديدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;