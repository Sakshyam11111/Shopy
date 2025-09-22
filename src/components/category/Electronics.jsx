import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced Button component with Framer Motion
const Button = ({ text, bgColor, textColor, className, onClick, children }) => (
  <motion.button
    className={`${bgColor} ${textColor} ${className} relative overflow-hidden group rounded-2xl`}
    onClick={onClick}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="absolute inset-0 bg-white"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />
    <span className="relative z-10 flex items-center justify-center">
      {text}
      {children}
    </span>
  </motion.button>
);

// Product images (unchanged)
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
    productImages.smartwatch,
  ];

  useEffect(() => {
    // Trigger card animations
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);

    // Hero image rotation
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(heroTimer);
    };
  }, []);

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({
      ...prev,
      [productId]: true,
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
      reviews: 2847,
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
      reviews: 1923,
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
      reviews: 3521,
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
      reviews: 4102,
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
      reviews: 1456,
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
      reviews: 987,
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
      reviews: 5234,
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
      reviews: 2134,
    },
    {
      id: 9,
      title: "Camera",
      subtitle: "Capture Moments",
      description: "Professional photography",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      buttonBg: "bg-white hover:bg-gray-50",
      buttonText: "text-orange-lampe-600",
      textColor: "text-white",
      image: productImages.camera,
      accent: "orange",
      pattern: "grid",
 shinespan: "col-span-1 lg:col-span-2",
      price: "From Rs1,199",
      rating: 4.9,
      reviews: 1876,
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
      reviews: 756,
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
      reviews: 1234,
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
      reviews: 892,
    },
  ];

  const getPatternOverlay = (pattern, accent) => {
    const patterns = {
      dots: (
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                top: [4, 8, 16, 20, 12][i] * 4,
                left: [4, 16, 8, 20, 24][i] * 4,
              }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </motion.div>
      ),
      waves: (
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,20 Q25,10 50,20 T100,20 V0 H0 Z"
              fill="white"
              opacity={0.1}
              animate={{ d: ["M0,20 Q25,10 50,20 T100,20 V0 H0 Z", "M0,15 Q25,25 50,15 T100,15 V0 H0 Z"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M0,40 Q25,30 50,40 T100,40 V20 H0 Z"
              fill="white"
              opacity={0.05}
              animate={{ d: ["M0,40 Q25,30 50,40 T100,40 V20 H0 Z", "M0,35 Q25,45 50,35 T100,35 V20 H0 Z"] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </motion.div>
      ),
      grid: (
        <motion.div
          className="absolute inset-0 opacity-10 grid grid-cols-8 grid-rows-8 gap-2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-sm"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </motion.div>
      ),
      hexagon: (
        <motion.div
          className="absolute inset-0 opacity-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          {[
            { top: 8, right: 8, size: 12, rotate: 45, duration: 20 },
            { top: "auto", bottom: 16, right: 16, size: 8, rotate: 12, duration: 2 },
            { top: 16, right: 20, size: 6, rotate: 45, duration: 1, opacity: 0.5 },
          ].map((hex, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: hex.top ? `${hex.top * 4}px` : "auto",
                bottom: hex.bottom ? `${hex.bottom * 4}px` : "auto",
                right: `${hex.right * 4}px`,
              }}
              animate={
                i === 0
                  ? { rotate: [0, 360] }
                  : i === 1
                  ? { y: [-10, 10] }
                  : { scale: [1, 1.5, 1] }
              }
              transition={{
                duration: hex.duration,
                repeat: Infinity,
                repeatType: i === 1 ? "reverse" : undefined,
              }}
            >
              <div
                className="bg-white rounded-lg"
                style={{
                  width: `${hex.size * 4}px`,
                  height: `${hex.size * 4}px`,
                  transform: `rotate(${hex.rotate}deg)`,
                  opacity: hex.opacity || 1,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      ),
      triangles: (
        <motion.div
          className="absolute inset-0 opacity-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          {[
            { right: 12, size: 4, delay: 0 },
            { right: 6, size: 3, delay: 1 },
            { right: 24, size: 2, delay: 2 },
          ].map((tri, i) => (
            <motion.div
              key={i}
              className="absolute w-0 h-0 border-l-transparent border-r-transparent border-b-white"
              style={{
                top: `${6 + i * 4}rem`,
                right: `${tri.right * 4}px`,
                borderLeftWidth: tri.size * 4,
                borderRightWidth: tri.size * 4,
                borderBottomWidth: tri.size * 8,
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, delay: tri.delay, repeat: Infinity }}
            />
          ))}
        </motion.div>
      ),
      circles: (
        <motion.div
          className="absolute inset-0 opacity-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          {[
            { left: 6, size: 16, top: 6, type: "ping" },
            { left: 12, size: 8, bottom: 12, type: "pulse" },
            { left: 16, size: 4, top: 20, type: "bounce" },
          ].map((circle, i) => (
            <motion.div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                left: `${circle.left * 4}px`,
                top: circle.top ? `${circle.top * 4}px` : "auto",
                bottom: circle.bottom ? `${circle.bottom * 4}px` : "auto",
                width: `${circle.size * 4}px`,
                height: `${circle.size * 4}px`,
              }}
              animate={
                circle.type === "ping"
                  ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                  : circle.type === "bounce"
                  ? { y: [-10, 10] }
                  : { scale: [1, 1.3, 1] }
              }
              transition={{
                duration: circle.type === "bounce" ? 1 : 2,
                repeat: Infinity,
                repeatType: circle.type === "bounce" ? "reverse" : undefined,
              }}
            />
          ))}
        </motion.div>
      ),
    };
    return patterns[pattern] || null;
  };

  const getFallbackImage = (title) => {
    const colors = {
      Earphone: "#6366f1",
      Watch: "#f59e0b",
      Laptop: "#dc2626",
      Gaming: "#374151",
      "VR Headset": "#059669",
      Speaker: "#2563eb",
      Smartphone: "#7c3aed",
      Tablet: "#0891b2",
      Camera: "#ea580c",
      Drone: "#16a34a",
      Keyboard: "#e11d48",
      Mouse: "#4338ca",
    };
    const color = colors[title] || "#6b7280";
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='240' viewBox='0 0 300 240'%3E%3Crect width='300' height='240' fill='${encodeURIComponent(
      color
    )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23ffffff' font-family='system-ui'%3E${encodeURIComponent(
      title
    )}%3C/text%3E%3C/svg%3E`;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        className={`text-yellow-400 ${i < Math.floor(rating) ? "opacity-100" : "opacity-30"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Blobs */}
      <motion.div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[
          { top: "25%", left: "25%", color: "bg-blue-400" },
          { top: "75%", right: "25%", color: "bg-purple-400" },
          { bottom: "25%", left: "50%", color: "bg-pink-400" },
          { top: "50%", right: "33%", color: "bg-green-400" },
        ].map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 ${blob.color} rounded-full mix-blend-multiply filter blur-xl`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatType: "reverse" }}
            style={{
              top: blob.top,
              left: blob.left,
              right: blob.right,
              bottom: blob.bottom,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10">
        {/* Hero Section with Rotating Images */}
        <motion.div
          className="relative py-32 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroImage}
              className="absolute inset-0 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={heroImages[currentHeroImage]}
                alt="Hero Product"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = getFallbackImage("Electronics");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center text-white">
              <motion.div
                className="inline-block mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                  ✨ New Collection 2025
                </span>
              </motion.div>
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Future of{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Electronics
                </span>
              </motion.h1>
              <motion.p
                className="text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience tomorrow's technology today with our cutting-edge collection of premium electronics
              </motion.p>

              {/* Hero CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  text="Explore Collection"
                  bgColor="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  textColor="text-white"
                  className="px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                >
                  <motion.svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </Button>
                <Button
                  text="Watch Demo"
                  bgColor="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30"
                  textColor="text-white"
                  className="px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                >
                  <motion.svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-3-11l3 3-3 3"
                    />
                  </motion.svg>
                </Button>
              </motion.div>

              {/* Hero Image Indicators */}
              <motion.div
                className="flex justify-center space-x-2 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentHeroImage === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                    onClick={() => setCurrentHeroImage(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Categories Section */}
        <motion.div
          className="py-24 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  🔥 Best Sellers
                </span>
              </motion.div>
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Top{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Electronics
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover our most popular gadgets loved by thousands of customers worldwide
              </motion.p>
            </motion.div>

            {/* Enhanced Product Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <AnimatePresence>
                {productCategories.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={`${product.span || ""} group relative h-96 overflow-hidden rounded-3xl shadow-2xl cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{
                      scale: 1.02,
                      y: -8,
                      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                    {getPatternOverlay(product.pattern, product.accent)}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: hoveredCard === product.id ? "100%" : "-100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <div className="relative h-full flex flex-col justify-between p-8">
                      <motion.div
                        className="flex justify-between items-start"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div>
                          <motion.span
                            className={`px-3 py-1 ${product.textColor} bg-white bg-opacity-20 backdrop-blur-sm text-xs font-bold rounded-full uppercase tracking-wider`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {product.subtitle}
                          </motion.span>
                          <motion.div
                            className={`mt-2 text-sm ${product.textColor} opacity-70 font-semibold`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {product.price}
                          </motion.div>
                          <motion.div
                            className="mt-2 flex items-center space-x-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <div className="flex">{renderStars(product.rating)}</div>
                            <span className={`text-xs ${product.textColor} opacity-60`}>
                              ({product.reviews.toLocaleString()})
                            </span>
                          </motion.div>
                        </div>
                        <motion.div
                          className="w-3 h-3 bg-white rounded-full"
                          initial={{ opacity: 0.6 }}
                          animate={{ opacity: hoveredCard === product.id ? 1 : 0.6, scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>

                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        animate={{
                          scale: hoveredCard === product.id ? 1.1 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="relative">
                          <img
                            src={imageErrors[product.id] ? getFallbackImage(product.title) : product.image}
                            alt={product.title}
                            loading="lazy"
                            className="w-48 h-auto opacity-90 drop-shadow-2xl rounded-lg filter group-hover:brightness-110"
                            onError={() => handleImageError(product.id)}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: hoveredCard === product.id ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredCard === product.id ? 1 : 0, y: hoveredCard === product.id ? 0 : 10 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                          >
                            Hot!
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div>
                          <motion.h3
                            className={`text-4xl font-black ${product.textColor} mb-1`}
                            animate={{ scale: hoveredCard === product.id ? 1.05 : 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {product.title}
                          </motion.h3>
                          <motion.p
                            className={`text-sm ${product.textColor} opacity-80 font-medium`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {product.description}
                          </motion.p>
                        </div>
                        <motion.div
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Button
                            text="Shop Now"
                            bgColor={product.buttonBg}
                            textColor={product.buttonText}
                            className="px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm flex items-center space-x-2"
                            onClick={() => console.log(`Shopping ${product.title}`)}
                          />
                          <motion.div
                            className={`w-12 h-12 ${product.buttonBg} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer`}
                            animate={{ rotate: hoveredCard === product.id ? 12 : 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <svg
                              className="w-5 h-5 text-current"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-white rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === product.id ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {[
                { number: "50K+", label: "Happy Customers", icon: "👥", color: "from-blue-500 to-cyan-500" },
                { number: "1000+", label: "Products", icon: "📱", color: "from-purple-500 to-pink-500" },
                { number: "99%", label: "Satisfaction", icon: "⭐", color: "from-green-500 to-emerald-500" },
                { number: "24/7", label: "Support", icon: "🛟", color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 text-2xl`}
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl font-black text-gray-900 mb-2"
                    animate={{ color: hoveredCard ? "#2563eb" : "#111827" }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Call to Action Section */}
            <motion.div
              className="text-center mt-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative inline-flex items-center space-x-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl text-white overflow-hidden"
                animate={{
                  backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative z-10 flex items-center space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div className="flex -space-x-2">
                    {[
                      { icon: "+", color: "from-cyan-400 to-blue-500", delay: 0 },
                      { icon: "★", color: "from-purple-400 to-pink-500", delay: 0.5 },
                      { icon: "♦", color: "from-pink-400 to-red-500", delay: 1 },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                        animate={{ y: [-10, 10] }}
                        transition={{ duration: 1, delay: item.delay, repeat: Infinity, repeatType: "reverse" }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-white font-bold text-xl mb-1">Ready to explore more?</p>
                    <p className="text-white/80 text-sm">Join 50,000+ satisfied customers worldwide</p>
                  </motion.div>
                  <Button
                    text="View All Products"
                    bgColor="bg-white hover:bg-gray-50"
                    textColor="text-blue-600"
                    className="px-8 py-4 rounded-2xl font-bold shadow-lg"
                  >
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* New Features Section */}
            <motion.div
              className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  title: "Free Shipping",
                  description: "Free delivery on orders over $99",
                  icon: "🚚",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "1 Year Warranty",
                  description: "Comprehensive protection for all products",
                  icon: "🛡️",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "Easy Returns",
                  description: "30-day hassle-free return policy",
                  icon: "↩️",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 text-3xl shadow-lg`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    animate={{ color: hoveredCard ? "#2563eb" : "#111827" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Electronics;