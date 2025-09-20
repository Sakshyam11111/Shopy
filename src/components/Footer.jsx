import React, { useEffect, useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Heart,
  ExternalLink,
  Send,
  Star,
  Zap
} from "lucide-react";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Store",
    link: "/store",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const ServiceLinks = [
  {
    title: "Men Wear",
    link: "/mens-wear",
    icon: <Star className="w-3 h-3" />
  },
  {
    title: "Women Wear",
    link: "/women-wear",
    icon: <Zap className="w-3 h-3" />
  },
  {
    title: "Kids Wear",
    link: "/kids-wear",
    icon: <Star className="w-3 h-3" />
  },
  {
    title: "Electronic",
    link: "/electronics",
    icon: <Zap className="w-3 h-3" />
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.footer-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="modernGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#modernGrid)" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 pt-20 pb-12">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Company Info */}
              <div className="footer-animate lg:col-span-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25">
                      <span className="text-2xl font-bold text-white">S</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                    Shopsy
                  </h1>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  Transforming ideas into extraordinary digital experiences. We craft the future, one pixel at a time.
                </p>
                
                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Join the Revolution
                  </h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25 transition-all duration-300 text-white placeholder-gray-300"
                      />
                    </div>
                    <button 
                      onClick={handleSubscribe}
                      disabled={isSubscribed}
                      className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:from-green-600 disabled:to-green-600 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubscribed ? (
                        <>
                          <Heart className="w-5 h-5 text-white" />
                          <span>Subscribed!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Get Updates</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-animate space-y-6">
                <h2 className="text-2xl font-bold relative">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Navigate
                  </span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </h2>
                <ul className="space-y-4">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="transform hover:translate-x-2 transition-all duration-300">
                      <a 
                        href={link.link}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                        <span className="relative">
                          {link.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trending */}
              <div className="footer-animate space-y-6">
                <h2 className="text-2xl font-bold relative">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Trending
                  </span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </h2>
                <ul className="space-y-4">
                  {ServiceLinks.map((link, index) => (
                    <li key={index} className="transform hover:translate-x-2 transition-all duration-300">
                      <a 
                        href={link.link}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                          {link.icon}
                        </div>
                        <span className="relative">
                          {link.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-animate space-y-6">
                <h2 className="text-2xl font-bold relative">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Connect
                  </span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </h2>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Kathmandu, Nepal</p>
                      <p className="text-gray-400">Nepal</p>
                    </div>
                  </div>
                  
                  <a href="tel:+91123456789" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-6 h-6 text-green-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-green-300 transition-colors">+977 123456789</p>
                      <p className="text-gray-400 text-sm">Call us anytime</p>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@shopsy.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-6 h-6 text-purple-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">hello@shopsy.com</p>
                      <p className="text-gray-400 text-sm">Drop us a line</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-200">Follow the Journey</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-14 h-14 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-600 hover:scale-110 transition-all duration-300 group shadow-lg"
                    >
                      <Facebook className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-14 h-14 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center hover:from-pink-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 group shadow-lg"
                    >
                      <Instagram className="w-6 h-6 text-pink-400 group-hover:text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-14 h-14 bg-gradient-to-r from-blue-700/20 to-blue-800/20 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 hover:scale-110 transition-all duration-300 group shadow-lg"
                    >
                      <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-gray-300 text-lg">
                  <span>© 2024 Shopsy. Crafted with</span>
                  <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                  <span>and lots of ☕ in Nepal</span>
                </div>
                <div className="flex items-center gap-8">
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    Sitemap
                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
          }
          
          .animate-slideUp:nth-child(2) {
            animation-delay: 0.2s;
          }
          
          .animate-slideUp:nth-child(3) {
            animation-delay: 0.4s;
          }
          
          .animate-slideUp:nth-child(4) {
            animation-delay: 0.6s;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;