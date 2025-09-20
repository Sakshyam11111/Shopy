import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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
        <div className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        Customer Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Don't just take our word for it. Here's what our amazing clients have to say about their experience working with us.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {TestimonialData.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-12 mx-auto max-w-4xl relative overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                                        
                                        {/* Quote Icon */}
                                        <div className="absolute top-8 left-8 text-blue-500/20 dark:text-blue-400/20">
                                            <Quote className="w-12 h-12 fill-current" />
                                        </div>

                                        <div className="relative z-10">
                                            {/* Rating Stars */}
                                            <div className="flex items-center gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 mb-8 font-medium">
                                                "{testimonial.text}"
                                            </blockquote>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-6">
                                                <div className="relative">
                                                    <img 
                                                        src={testimonial.img} 
                                                        alt={testimonial.name}
                                                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-lg"
                                                        onError={(e) => {
                                                            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=6366f1&color=fff&size=64`;
                                                        }}
                                                    />
                                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                    {TestimonialData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentSlide 
                                    ? 'bg-blue-600 w-8' 
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                        <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                        <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5.0</div>
                        <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;