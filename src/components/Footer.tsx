
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2 text-gray-300">
              <p>4567 123 55 213+</p>
              <p>info@darrental.com</p>
              <p>تلمسان، الجزائر</p>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-xl font-bold mb-4">أنواع العقارات</h3>
            <ul className="space-y-2">
              <li><Link to="/properties?type=apartment" className="text-gray-300 hover:text-white transition-colors">شقق</Link></li>
              <li><Link to="/properties?type=villa" className="text-gray-300 hover:text-white transition-colors">فيلل</Link></li>
              <li><Link to="/properties?type=duplex" className="text-gray-300 hover:text-white transition-colors">دوبلكس</Link></li>
              <li><Link to="/properties?type=studio" className="text-gray-300 hover:text-white transition-colors">استوديو</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-white transition-colors">العقارات</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* About & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">🏠دار للإيجار</h3>
            <p className="text-gray-300 mb-4">
              منصتك الموثوقة لإيجار العقارات في الجزائر
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 دار الإيجار. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;