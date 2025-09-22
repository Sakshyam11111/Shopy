import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Target, 
  Zap, 
  Shield, 
  Truck, 
  Headphones, 
  Gift,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Coffee,
  Lightbulb,
  Rocket
} from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    countries: 0,
    rating: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = {
        customers: 50000,
        products: 10000,
        countries: 25,
        rating: 4.9
      };
      
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          customers: Math.floor(targets.customers * progress),
          products: Math.floor(targets.products * progress),
          countries: Math.floor(targets.countries * progress),
          rating: Math.min(targets.rating, (targets.rating * progress).toFixed(1))
        });
        
        if (step >= steps) clearInterval(interval);
      }, stepTime);
    };
    
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://imgs.search.brave.com/rz1rLGxmEbnyeiH1fDbkOsJMDmuUkUW8lxjqnQruJ2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waHlz/aWNhbGVkdWNhdGlv/bmFuZHdlbGxuZXNz/Lm1pdC5lZHUvd3At/Y29udGVudC91cGxv/YWRzL1VudGl0bGVk/LTEucG5n",
      bio: "Visionary leader with 15+ years in fashion industry",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer passionate about user experience",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Digital marketing expert driving global brand growth",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack engineer building scalable solutions",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to revolutionize online shopping",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020",
      title: "First 1K Customers",
      description: "Reached our first milestone of satisfied customers",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded to serve customers in 25+ countries",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Winner of 'Best E-commerce Platform' award",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2023",
      title: "50K+ Happy Customers",
      description: "Celebrating our growing community of fashion enthusiasts",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Innovation Continues",
      description: "Launching AI-powered personal shopping experience",
      icon: Sparkles,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make puts our customers at the center.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We source only the finest materials and craftsmanship.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Constantly pushing boundaries to enhance your experience.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Building connections that transcend geographical boundaries.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "On orders over $99"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium materials only"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help"
    },
    {
      icon: Gift,
      title: "Exclusive Deals",
      description: "Member-only offers"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm">
                🌟 Our Story
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Crafting Dreams Into
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Reality
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Since 2019, we've been on a mission to revolutionize fashion e-commerce, 
              one satisfied customer at a time.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              variants={containerVariants}
            >
              {[
                { label: "Happy Customers", value: counters.customers.toLocaleString() + "+", icon: Users },
                { label: "Products", value: counters.products.toLocaleString() + "+", icon: Gift },
                { label: "Countries", value: counters.countries + "+", icon: Globe },
                { label: "Rating", value: counters.rating + "★", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants} className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                  Our Journey
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Vision to
                <span className="block text-orange-500">Global Impact</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-6">
                What started as a simple idea in a small apartment has grown into a global fashion 
                destination trusted by thousands. Our journey has been driven by an unwavering 
                commitment to quality, innovation, and customer satisfaction.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-8">
                Every milestone we've achieved reflects our dedication to not just selling products, 
                but building lasting relationships with our community of fashion enthusiasts worldwide.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="flex items-center gap-2">
                    Join Our Story
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </motion.button>
                
                <motion.button
                  className="bg-white border-2 border-orange-200 text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg"
                  whileHover={{ scale: 1.05, backgroundColor: '#fef3e8' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-20"
                animate={{ opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop"
                alt="Our Story"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  />
                  <span className="font-semibold text-gray-800">Growing Strong</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                Our Values
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every experience we create
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="relative p-8 bg-white rounded-3xl shadow-lg"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 rounded-3xl`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                Our Journey
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Milestones That Matter
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every year has brought new achievements and deeper connections with our community
            </motion.p>
          </motion.div>

          <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-purple-600 rounded-full hidden lg:block"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:text-right'}`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-orange-400 rounded-full z-10 hidden lg:block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  />

                  <motion.div
                    className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} bg-white rounded-3xl p-8 shadow-lg`}
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl mb-4`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <milestone.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="text-sm text-orange-500 font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>

                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                Meet The Team
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The People Behind
              <span className="block text-orange-500">Our Success</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate team of innovators, creators, and dreamers working together to shape the future
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="group relative bg-white rounded-3xl p-6 shadow-lg"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <motion.div className="flex gap-3" variants={containerVariants}>
                  <motion.button
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"
                    whileHover={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center"
                    whileHover={{ backgroundColor: '#1f2937', color: '#ffffff' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional shopping experience
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="text-center p-8 bg-white rounded-3xl shadow-lg"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Journey?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Become part of our growing community and experience fashion like never before
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.button
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex items-center gap-2 justify-center">
                  Start Shopping
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;