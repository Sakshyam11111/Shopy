import { useEffect, useState } from "react";

// Enhanced Button component with better animations
const Button = ({ text, bgColor, textColor, className, onClick, children }) => (
  <button 
    className={`${bgColor} ${textColor} ${className} transform transition-all duration-300 active:scale-95 relative overflow-hidden group`}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <span className="relative z-10 flex items-center justify-center">
      {text}
      {children}
    </span>
  </button>
);

// Enhanced product images with more variety
const productImages = {
  earphone: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=240&fit=crop&crop=center",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=240&fit=crop&crop=center",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=320&h=240&fit=crop&crop=center",
  gaming: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=320&h=240&fit=crop&crop=center",
  vr: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=240&fit=crop&crop=center",
  speaker: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=240&fit=crop&crop=center",
  smartphone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=240&fit=crop&crop=center",
  tablet: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=240&fit=crop&crop=center",
  camera: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=240&fit=crop&crop=center",
  drone: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=240&fit=crop&crop=center",
  keyboard: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=240&fit=crop&crop=center",
  mouse: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=240&fit=crop&crop=center",
  // Additional hero images
  headset: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop&crop=center",
  console: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center",
  airpods: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=240&fit=crop&crop=center",
  smartwatch: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=240&fit=crop&crop=center",
};

