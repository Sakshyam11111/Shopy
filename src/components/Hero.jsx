import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Star, 
  ShoppingBag, 
  Heart,
  Sparkles,
  TrendingUp,
  Gift,
  Shield,
  Truck
} from "lucide-react";

const Hero = ({ handleOrderPopup = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 100,
      });
    }
  }, []);

  const imageList = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop",
      title: "Up to 50% off on all Men's Wear",
      description: "Limited time offer! Shop now and save big on premium fashion.",
      badge: "TRENDING",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-400/30 to-amber-400/30"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
      title: "30% off on all Women's Wear",
      description: "Exclusive deals await! Don't miss out on elegant styles.",
      badge: "EXCLUSIVE",
      color: "from-orange-600 to-red-500",
      bgColor: "from-orange-500/30 to-red-400/30"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=600&fit=crop",
      title: "70% off on all Products Sale",
      description: "Massive clearance sale! Grab your favorites now.",
      badge: "MEGA SALE",
      color: "from-orange-700 to-amber-600",
      bgColor: "from-orange-600/30 to-amber-500/30"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % imageList.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentData = imageList[currentSlide];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r ${currentData.bgColor} rounded-full blur-3xl animate-pulse opacity-60`} data-aos="fade" data-aos-delay="100"></div>
        <div className="absolute bottom-32 right-16 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-70" data-aos="fade" data-aos-delay="200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-300/15 to-amber-300/15 rounded-full blur-3xl animate-pulse delay-500" data-aos="fade" data-aos-delay="300"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-bounce opacity-50" data-aos="zoom-in" data-aos-delay="400"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-2000 opacity-60" data-aos="zoom-in" data-aos-delay="500"></div>
      </div>

      {/* Enhanced Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" data-aos="fade">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#f97316" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="1" fill="#fb923c" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="12" cy="18" r="0.5" fill="#fdba74" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-[-50px]' : 'opacity-100 translate-x-0'}`} data-aos="fade-right">
            
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
              {currentData.badge === 'TRENDING' && <TrendingUp className="w-5 h-5 text-orange-600" />}
              {currentData.badge === 'EXCLUSIVE' && <Gift className="w-5 h-5 text-orange-600" />}
              {currentData.badge === 'MEGA SALE' && <Sparkles className="w-5 h-5 text-orange-600" />}
              <span className="text-sm font-semibold text-gray-800">{currentData.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent leading-tight" data-aos="fade-up" data-aos-delay="200">
              {currentData.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              {currentData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={handleOrderPopup}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <ShoppingBag className="w-5 h-5" />
                <span>Explore</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8" data-aos="fade-up" data-aos-delay="500">
              {[
                { icon: Shield, title: "Quality Guarantee", subtitle: "Premium Products" },
                { icon: Truck, title: "Free Shipping", subtitle: "On orders over Rs50" },
                { icon: Gift, title: "Exclusive Offers", subtitle: "Limited time deals" },
                { icon: Star, title: "Top Rated", subtitle: "5-star reviews" },
              ].map((feature, index) => (
                <div key={index} className="group flex items-center gap-3" data-aos="fade-up" data-aos-delay={`${600 + index * 100}`}>
                  <div className="p-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl shadow-lg">
                    <feature.icon className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-800">{feature.title}</p>
                    <p className="text-sm text-orange-600 font-medium">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Content - Image */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className={`relative transform transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-[50px] scale-95' : 'opacity-100 translate-x-0 scale-100'}`}>
              
              {/* Enhanced Image Container */}
              <div className="relative group">
                {/* Enhanced Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentData.color} rounded-3xl blur-3xl opacity-25 group-hover:opacity-35 transition-all duration-700 transform group-hover:scale-110 animate-pulse`} data-aos="zoom-in" data-aos-delay="300"></div>
                
                {/* Secondary glow */}
                <div className={`absolute inset-4 bg-gradient-to-r ${currentData.color} rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition-all duration-500 transform group-hover:scale-105`} data-aos="zoom-in" data-aos-delay="400"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 border border-orange-100" data-aos="zoom-in" data-aos-delay="500">
                  <img
                    src={currentData.img}
                    alt={currentData.title}
                    className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop";
                    }}
                  />
                  
                  {/* Enhanced Sale Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-base animate-bounce shadow-lg border-2 border-white" data-aos="fade-down" data-aos-delay="600">
                    <span className="drop-shadow-sm">SALE</span>
                  </div>
                  
                  {/* Enhanced Price Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-orange-100" data-aos="fade-up" data-aos-delay="700">
                    <p className="text-sm text-orange-600 font-semibold">Starting from</p>
                    <p className="text-3xl font-black text-gray-900">
                      <span className="text-lg">Rs</span> 999
                    </p>
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg" data-aos="fade-down" data-aos-delay="800">
                    Premium
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-xl animate-pulse border-4 border-white/50" data-aos="zoom-in" data-aos-delay="900">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse delay-300 border-4 border-white/50" data-aos="zoom-in" data-aos-delay="1000">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>

                {/* New floating elements */}
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500" data-aos="zoom-in" data-aos-delay="1100">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center mt-16 space-x-6" data-aos="fade-up" data-aos-delay="1200">
          {imageList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 rounded-full transition-all duration-500 hover:scale-110 ${
                index === currentSlide 
                  ? `w-16 bg-gradient-to-r ${currentData.color} shadow-lg` 
                  : 'w-4 bg-orange-200 hover:bg-orange-300 shadow-md'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0" data-aos="fade-up" data-aos-delay="1300">
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;