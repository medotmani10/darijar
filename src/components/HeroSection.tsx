
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          اكتشف منزل أحلامك في
          <br />
          <span className="text-primary">تلمسان</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
          نوفرك أفضل العقارات للإيجار في أجمل مدن الجزائر
        </p>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="استكشف العقارات"
                className="bg-white text-gray-900 border-0 h-12 text-lg"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 h-12 px-8 text-lg font-semibold">
              <Search className="ml-2" size={20} />
              بحث
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;