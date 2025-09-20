import { useEffect, useState } from "react";

// Mock Button component
const Button = ({ text, bgColor, textColor, className, onClick }) => (
  <button 
    className={`${bgColor} ${textColor} ${className} transform transition-all duration-300 active:scale-95`}
    onClick={onClick}
  >
    {text}
  </button>
);

// Real product images using Unsplash
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
  mouse: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=240&fit=crop&crop=center"
};

const Electronics = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    // Simulate AOS initialization
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
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
      price: "From $99"
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
      price: "From $299"
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
      price: "From $899"
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
      price: "From $1,299"
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
      price: "From $399"
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
      price: "From $149"
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
      price: "From $699"
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
      price: "From $549"
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
      price: "From $1,199"
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
      price: "From $799"
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
      price: "From $129"
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
      price: "From $79"
    }
  ];

  const getPatternOverlay = (pattern, accent) => {
    const patterns = {
      dots: (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-8 left-16 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-white rounded-full"></div>
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
              <div key={i} className="bg-white rounded-sm"></div>
            ))}
          </div>
        </div>
      ),
      hexagon: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-8 right-8">
            <div className="w-12 h-12 bg-white transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute bottom-16 right-16">
            <div className="w-8 h-8 bg-white transform rotate-12 rounded-md"></div>
          </div>
          <div className="absolute top-16 right-20">
            <div className="w-6 h-6 bg-white transform rotate-45 rounded-md opacity-50"></div>
          </div>
        </div>
      ),
      triangles: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-6 right-12 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="absolute top-20 right-6 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="absolute top-12 right-24 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
        </div>
      ),
      circles: (
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-8 h-8 border border-white rounded-full"></div>
          <div className="absolute top-20 left-16 w-4 h-4 border border-white rounded-full"></div>
        </div>
      )
    };
    return patterns[pattern] || null;
  };

  // Fallback SVG for failed images
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full dark:bg-blue-900 dark:text-blue-200">
                ✨ Featured Collection
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Explore Top{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Electronics
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover cutting-edge gadgets and innovative devices that redefine your digital lifestyle
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
                
                {/* Pattern Overlay */}
                {getPatternOverlay(product.pattern, product.accent)}
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                
                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`px-3 py-1 ${product.textColor} bg-white bg-opacity-20 backdrop-blur-sm text-xs font-bold rounded-full uppercase tracking-wider`}>
                        {product.subtitle}
                      </span>
                      <div className={`mt-2 text-sm ${product.textColor} opacity-70 font-semibold`}>
                        {product.price}
                      </div>
                    </div>
                    <div className={`w-3 h-3 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Product Image */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      <img
                        src={imageErrors[product.id] ? getFallbackImage(product.title) : product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-48 h-auto opacity-90 drop-shadow-2xl rounded-lg"
                        onError={() => handleImageError(product.id)}
                      />
                      {/* Image overlay for better integration */}
                      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg group-hover:bg-opacity-0 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-4xl font-black ${product.textColor} mb-1 group-hover:scale-105 transform transition-transform duration-300`}>
                        {product.title}
                      </h3>
                      <p className={`text-sm ${product.textColor} opacity-80 font-medium`}>
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Enhanced Button */}
                    <div className="flex items-center space-x-2">
                      <Button
                        text="Browse Collection"
                        bgColor={product.buttonBg}
                        textColor={product.buttonText}
                        className="px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                        onClick={() => console.log(`Browsing ${product.title}`)}
                      />
                      <div className={`w-12 h-12 ${product.buttonBg} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
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

          {/* Stats Section */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Customers", icon: "👥" },
              { number: "1000+", label: "Products", icon: "📱" },
              { number: "99%", label: "Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support", icon: "🛟" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">+</div>
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">★</div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">♦</div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold">Ready to explore more?</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Discover our complete electronics collection</p>
              </div>
              <Button
                text="View All Products"
                bgColor="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                textColor="text-white"
                className="px-8 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;