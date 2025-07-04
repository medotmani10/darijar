
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg">
              دار الإيجار
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              الرئيسية
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-primary transition-colors font-medium">
              جميع العقارات
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              اتصل بنا
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              عن المنصة
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/properties" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                جميع العقارات
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                عن المنصة
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
