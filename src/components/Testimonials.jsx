import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data with more realistic testimonials
const TestimonialData = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, Tech Innovations",
        text: "This service has completely transformed how we approach our business. The team's expertise and dedication to excellence is unmatched. I couldn't be happier with the results.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        text: "Outstanding quality and attention to detail. The professional approach and timely delivery exceeded all our expectations. Highly recommend to anyone looking for top-tier service.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        text: "Incredible experience from start to finish. The team's creativity and problem-solving skills helped us achieve goals we didn't think were possible. Truly exceptional work.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Startup Founder",
        text: "Game-changing partnership that took our vision and made it reality. The strategic insights and flawless execution delivered results beyond our wildest dreams.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
];

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2 
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
};

const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)" },
    tap: { scale: 0.95 }
};

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % TestimonialData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % TestimonialData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + TestimonialData.length) % TestimonialData.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <motion.div 
            className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
                        variants={itemVariants}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Customer Stories
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6"
                        variants={itemVariants}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 leading-relaxed"
                        variants={itemVariants}
                    >
                        Don't just take our word for it. Here's what our amazing clients have to say about their experience working with us.
                    </motion.p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="w-full px-4"
                            >
                                <motion.div 
                                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-12 mx-auto max-w-4xl relative overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Background Pattern */}
                                    <motion.div 
                                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    ></motion.div>
                                    
                                    {/* Quote Icon */}
                                    <motion.div 
                                        className="absolute top-8 left-8 text-blue-500/20"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Quote className="w-12 h-12 fill-current" />
                                    </motion.div>

                                    <div className="relative z-10">
                                        {/* Rating Stars */}
                                        <motion.div 
                                            className="flex items-center gap-1 mb-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {[...Array(TestimonialData[currentSlide].rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.5 + i * 0.1 }}
                                                >
                                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Testimonial Text */}
                                        <motion.blockquote 
                                            className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8 font-medium"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            "{TestimonialData[currentSlide].text}"
                                        </motion.blockquote>

                                        {/* Author Info */}
                                        <motion.div 
                                            className="flex items-center gap-6"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                        >
                                            <div className="relative">
                                                <img 
                                                    src={TestimonialData[currentSlide].img} 
                                                    alt={TestimonialData[currentSlide].name}
                                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${TestimonialData[currentSlide].name}&background=6366f1&color=fff&size=64`;
                                                    }}
                                                />
                                                <motion.div 
                                                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.8 }}
                                                ></motion.div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {TestimonialData[currentSlide].name}
                                                </h3>
                                                <p className="text-blue-600 font-medium">
                                                    {TestimonialData[currentSlide].role}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 group"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 group"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Dots Navigation */}
                <motion.div 
                    className="flex justify-center gap-3 mt-8"
                    variants={itemVariants}
                >
                    {TestimonialData.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentSlide 
                                    ? 'bg-blue-600 w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
                    variants={containerVariants}
                >
                    {[
                        { value: "500+", label: "Happy Clients" },
                        { value: "98%", label: "Satisfaction Rate" },
                        { value: "5.0", label: "Average Rating" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="text-center"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="text-3xl font-bold text-blue-600 mb-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 * index }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Testimonials;