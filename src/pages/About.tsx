
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'عقار متاح' },
    { number: '1000+', label: 'عميل راضي' },
    { number: '50+', label: 'شريك موثوق' },
    { number: '5+', label: 'سنوات خبرة' },
  ];

  const values = [
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'نضع عملاءنا في المقدمة ونسعى لتقديم أفضل خدمة ممكنة',
    },
    {
      icon: Target,
      title: 'الدقة والشفافية',
      description: 'نلتزم بالدقة في جميع تعاملاتنا مع الشفافية الكاملة',
    },
    {
      icon: Award,
      title: 'الجودة المضمونة',
      description: 'جميع عقاراتنا مفحوصة ومعتمدة وفق أعلى معايير الجودة',
    },
    {
      icon: Heart,
      title: 'الثقة والأمان',
      description: 'نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة المتبادلة',
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
              عن دار الإيجار
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن منصة رائدة في مجال تأجير العقارات في الجزائر، نسعى لتوفير أفضل الخيارات السكنية 
              التي تناسب احتياجاتكم وميزانيتكم
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت دار الإيجار كحلم بسيط: جعل عملية البحث عن المنزل المثالي أسهل وأكثر شفافية. 
                  منذ تأسيسنا، التزمنا بتقديم خدمة استثنائية تتجاوز توقعات عملائنا.
                </p>
                <p>
                  اليوم، نفتخر بكوننا واحدة من أكثر المنصات الموثوقة في الجزائر، حيث نساعد المئات من 
                  العائلات والأفراد في العثور على منازلهم المثالية كل شهر.
                </p>
                <p>
                  نؤمن بأن كل شخص يستحق منزلاً يشعر فيه بالراحة والأمان، ولهذا نعمل بجد لضمان 
                  توفير أفضل الخيارات بأسعار منافسة.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070"
                alt="عن دار الإيجار"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتعاملنا مع عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            رسالتنا
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            نسعى لتكون دار الإيجار المنصة الأولى والأكثر موثوقية في الجزائر لتأجير العقارات، 
            من خلال تقديم خدمات متميزة تجمع بين الجودة والشفافية والابتكار، 
            لنساعد كل عميل في العثور على المنزل المثالي الذي يحقق أحلامه وطموحاته.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;