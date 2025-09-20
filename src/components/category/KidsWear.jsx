import { useEffect, useState } from "react";

const KidsWear = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Styles");
    const [filteredItems, setFilteredItems] = useState([]);

    // Sample images - replace with your actual image imports
    const items = [
        { image: "https://imgs.search.brave.com/BUzx8IqZiAWkBeqML5latfgI_jpZfkHLG9SDtXzEQDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2Fy/c29tZS5jb20vY2Ru/L3Nob3AvZmlsZXMv/U3BhcmtsZS1wb25j/aG8tMy5qcGc_dj0x/NzUwNDM1MzM3", title: "Playful Adventure", category: "Casual", price: "Rs 29.99" },
        { image: "https://imgs.search.brave.com/EkfNKn3dDE_0Z0Hiji2Up2O09EoNI7O8LJHrDAiLd30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyUjNSQnhoYUwu/anBn", title: "Cozy Comfort", category: "Casual", price: "Rs 34.99" },
        { image: "https://imgs.search.brave.com/NGYOfardEVUA4UH__Amp4ojj5TRb_guYClEWpvGxdRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmln/aHQtc3RhcnRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMS84MUpvTHlx/SlhmTC5fU0wxNTAw/Xy5qcGc", title: "Bright Beginnings", category: "Formal", price: "Rs 45.99" },
        { image: "https://imgs.search.brave.com/tVRmU8Wf3qhHlAqXBaTarTfYjmkYN5r4XNaLYKryra8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE2Nzg3MTQ2L2Mv/MTg3Mi8xODcyLzUy/OS8wL2lsLzhiY2Q2/OC80MzE2MjAzNzE3/L2lsXzYwMHg2MDAu/NDMxNjIwMzcxN19z/YTlyLmpwZw", title: "Little Explorer", category: "Casual", price: "Rs 39.99" },
        { image: "https://imgs.search.brave.com/RVs0ejrrhKAKJwg0GX1WhvKtCY7b1RcX1H-_LNKDkLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFjLzdi/L2VhLzFjN2JlYTZj/YzUyYzIyMTAwMjIz/ZTNjOTAyNzUwNGNh/LmpwZw", title: "Night Dress", category: "Seasonal", price: "Rs 32.99" },
        { image: "https://imgs.search.brave.com/I3z57gqsAuQwgt-hbSC10bS77pyNf_ThSW0iFVqaFRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdW5u/eWFuZG1hbWEuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1NNMDAxXzQ1/XzE0NDV4LmpwZz92/PTE3MjA4MTYzMjM", title: "Sunny Days", category: "Seasonal", price: "Rs 28.99" },
        { image: "https://imgs.search.brave.com/iwI2rZ8pfc8SIG4v9jj5qlV3iauzjk7UubPpWrpxLsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlhYmVsbGViYWJ5/LmNvbS9jZG4vc2hv/cC9maWxlcy9HSENP/QzAxNy1QaW5rXzQu/anBnP3Y9MTcyMTE2/MjY3OCZ3aWR0aD0x/MDgw", title: "Beauty Deluxe", category: "Formal", price: "Rs 52.99" },
        { image: "https://imgs.search.brave.com/y5FHMUmBalcsNoPCVbSRKEnHDBU9nwi8Qyf6_RE5rCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb29k/eXRpZ2VyLmNvbS9j/ZG4vc2hvcC9maWxl/cy9QbGVhdGVkU2tp/cnQtQ2xvdWREYW5j/ZXIzLmpwZz92PTE3/NTYyODQ5MDY", title: "Fun & Active", category: "Casual", price: "Rs 31.99" },
        { image: "https://imgs.search.brave.com/ne8vNZyMXYtQmWtEQcRL_b6o0zS31C458iGExfJSjqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRhL2Uz/L2RkLzRhZTNkZDBk/MmI5NDgxNjdiZWU3/YmYxNjc0NTc4MzAz/LmpwZw", title: "Chic & Cute", category: "Formal", price: "Rs 48.99" },
        { image: "https://imgs.search.brave.com/SQztM7B3kgrfHJS06Cgfs4TLzcH9Zqs67F2hoQb0n4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYXBw/aW5lc3Mtam95LXBy/ZXBhcmluZy1lYXN0/ZXItaG9saWRheS1z/bWFsbC1naXJsLXdl/YXItYnVubnktZWFy/cy1raWQtcmFiYml0/LWNvc3R1bWUtc3By/aW5nLWhvbGlkYXlz/LWVhc3Rlci1mdW5u/eS1idW5ueS0yMTMy/NzMzODguanBn", title: "Holiday Joy", category: "Seasonal", price: "Rs 42.99" },
        { image: "https://imgs.search.brave.com/cdfiLQVbv2Uo2fXcB30d_2kqcOBWMCNAZ5HONjQ247o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwYW1hbi5jb20v/Y2RuL3Nob3AvZmls/ZXMvYXBwYW1hbi1x/dWFsaXR5LWtpZHMt/Y2xvdGhpbmctYm95/cy1ib3R0b21zLWNh/bXAtc2hvcnRzLWJ1/cmdlcnMtZnJpZXMt/NTMwMzQ2NzA4NTA0/MjAuanBnP3Y9MTcz/NDUyODAxNyZ3aWR0/aD0xNzky", title: "Casual Cool", category: "Casual", price: "Rs 26.99" },
        { image: "https://imgs.search.brave.com/V6F38ElIokXH9p5pE4Hltfi9vtaBRCn2y1RZIO6Kyck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwYW1hbi5jb20v/Y2RuL3Nob3AvZmls/ZXMvYXBwYW1hbi1x/dWFsaXR5LWtpZHMt/Y2xvdGhpbmctZmlu/ZS10YWlsb3Jpbmct/dG9wcy1iZWFjaC1z/aGlydC13aGl0ZS0x/MTQ0NjYzMTk0Lmpw/Zz92PTE3NDEyMTQ2/NTUmd2lkdGg9MTQ4/NQ", title: "Seasonal Style", category: "Seasonal", price: "Rs 38.99" },
    ];

    const filterCategories = [
        { name: "All Styles", color: "purple" },
        { name: "Casual", color: "pink" },
        { name: "Formal", color: "orange" },
        { name: "Seasonal", color: "yellow" }
    ];

    useEffect(() => {
        // Filter items based on active filter
        if (activeFilter === "All Styles") {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === activeFilter));
        }
    }, [activeFilter]);

    useEffect(() => {
        // Trigger initial animation
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 100);
    };

    const getButtonStyles = (category) => {
        const isActive = activeFilter === category.name;
        const colorMap = {
            purple: isActive ? 'bg-purple-500 text-white border-purple-500' : 'bg-white text-purple-700 border-purple-200 hover:border-purple-400',
            pink: isActive ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-pink-700 border-pink-200 hover:border-pink-400',
            orange: isActive ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-orange-700 border-orange-200 hover:border-orange-400',
            yellow: isActive ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white text-yellow-700 border-yellow-200 hover:border-yellow-400'
        };
        
        return `px-6 py-3 rounded-full shadow-lg border-2 transition-all duration-300 font-semibold transform hover:scale-105 ${colorMap[category.color]}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-12 lg:py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        Kids' Fashion Wonderland
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover adorable outfits that spark joy and imagination. Perfect for every little adventurer.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {filterCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => handleFilterClick(category.name)}
                            className={getButtonStyles(category)}
                        >
                            {category.name}
                            <span className="ml-2 text-sm opacity-75">
                                ({category.name === "All Styles" ? items.length : items.filter(item => item.category === category.name).length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Active Filter Indicator */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium">
                            Showing {filteredItems.length} {activeFilter} {filteredItems.length === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={`${activeFilter}-${index}`}
                            className={`group relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 ${
                                isVisible ? 'animate-slideInUp' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                                    {item.category}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative h-80 lg:h-96 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400 transition-all duration-500"></div>
                            </div>

                            {/* Content Card */}
                            <div className="p-6 bg-white">
                                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-bold text-purple-600">
                                        {item.price}
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">(4.8)</span>
                                </div>
                            </div>

                            {/* Quick View Button */}
                            <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transform translate-x-2 group-hover:translate-x-0">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                        <p className="text-gray-500">Try selecting a different category or check back later!</p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Shop All Kids' Collection
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default KidsWear;