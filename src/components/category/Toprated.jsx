import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Star,
  Zap,
  Headphones,
  Laptop,
  Watch,
  Gamepad2,
  VolumeX,
  Glasses,
  TrendingUp,
  Flame,
  ShoppingBag,
  Heart,
  User,
  Users,
  Baby,
  Sparkles
} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css"; 

// Enhanced product data with fashion categories
const productData = [
  // Electronics
  {
    id: 1,
    title: "Earphone",
    subtitle: "Enjoy",
    description: "Premium Sound",
    category: "Electronics",
    bgGradient: "from-slate-900 to-slate-800",
    textColor: "text-white",
    buttonBg: "bg-orange-500 hover:bg-orange-600",
    buttonText: "text-white",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=320&h=320&fit=crop",
    rating: 4.8,
    price: "Rs.1,299",
    discount: "25% OFF",
    isNew: false
  },
  {
    id: 2,
    title: "Smart Watch",
    subtitle: "Enjoy",
    description: "Advanced Features",
    category: "Electronics",
    bgGradient: "from-orange-500 to-amber-500",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-orange-600",
    icon: Watch,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=320&h=320&fit=crop",
    rating: 4.9,
    price: "Rs.2,999",
    discount: "30% OFF",
    isNew: true
  },
  {
    id: 3,
    title: "Gaming Laptop",
    subtitle: "Enjoy",
    description: "Pro Performance",
    category: "Electronics",
    bgGradient: "from-red-600 to-orange-600",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-red-600",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=320&h=320&fit=crop",
    rating: 4.7,
    price: "Rs.45,999",
    discount: "15% OFF",
    isLarge: true,
    isNew: false
  },
  {
    id: 4,
    title: "VR Headset",
    subtitle: "Enjoy",
    description: "Virtual Reality",
    category: "Electronics",
    bgGradient: "from-emerald-500 to-green-500",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-emerald-600",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=320&h=320&fit=crop",
    rating: 4.6,
    price: "Rs.8,999",
    discount: "35% OFF",
    isNew: true
  },
  // Male Wear
  {
    id: 5,
    title: "Men's Fashion",
    subtitle: "Style",
    description: "Premium Collection",
    category: "Male Wear",
    bgGradient: "from-gray-900 to-gray-700",
    textColor: "text-white",
    buttonBg: "bg-blue-500 hover:bg-blue-600",
    buttonText: "text-white",
    icon: User,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=320&h=320&fit=crop",
    rating: 4.5,
    price: "Rs.1,999",
    discount: "40% OFF",
    isLarge: true,
    isNew: false
  },
  {
    id: 6,
    title: "Casual Shirts",
    subtitle: "Style",
    description: "Comfortable Fit",
    category: "Male Wear",
    bgGradient: "from-blue-600 to-indigo-600",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-blue-600",
    icon: User,
    image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=320&h=320&fit=crop",
    rating: 4.4,
    price: "Rs.899",
    discount: "50% OFF",
    isNew: true
  },
  {
    id: 7,
    title: "Formal Wear",
    subtitle: "Style",
    description: "Office Ready",
    category: "Male Wear",
    bgGradient: "from-purple-700 to-indigo-700",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-purple-600",
    icon: User,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop",
    rating: 4.7,
    price: "Rs.2,499",
    discount: "30% OFF",
    isNew: false
  },
  // Female Wear
  {
    id: 8,
    title: "Women's Fashion",
    subtitle: "Style",
    description: "Elegant Collection",
    category: "Female Wear",
    bgGradient: "from-pink-500 to-rose-500",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-pink-600",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=320&h=320&fit=crop",
    rating: 4.9,
    price: "Rs.1,799",
    discount: "45% OFF",
    isLarge: true,
    isNew: true
  },
  {
    id: 9,
    title: "Summer Dresses",
    subtitle: "Style",
    description: "Light & Breezy",
    category: "Female Wear",
    bgGradient: "from-yellow-400 to-orange-400",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-yellow-600",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=320&h=320&fit=crop",
    rating: 4.6,
    price: "Rs.1,299",
    discount: "35% OFF",
    isNew: false
  },
  {
    id: 10,
    title: "Party Wear",
    subtitle: "Style",
    description: "Glamorous Look",
    category: "Female Wear",
    bgGradient: "from-fuchsia-600 to-pink-600",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-fuchsia-600",
    icon: Sparkles,
    image: "https://imgs.search.brave.com/xCgMLMOizEB8P1QpZHgI-J394qVDJ_luFH2-aLBv5cI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5rYXJ0bWF4/LmluL2xpdmUvY292/ZXIvNDk1eDY2MC9z/aXRlcy85czE0NU15/WnJXZElBd3BVMEpZ/Uy9wcm9kdWN0LWlt/YWdlcy9lbGVnYW50/X2dvbGRfcGFydHlf/d2Vhcl9nb3duXzE3/MzcwMjkyNTRhczMx/OTUxNTguanBn",
    rating: 4.8,
    price: "Rs.3,499",
    discount: "25% OFF",
    isNew: true
  },
  // Kids Wear
  {
    id: 11,
    title: "Kids Fashion",
    subtitle: "Style",
    description: "Cute & Comfortable",
    category: "Kids Wear",
    bgGradient: "from-cyan-400 to-blue-400",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-cyan-600",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=320&h=320&fit=crop",
    rating: 4.7,
    price: "Rs.799",
    discount: "40% OFF",
    isLarge: true,
    isNew: false
  },
  {
    id: 12,
    title: "School Uniforms",
    subtitle: "Style",
    description: "Quality Fabric",
    category: "Kids Wear",
    bgGradient: "from-green-500 to-teal-500",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-green-600",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=320&h=320&fit=crop",
    rating: 4.5,
    price: "Rs.699",
    discount: "30% OFF",
    isNew: true
  },
  {
    id: 13,
    title: "Playwear",
    subtitle: "Style",
    description: "Fun & Durable",
    category: "Kids Wear",
    bgGradient: "from-lime-400 to-green-400",
    textColor: "text-white",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonText: "text-lime-600",
    icon: Baby,
    image: "https://imgs.search.brave.com/peBvBgqBGvudbt5KORfX3GZWX9QaLxwS4xasdlTPYxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhY29sbGVjdGlv/bi5jb20vbWFzX2Fz/c2V0cy9jYWNoZS9p/bWFnZS8yLzcvMS8y/LzUwMHgtMjU2MDc0/Ny5KcGc",
    rating: 4.6,
    price: "Rs.999",
    discount: "35% OFF",
    isNew: false
  }
];

