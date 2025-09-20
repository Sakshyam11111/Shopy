import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Star, 
  Zap, 
  ShoppingBag, 
  Heart,
  Sparkles,
  TrendingUp,
  Gift,
  Play,
  Shield,
  Truck
} from "lucide-react";



const ImageList = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/3rYbpn8dR7C-7xuYfKmiIipV1E942ItZN_rF74PD9NE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yb21hbmNlLXNo/b3BhaG9saWMtd29t/ZW4tY29uY2VwdC1j/aGVlcmZ1bC10ZW5k/ZXItZmVtaW5pbmUt/d29tYW4taG9sZGlu/Zy1zaG9wcGluZy1i/YWdzLWJhY2stdGFr/aW5nLW9mZi1nbGFz/c2VzLXNtaWxpbmct/aGFwcGlseS1sZWZ0/LWVuam95LWJyb3dz/aW5nLXN0b3Jlc18x/MjU4LTk4MTYuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
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

const Hero = ({ handleOrderPopup = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
        setCurrentSlide((prev) => (prev + 1) % ImageList.length);
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

  const currentData = ImageList[currentSlide];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-orange-950/50 dark:to-slate-900">
        
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary orange orb */}
        <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r ${currentData.bgColor} rounded-full blur-3xl animate-pulse opacity-60`}></div>
        {/* Secondary orange orb */}
        <div className="absolute bottom-32 right-16 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-300/15 to-amber-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-2000 opacity-60"></div>
      </div>

      {/* Enhanced Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
          <div className={`space-y-8 transform transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-[-50px]' : 'opacity-100 translate-x-0'}`}>
            
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full border-2 border-orange-200 dark:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-5 h-5 text-orange-600 animate-spin" />
              <span className="text-sm font-bold text-orange-700 dark:text-orange-300 tracking-wide">{currentData.badge}</span>
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping"></div>
            </div>

            {/* Enhanced Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-tight">
              <span className={`bg-gradient-to-r ${currentData.color} bg-clip-text text-transparent drop-shadow-sm`}>
                {currentData.title}
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-medium">
              {currentData.description}
            </p>

            {/* Enhanced Stats Row */}
            <div className="flex flex-wrap items-center gap-8 py-6">
              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">4.9 (2.3k+)</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Top Seller</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                <Shield className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Verified</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={handleOrderPopup}
                className={`group px-10 py-5 bg-gradient-to-r ${currentData.color} text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 relative overflow-hidden`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <ShoppingBag className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
              <button className="px-10 py-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-orange-200 dark:border-orange-600 hover:border-orange-400 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 shadow-xl">
                <Heart className="w-6 h-6 text-orange-500" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Enhanced Features */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { icon: Truck, title: "Fast Delivery", subtitle: "24hrs" },
                { icon: Gift, title: "Free Gift", subtitle: "With purchase" },
                { icon: Star, title: "Premium", subtitle: "Quality" }
              ].map((feature, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-orange-200 dark:border-orange-700">
                    <feature.icon className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-base font-bold text-gray-800 dark:text-gray-200">{feature.title}</p>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Content - Image */}
          <div className="relative">
            <div className={`relative transform transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-[50px] scale-95' : 'opacity-100 translate-x-0 scale-100'}`}>
              
              {/* Enhanced Image Container */}
              <div className="relative group">
                {/* Enhanced Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentData.color} rounded-3xl blur-3xl opacity-25 group-hover:opacity-35 transition-all duration-700 transform group-hover:scale-110 animate-pulse`}></div>
                
                {/* Secondary glow */}
                <div className={`absolute inset-4 bg-gradient-to-r ${currentData.color} rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition-all duration-500 transform group-hover:scale-105`}></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 border border-orange-100 dark:border-orange-800">
                  <img
                    src={currentData.img}
                    alt={currentData.title}
                    className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Enhanced Sale Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-base animate-bounce shadow-lg border-2 border-white">
                    <span className="drop-shadow-sm">SALE</span>
                  </div>
                  
                  {/* Enhanced Price Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-orange-100 dark:border-orange-700">
                    <p className="text-sm text-orange-600 font-semibold">Starting from</p>
                    <p className="text-3xl font-black text-gray-900 dark:text-white">
                      <span className="text-lg">Rs</span> 999
                    </p>
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Premium
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-xl animate-pulse border-4 border-white/50">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse delay-300 border-4 border-white/50">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>

                {/* New floating elements */}
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center mt-16 space-x-6">
          {ImageList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 rounded-full transition-all duration-500 hover:scale-110 ${
                index === currentSlide 
                  ? `w-16 bg-gradient-to-r ${currentData.color} shadow-lg` 
                  : 'w-4 bg-orange-200 dark:bg-orange-700 hover:bg-orange-300 dark:hover:bg-orange-600 shadow-md'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-white dark:fill-gray-900">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;