import { FaEnvelope, FaArrowRight, FaCheck } from "react-icons/fa6";
import { useState } from "react";
import Banner from "../assets/website/orange-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "500px",
    width: "100%",
    position: "relative",
    overflow: "hidden"
};

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail("");
            // Reset success state after 3 seconds
            setTimeout(() => setIsSubscribed(false), 3000);
        }, 1000);
    };

    return (
        <section 
            style={BannerImg}
            data-aos="zoom-in"
            className="relative mb-20"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-orange-700/70 to-amber-600/80"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-5 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[500px] py-16">
                <div className="w-full max-w-4xl mx-auto text-center">
                    {/* Header Section */}
                    <div className="mb-8 space-y-4">
                        <div 
                            data-aos="fade-up"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 mb-4"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            <span className="text-sm font-medium">Exclusive Offers</span>
                        </div>
                        
                        <h2 
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent leading-tight"
                        >
                            Join Our Fashion Community
                        </h2>
                        
                        <p 
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                        >
                            Be the first to know about new arrivals, exclusive promotions, and styling tips delivered straight to your inbox
                        </p>
                    </div>

                    {/* Subscription Form */}
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="max-w-md mx-auto"
                    >
                        <form onSubmit={handleSubmit} className="relative">
                            {/* Success State */}
                            {isSubscribed && (
                                <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30">
                                    <div className="flex items-center gap-2 text-green-100">
                                        <FaCheck className="w-5 h-5" />
                                        <span className="text-sm font-medium">Successfully subscribed!</span>
                                    </div>
                                </div>
                            )}

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-amber-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative flex items-stretch overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-xl">
                                    {/* Email Input */}
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/70 font-medium border-none focus:ring-0 text-lg focus:placeholder-white/40 transition-all duration-200"
                                        disabled={isSubscribed || isLoading}
                                        required
                                    />
                                    
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={!email.trim() || isSubscribed || isLoading}
                                        className="group/btn flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:shadow-none flex-shrink-0"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : isSubscribed ? (
                                            <FaCheck className="w-5 h-5" />
                                        ) : (
                                            <>
                                                <span className="hidden sm:inline">Subscribe</span>
                                                <FaArrowRight className="w-5 h-5 sm:ml-2 transition-transform group-hover/btn:translate-x-1" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Input Focus Ring */}
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 blur"></div>
                            </div>

                            {/* Privacy Note */}
                            <p className="mt-4 text-sm text-white/70">
                                We respect your privacy. Unsubscribe at any time. 
                                <a href="#" className="underline hover:text-orange-200 transition-colors"> Learn more</a>
                            </p>
                        </form>

                        {/* Feature Highlights */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg flex items-center justify-center">
                                    <FaEnvelope className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-white font-semibold text-sm">Early Access</h3>
                                <p className="text-white/70 text-xs">New arrivals first</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                                    <FaCheck className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-white font-semibold text-sm">Exclusive Deals</h3>
                                <p className="text-white/70 text-xs">Special discounts</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold text-sm">Fast Shipping</h3>
                                <p className="text-white/70 text-xs">Free on orders Rs50+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
                    </div>
                    <span className="text-xs text-white/60 font-medium">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;