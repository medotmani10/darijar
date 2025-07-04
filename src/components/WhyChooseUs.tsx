
import { Shield, Phone, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'جميع العقارات معتمدة ومفحوصة لضمان أعلى معايير الجودة',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Phone,
      title: 'حجز مباشر',
      description: 'احجز العقار مباشرة عبر الهاتف مع فريق خدمة العملاء المتخصص',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Search,
      title: 'بحث متقدم',
      description: 'ابحث عن العقار المناسب لك بسهولة من خلال فلاتر البحث المتقدمة',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            لماذا تختار دار للإيجار؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم لك أفضل خدمات الإيجار في المملكة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0"
            >
              <div className={`w-20 h-20 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <reason.icon className={`w-10 h-10 ${reason.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