const Electronics = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    productImages.headset,
    productImages.console,
    productImages.airpods,
    productImages.smartwatch
  ];

  useEffect(() => {
    // Simulate AOS initialization
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);

    // Hero image rotation
    const heroTimer = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(heroTimer);
    };
  }, []);

  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const productCategories = [
    {
      id: 1,
      title: "Earphone",
      subtitle: "Premium Audio",
      description: "Crystal clear sound quality",
      gradient: "from-slate-800 via-slate-700 to-slate-900",
      buttonBg: "bg-blue-600 hover:bg-blue-700",
      buttonText: "text-white",
      textColor: "text-white",
      image: productImages.earphone,
      accent: "blue",
      pattern: "dots",
      price: "From Rs99",
      rating: 4.8,
      reviews: 2847
    },
    {
      id: 2,
      title: "Watch",
      subtitle: "Smart Tech",
      description: "Stay connected in style",
      gradient: "from-amber-500 via-yellow-500 to-orange-500",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-yellow-600",
      textColor: "text-white",
      image: productImages.watch,
      accent: "yellow",
      pattern: "waves",
      price: "From Rs299",
      rating: 4.9,
      reviews: 1923
    },
    {
      id: 3,
      title: "Laptop",
      subtitle: "Power & Performance",
      description: "Work. Create. Achieve.",
      gradient: "from-red-600 via-rose-600 to-pink-700",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-red-600",
      textColor: "text-white",
      image: productImages.laptop,
      accent: "red",
      pattern: "grid",
      span: "col-span-1 lg:col-span-2",
      price: "From Rs899",
      rating: 4.7,
      reviews: 3521
    },
    {
      id: 4,
      title: "Gaming",
      subtitle: "Ultimate Experience",
      description: "Level up your gameplay",
      gradient: "from-gray-800 via-gray-700 to-gray-900",
      buttonBg: "bg-red-600 hover:bg-red-700",
      buttonText: "text-white",
      textColor: "text-white",
      image: productImages.gaming,
      accent: "gray",
      pattern: "hexagon",
      span: "col-span-1 lg:col-span-2",
      price: "From Rs1,299",
      rating: 4.9,
      reviews: 4102
    },
    {
      id: 5,
      title: "VR Headset",
      subtitle: "Virtual Reality",
      description: "Immerse yourself",
      gradient: "from-emerald-600 via-green-600 to-teal-700",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-green-600",
      textColor: "text-white",
      image: productImages.vr,
      accent: "green",
      pattern: "triangles",
      price: "From Rs399",
      rating: 4.6,
      reviews: 1456
    },
    {
      id: 6,
      title: "Speaker",
      subtitle: "Rich Sound",
      description: "Feel every beat",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-blue-600",
      textColor: "text-white",
      image: productImages.speaker,
      accent: "blue",
      pattern: "circles",
      price: "From Rs149",
      rating: 4.5,
      reviews: 987
    },
    {
      id: 7,
      title: "Smartphone",
      subtitle: "Connected Life",
      description: "Power in your pocket",
      gradient: "from-violet-600 via-purple-600 to-indigo-700",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-purple-600",
      textColor: "text-white",
      image: productImages.smartphone,
      accent: "purple",
      pattern: "dots",
      price: "From Rs699",
      rating: 4.8,
      reviews: 5234
    },
    {
      id: 8,
      title: "Tablet",
      subtitle: "Creative Canvas",
      description: "Design. Draw. Dream.",
      gradient: "from-cyan-500 via-teal-500 to-blue-600",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-cyan-600",
      textColor: "text-white",
      image: productImages.tablet,
      accent: "cyan",
      pattern: "waves",
      price: "From Rs549",
      rating: 4.7,
      reviews: 2134
    },
    {
      id: 9,
      title: "Camera",
      subtitle: "Capture Moments",
      description: "Professional photography",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-orange-600",
      textColor: "text-white",
      image: productImages.camera,
      accent: "orange",
      pattern: "grid",
      span: "col-span-1 lg:col-span-2",
      price: "From Rs1,199",
      rating: 4.9,
      reviews: 1876
    },
    {
      id: 10,
      title: "Drone",
      subtitle: "Sky Explorer",
      description: "Aerial photography made easy",
      gradient: "from-lime-500 via-green-500 to-emerald-600",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-green-600",
      textColor: "text-white",
      image: productImages.drone,
      accent: "green",
      pattern: "triangles",
      span: "col-span-1 lg:col-span-2",
      price: "From Rs799",
      rating: 4.4,
      reviews: 756
    },
    {
      id: 11,
      title: "Keyboard",
      subtitle: "Mechanical Keys",
      description: "Type with precision",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-rose-600",
      textColor: "text-white",
      image: productImages.keyboard,
      accent: "rose",
      pattern: "hexagon",
      price: "From Rs129",
      rating: 4.6,
      reviews: 1234
    },
    {
      id: 12,
      title: "Mouse",
      subtitle: "Precision Control",
      description: "Gaming & productivity",
      gradient: "from-indigo-600 via-blue-600 to-cyan-700",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-indigo-600",
      textColor: "text-white",
      image: productImages.mouse,
      accent: "indigo",
      pattern: "circles",
      price: "From Rs79",
      rating: 4.3,
      reviews: 892
    }
  ];

  const getPatternOverlay = (pattern, accent) => {
    const patterns = {
      dots: (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-16 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      ),
      waves: (
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,20 Q25,10 50,20 T100,20 V0 H0 Z" fill="white" opacity="0.1"/>
            <path d="M0,40 Q25,30 50,40 T100,40 V20 H0 Z" fill="white" opacity="0.05"/>
          </svg>
        </div>
      ),
      grid: (
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-2 p-4">
            {Array.from({length: 16}).map((_, i) => (
              <div key={i} className="bg-white rounded-sm opacity-50"></div>
            ))}
          </div>
        </div>
      ),
      hexagon: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-8 right-8 animate-spin" style={{animationDuration: '20s'}}>
            <div className="w-12 h-12 bg-white transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute bottom-16 right-16 animate-bounce">
            <div className="w-8 h-8 bg-white transform rotate-12 rounded-md"></div>
          </div>
          <div className="absolute top-16 right-20 animate-pulse">
            <div className="w-6 h-6 bg-white transform rotate-45 rounded-md opacity-50"></div>
          </div>
        </div>
      ),
      triangles: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-6 right-12 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white animate-pulse"></div>
          <div className="absolute top-20 right-6 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-white animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-12 right-24 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      ),
      circles: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white rounded-full animate-ping"></div>
          <div className="absolute bottom-12 left-12 w-8 h-8 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 left-16 w-4 h-4 border border-white rounded-full animate-bounce"></div>
        </div>
      )
    };
    return patterns[pattern] || null;
  };

  const getFallbackImage = (title) => {
    const colors = {
      'Earphone': '#6366f1',
      'Watch': '#f59e0b',
      'Laptop': '#dc2626',
      'Gaming': '#374151',
      'VR Headset': '#059669',
      'Speaker': '#2563eb',
      'Smartphone': '#7c3aed',
      'Tablet': '#0891b2',
      'Camera': '#ea580c',
      'Drone': '#16a34a',
      'Keyboard': '#e11d48',
      'Mouse': '#4338ca'
    };
    
    const color = colors[title] || '#6b7280';
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='240' viewBox='0 0 300 240'%3E%3Crect width='300' height='240' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23ffffff' font-family='system-ui'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
  };

  const renderStars = (rating) => {
    return Array.from({length: 5}).map((_, i) => (
      <span key={i} className={`text-yellow-400 ${i < Math.floor(rating) ? 'opacity-100' : 'opacity-30'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Rotating Images */}
        <div className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900"></div>
          
          {/* Hero Background Image */}
          <div className="absolute inset-0 opacity-30">
            <img 
              src={heroImages[currentHeroImage]}
              alt="Hero Product"
              className="w-full h-full object-cover transition-opacity duration-1000"
              onError={(e) => {
                e.target.src = getFallbackImage('Electronics');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center text-white">
              <div className="inline-block mb-6 animate-bounce">
                <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                  ✨ New Collection 2025
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                Future of{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Electronics
                </span>
              </h1>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                Experience tomorrow's technology today with our cutting-edge collection of premium electronics
              </p>
              
              {/* Hero CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  text="Explore Collection"
                  bgColor="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  textColor="text-white"
                  className="px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                
                <Button
                  text="Watch Demo"
                  bgColor="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30"
                  textColor="text-white"
                  className="px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-3-11l3 3-3 3" />
                  </svg>
                </Button>
              </div>

              {/* Hero Image Indicators */}
              <div className="flex justify-center space-x-2 mt-12">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentHeroImage === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentHeroImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  🔥 Best Sellers
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Top{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Electronics
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover our most popular gadgets loved by thousands of customers worldwide
              </p>
            </div>

            {/* Enhanced Product Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {productCategories.map((product, index) => (
                <div
                  key={product.id}
                  className={`${product.span || ''} group relative h-96 overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${hoveredCard === product.id ? 'z-20' : 'z-10'}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}></div>
                  
                  {/* Enhanced Pattern Overlay */}
                  {getPatternOverlay(product.pattern, product.accent)}
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                  
                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    {/* Top Section with Rating */}
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={`px-3 py-1 ${product.textColor} bg-white bg-opacity-20 backdrop-blur-sm text-xs font-bold rounded-full uppercase tracking-wider`}>
                          {product.subtitle}
                        </span>
                        <div className={`mt-2 text-sm ${product.textColor} opacity-70 font-semibold`}>
                          {product.price}
                        </div>
                        {/* Rating Display */}
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(product.rating)}
                          </div>
                          <span className={`text-xs ${product.textColor} opacity-60`}>
                            ({product.reviews.toLocaleString()})
                          </span>
                        </div>
                      </div>
                      <div className={`w-3 h-3 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                    </div>

                    {/* Enhanced Product Image */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-500">
                      <div className="relative">
                        <img
                          src={imageErrors[product.id] ? getFallbackImage(product.title) : product.image}
                          alt={product.title}
                          loading="lazy"
                          className="w-48 h-auto opacity-90 drop-shadow-2xl rounded-lg filter group-hover:brightness-110 transition-all duration-300"
                          onError={() => handleImageError(product.id)}
                        />
                        {/* Enhanced image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg group-hover:from-transparent transition-all duration-300"></div>
                        
                        {/* Product Badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                          Hot!
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Bottom Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-4xl font-black ${product.textColor} mb-1 group-hover:scale-105 transform transition-transform duration-300`}>
                          {product.title}
                        </h3>
                        <p className={`text-sm ${product.textColor} opacity-80 font-medium`}>
                          {product.description}
                        </p>
                      </div>
                      
                      {/* Enhanced Button Section */}
                      <div className="flex items-center space-x-3">
                        <Button
                          text="Shop Now"
                          bgColor={product.buttonBg}
                          textColor={product.buttonText}
                          className="px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                          onClick={() => console.log(`Shopping ${product.title}`)}
                        />
                        
                        {/* Enhanced Action Button */}
                        <div className={`w-12 h-12 ${product.buttonBg} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg cursor-pointer`}>
                          <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats Section */}
            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Happy Customers", icon: "👥", color: "from-blue-500 to-cyan-500" },
                { number: "1000+", label: "Products", icon: "📱", color: "from-purple-500 to-pink-500" },
                { number: "99%", label: "Satisfaction", icon: "⭐", color: "from-green-500 to-emerald-500" },
                { number: "24/7", label: "Support", icon: "🛟", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 text-2xl group-hover:rotate-12 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="text-center mt-32">
              <div className="relative inline-flex items-center space-x-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl text-white overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient-x"></div>
                
                <div className="relative z-10 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce">+</div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce" style={{animationDelay: '0.5s'}}>★</div>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce" style={{animationDelay: '1s'}}>♦</div>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-white font-bold text-xl mb-1">Ready to explore more?</p>
                    <p className="text-white/80 text-sm">Join 50,000+ satisfied customers worldwide</p>
                  </div>
                  
                  <Button
                    text="View All Products"
                    bgColor="bg-white hover:bg-gray-50"
                    textColor="text-blue-600"
                    className="px-8 py-4 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* New Features Section */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free Shipping",
                  description: "Free delivery on orders over $99",
                  icon: "🚚",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "1 Year Warranty",
                  description: "Comprehensive protection for all products",
                  icon: "🛡️",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Easy Returns",
                  description: "30-day hassle-free return policy",
                  icon: "↩️",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Electronics;