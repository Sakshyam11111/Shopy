import React, { useState, useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm">
                🌟 Our Story
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Crafting Dreams Into
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Since 2019, we've been on a mission to revolutionize fashion e-commerce, 
              one satisfied customer at a time.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { label: "Happy Customers", value: counters.customers.toLocaleString() + "+", icon: Users },
                { label: "Products", value: counters.products.toLocaleString() + "+", icon: Gift },
                { label: "Countries", value: counters.countries + "+", icon: Globe },
                { label: "Rating", value: counters.rating + "★", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                  Our Journey
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Vision to
                <span className="block text-orange-500">Global Impact</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What started as a simple idea in a small apartment has grown into a global fashion 
                destination trusted by thousands. Our journey has been driven by an unwavering 
                commitment to quality, innovation, and customer satisfaction.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every milestone we've achieved reflects our dedication to not just selling products, 
                but building lasting relationships with our community of fashion enthusiasts worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Join Our Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button className="bg-white border-2 border-orange-200 text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop"
                  alt="Our Story"
                  className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-800">Growing Strong</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every experience we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-slideUp' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Milestones That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every year has brought new achievements and deeper connections with our community
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-purple-600 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:text-right'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-orange-400 rounded-full z-10 hidden lg:block"></div>

                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl mb-4`}>
                        <milestone.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-sm text-orange-500 font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                Meet The Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The People Behind
              <span className="block text-orange-500">Our Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate team of innovators, creators, and dreamers working together to shape the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-slideUp' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of our growing community and experience fashion like never before
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;