// Function to shuffle array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Button = ({ text, bgColor, textColor, onClick }) => (
  <button 
    onClick={onClick}
    className={`${bgColor} ${textColor} px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
  >
    <ShoppingBag className="w-4 h-4" />
    {text}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div 
    data-aos="fade-up" 
    data-aos-delay="200" 
    className="flex flex-wrap justify-center gap-3 mb-8"
  >
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
          activeCategory === category
            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
            : 'bg-white/80 text-gray-600 hover:bg-orange-50'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

const TopRated = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Electronics", "Male Wear", "Female Wear", "Kids Wear"];

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-out-quad",
      delay: 100,
      once: true,
    });

    // Shuffle products on component mount
    const shuffled = shuffleArray(productData);
    setShuffledProducts(shuffled);
    setFilteredProducts(shuffled);
  }, []);

  useEffect(() => {
    // Filter products based on active category
    if (activeCategory === "All") {
      setFilteredProducts(shuffledProducts);
    } else {
      setFilteredProducts(shuffledProducts.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, shuffledProducts]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleReshuffle = () => {
    const newShuffled = shuffleArray(productData);
    setShuffledProducts(newShuffled);
    if (activeCategory === "All") {
      setFilteredProducts(newShuffled);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-orange-50/30 to-amber-50/20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/50 rounded-full mb-3">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">Top Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Best Selling <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover our top-rated electronics and fashion items trusted by thousands of customers
          </p>
          
          {/* Shuffle Button */}
          <button
            onClick={handleReshuffle}
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            Shuffle Products
          </button>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Stats Bar */}
        <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Products", value: filteredProducts.length, icon: ShoppingBag },
            { label: "Categories", value: categories.length - 1, icon: Users },
            { label: "Avg Rating", value: "4.7★", icon: Star },
            { label: "Active Deals", value: "100%", icon: Flame }
          ].map((stat, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={`${400 + index * 100}`}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-orange-100"
            >
              <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className={`${product.isLarge ? 'col-span-1 lg:col-span-2' : ''} group relative`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="zoom-in"
              data-aos-delay={`${200 + index * 100}`}
            >
              <div className={`
                relative h-[420px] rounded-3xl overflow-hidden
                bg-gradient-to-br ${product.bgGradient}
                transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2
                shadow-lg hover:shadow-2xl
                ${hoveredCard === product.id ? 'shadow-orange-400/30' : ''}
                border border-white/10
              `}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-6 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-16 h-16 border border-white/20 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute top-1/2 left-6 w-8 h-8 border border-white/20 rounded-full animate-pulse animation-delay-2000"></div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse">
                    {product.discount}
                  </div>
                  {product.isNew && (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      NEW
                    </div>
                  )}
                </div>

                {/* Category & Rating Badge */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {product.category}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    {product.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className={`flex items-center gap-3 mb-4 ${product.textColor}`}>
                      <product.icon className="w-8 h-8" />
                      <div className="w-12 h-[2px] bg-current opacity-50"></div>
                    </div>
                    
                    <p className={`text-xs uppercase tracking-widest opacity-80 mb-2 ${product.textColor} font-semibold`}>
                      {product.subtitle}
                    </p>
                    <p className={`text-xl font-semibold mb-1 ${product.textColor} opacity-90`}>
                      With
                    </p>
                    <h3 className={`text-3xl sm:text-4xl font-black mb-3 ${product.textColor} leading-tight`}>
                      {product.title}
                    </h3>
                    <p className={`text-base font-medium mb-5 ${product.textColor} opacity-80`}>
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`flex items-center justify-between ${product.textColor}`}>
                      <span className="text-2xl font-bold">{product.price}</span>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-xs opacity-70 font-medium">Popular</span>
                      </div>
                    </div>
                    
                    <Button 
                      text="Shop Now" 
                      bgColor={product.buttonBg} 
                      textColor={product.buttonText}
                      onClick={() => console.log(`Shopping for ${product.title}`)}
                    />
                  </div>
                </div>

                {/* Product Image */}
                <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 overflow-hidden rounded-tl-3xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    loading="lazy"
                    className={`
                      w-full h-full object-cover object-center
                      transform transition-all duration-700
                      ${hoveredCard === product.id ? 'scale-110 rotate-2' : 'scale-100'}
                      ${product.isLarge ? 'opacity-90' : 'opacity-85'}
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Hover Effects */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}></div>

                {/* Floating Sparkle Effect */}
                <div className={`
                  absolute top-1/3 -right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full
                  flex items-center justify-center transform transition-all duration-500
                  ${hoveredCard === product.id ? 'translate-x-0 opacity-100 rotate-180' : 'translate-x-8 opacity-0'}
                `}>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-white/90 to-orange-50/90 px-8 py-6 rounded-2xl shadow-xl border border-orange-200/50">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-gray-800">
                  Discover More Amazing Products
                </p>
                <p className="text-sm text-gray-600">
                  Join thousands of happy customers
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handleReshuffle}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <Zap className="w-4 h-4" />
                Surprise Me
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;