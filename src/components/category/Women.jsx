import { useEffect, useState } from "react";
import { Heart, Eye, ShoppingBag, Star, Filter, ArrowRight, Sparkles } from "lucide-react";

const Women = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Collections");
    const [filteredItems, setFilteredItems] = useState([]);

    // Enhanced product data with more items per category
    const items = [
        // Dresses
        { id: 1, image: "https://imgs.search.brave.com/WHXuTFjRwQsTgmq-tLuSDg2xo7V3oDwi2DTUiCxTn94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bHVsdXMuY29tL2lt/YWdlcy9wcm9kdWN0/L3hsYXJnZS83ODcz/NDQxXzE1ODU4OTYu/anBnP3c9NTYw", title: "Evening Elegance", category: "Dresses", price: "Rs149.99", originalPrice: "Rs199.99", rating: 4.8, isNew: true },
        { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop", title: "Summer Breeze", category: "Dresses", price: "Rs89.99", originalPrice: "Rs119.99", rating: 4.6, isSale: true },
        { id: 3, image: "https://imgs.search.brave.com/r3JjExvoxSowB3mjSwuTawLFyeL8VSxTljHKEGHiM-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWNk/dWdnYWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzEwMDc4LU51ZGVT/YWdlLUNMLmpwZz92/PTE3NTE5OTgyNzgm/d2lkdGg9NTAw", title: "Cocktail Glamour", category: "Dresses", price: "Rs179.99", originalPrice: "Rs229.99", rating: 4.9, isNew: true },
        { id: 4, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop", title: "Floral Maxi", category: "Dresses", price: "Rs124.99", originalPrice: "Rs159.99", rating: 4.7, isSale: true },
        { id: 5, image: "https://imgs.search.brave.com/f91E6VC5Sn6Ul6Vc1EpLHkg7Ic0ftkaNS-aMud3YP6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvcGFtZXJpY2Fu/dGhyZWFkcy5jb20v/Y2RuL3Nob3AvZmls/ZXMvc2VsZW5hLWJs/YWNrLXNlcXVpbi1j/b3dsLWJhY2stb3Bl/bi1iYWNrLXNwYWdo/ZXR0aS1zdHJhcC1i/b2R5Y29uLW1pbmkt/ZHJlc3MtY29ja3Rh/aWwtZHJlc3MtaG9j/by1kcmVzcy1nb2lu/Zy1vdXQtZHJlc3Mt/bmV3LXlvcmstc29y/b3JpdHktZm9ybWFs/LWRyZXNzLWhvY28t/c2hvcnQtZHJlc3Mt/Ym91dGlxdWUtMDUu/anBnP3Y9MTc1Njg0/OTMxOCZ3aWR0aD03/MDA", title: "Little Black Dress", category: "Dresses", price: "Rs199.99", originalPrice: "Rs249.99", rating: 4.9, isNew: false },
        { id: 6, image: "https://imgs.search.brave.com/71ZBkSsu02RJJVcgqkzKn_RKgtCSUmMCNbXREF1q5Sk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2FuaXNib3V0aXF1/ZS5jb20vY2RuL3No/b3AvZmlsZXMvSU1H/LTIwMjQwNjEyLVdB/MDAwNy5qcGc_dj0x/NzIzODM3MDg4Jndp/ZHRoPTE0NDU", title: "Bohemian Dream", category: "Dresses", price: "Rs134.99", originalPrice: "Rs169.99", rating: 4.5, isSale: true },

        // Tops
        { id: 7, image: "https://imgs.search.brave.com/NdvPG4vCdGVq4r5MgLaRTOgR-0viQ-ZRWFq3ho2l49g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwLzUx/L2QxLzcwNTFkMTNh/ZGE0YjA2MjYyZjA2/YzVkNTMwODVhYzRh/LmpwZw", title: "Silk Blouse", category: "Tops", price: "Rs79.99", originalPrice: "Rs99.99", rating: 4.6, isSale: true },
        { id: 8, image: "https://imgs.search.brave.com/Ife-7Fbl4bFmeaNl4mfP23d1I03C3TKIdhryjQOUpDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxhbW9kZWxhYmVs/LmluL2Nkbi9zaG9w/L2ZpbGVzLzk0M0Ey/QUVDLUM2RkMtNEQw/Qy05NDUyLTY1QzhD/QjU5OTg1Ql82MDB4/LmpwZz92PTE3NDky/MDcxNjA", title: "Delilah Luxe Satin Shirt", category: "Tops", price: "Rs69.99", originalPrice: "Rs89.99", rating: 4.4, isNew: true },
        { id: 9, image: "https://imgs.search.brave.com/gZo0dSg5helocmPOMPgFj7oviO_fU1Xrj5TMMTbfPnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFLR1J2bmNXZEwu/anBn", title: "Flikity Womens Blouses", category: "Tops", price: "Rs59.99", originalPrice: "Rs79.99", rating: 4.5, isSale: true },
        { id: 10, image: "https://imgs.search.brave.com/r1awmpBqH8QK_tzeww_YWcR14E1EpnM_Y8zU-_6ekrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm9ib2R5c2NoaWxk/LmNvbS9jZG4vc2hv/cC9maWxlcy9UMjUx/NzYzV0hUXzI2MS5q/cGc_dj0xNzQ1MzM5/MzU3", title: "Lace Detail Top", category: "Tops", price: "Rs84.99", originalPrice: "Rs109.99", rating: 4.7, isNew: true },
        { id: 11, image: "https://imgs.search.brave.com/wZDwqmifmSPBbdsjubV16DzHMZq8O__XgF7xGZPOo10/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0dG5pbUowc0wu/anBn", title: "Off-Shoulder Top", category: "Tops", price: "Rs74.99", originalPrice: "Rs94.99", rating: 4.6, isSale: true },
        { id: 12, image: "https://imgs.search.brave.com/SftleyN-RcGQb1D7UMqrv4PDIEuMVAnwIL49qXyFzjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Qy/LnNjZW5lNy5jb20v/aXMvaW1hZ2UvYWVv/LzIzNTFfNjA2MV8x/MDBfZDI_JHBkcC1t/ZGctb3B0JCZmbXQ9/anBlZw", title: "Embroidered Blouse", category: "Tops", price: "Rs94.99", originalPrice: "Rs124.99", rating: 4.8, isNew: false },

        // Bottoms
        { id: 13, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop", title: "High-Waist Jeans", category: "Bottoms", price: "Rs89.99", originalPrice: "Rs119.99", rating: 4.7, isSale: true },
        { id: 14, image: "https://imgs.search.brave.com/fSLLe3G3Lb1eKoZv9QlaCUam9K61KbhqNUqEDvfZcto/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFQZS0rejF4dEwu/anBn", title: "LILLUSORY Wide Leg Pants", category: "Bottoms", price: "Rs104.99", originalPrice: "Rs134.99", rating: 4.5, isNew: true },
        { id: 15, image: "https://imgs.search.brave.com/P30UUDfyo0ABQuzpSmLbysis4HXQy5OTRlzuAizgwrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vV29t/ZW5zLU1pbmktQm9k/eWNvbi1Ta2lydC1T/cGxpdC1TaG9ydC1T/a2lydHMtTGVhdGhl/ci1TdHJldGNoeS1T/ZXh5LVNraXJ0LUhp/Z2gtV2Fpc3QtU2xp/bS1Ta2lydC1aaXBw/ZXItSG90LVNraXJ0/cy1CbGFjay1VUy1M/X2EyODI2ZDc2LTE0/NzAtNDEzNi04ZTI0/LWM4MmJhZDZhYTAy/NS4xN2ZlZjEwYjZh/NjFmMjA2NjdhOTZh/N2Q2ZDVlNjU4Ny5q/cGVnP29kbkhlaWdo/dD01ODAmb2RuV2lk/dGg9NTgwJm9kbkJn/PUZGRkZGRg", title: "Leather Skirt", category: "Bottoms", price: "Rs159.99", originalPrice: "Rs199.99", rating: 4.8, isSale: true },
        { id: 16, image: "https://imgs.search.brave.com/pa5MK-arMBpOgs6IDmCnwj83ID1nJOps5mekfiDA218/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zdG9yaWVzLmNv/bS9hc3NldHMvMDA1/LzUwLzViLzUwNWI0/ZmQ2YTFlMTE2YTky/MDYxMjU2ZGM5MzQy/ZTNlODZhMWIwZTNf/eHhsLTEuanBnP2lt/d2lkdGg9MjU2MA", title: "Tailored Wool Trousers", category: "Bottoms", price: "Rs119.99", originalPrice: "Rs149.99", rating: 4.6, isNew: false },
        { id: 17, image: "https://imgs.search.brave.com/rttsFATl-sy8DE3rQ31-8pJgTJWdDIopcdRY3wm32hs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF6emk3QkNZMEwu/anBn", title: "Midi Skirt", category: "Bottoms", price: "Rs79.99", originalPrice: "Rs99.99", rating: 4.4, isSale: true },
        { id: 18, image: "https://imgs.search.brave.com/tmpEtaK8jhKKaKraK1QggzLtsmjoxdOsuOR6a1KvmXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZWxl/bnNjbG9zZXRwYXR0/ZXJucy5jb20vY2Ru/L3Nob3AvZmlsZXMv/d2luc2xvdy1jdWxv/dHRlcy00LmpwZz92/PTE3NDk0ODY1NzIm/d2lkdGg9MTUwMA", title: "Culottes", category: "Bottoms", price: "Rs94.99", originalPrice: "Rs124.99", rating: 4.7, isNew: true },

        // Outerwear
        { id: 19, image: "https://imgs.search.brave.com/bid-Px0Rpni3FT0f3zi_nXMGEBRzP6iGpUfI_Sgw7eE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VjLzZk/L2U4L2VjNmRlOGM1/YjljZWM5ZTVjMWEz/MzlmMjQyODRhMjUy/LmpwZw", title: "Chic Blazer", category: "Outerwear", price: "Rs199.99", originalPrice: "Rs259.99", rating: 4.9, isNew: true },
        { id: 20, image: "https://imgs.search.brave.com/G2bdADzJRlQIlHgzofHgo4SxeBm09-OTyLiEODfCjLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzAwLzIz/LzAwMjM4YWExMTI5/MTVmZDgzNGY5ZTBh/OThiZDBjZWJhNmEx/YmZmMGEuanBnP2lt/d2lkdGg9MjE2MA", title: "Trench Coat", category: "Outerwear", price: "Rs249.99", originalPrice: "Rs319.99", rating: 4.8, isSale: true },
        { id: 21, image: "https://imgs.search.brave.com/jqclxBKqYvppFKDIUi12p4qou9OyxO24-qAYDF5AyRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ib29ob28uY29t/L2kvYm9vaG9vL2h6/ejE1ODc1X2dyZXkl/MjBtYXJsX3hsP3c9/OTAwJnFsdD1kZWZh/dWx0JmZtdC5qcDIu/cWx0PTcwJmZtdD1h/dXRvJnNtPWZpdA", title: "Wool Coat", category: "Outerwear", price: "Rs279.99", originalPrice: "Rs349.99", rating: 4.7, isNew: false },
        { id: 22, image: "https://imgs.search.brave.com/lHCiW0sazCLHb3i_UtaKev_7N41QPuB-AMsof4vfK4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1mZW1hbGUt/d2VhcmluZy1qYWNr/ZXQtc3RhbmRpbmct/YWdhaW5zdC13aGl0/ZS13YWxsXzE4MTYy/NC00MDgwOC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA", title: "Leather Jacket", category: "Outerwear", price: "Rs189.99", originalPrice: "Rs239.99", rating: 4.6, isSale: true },
        { id: 23, image: "https://imgs.search.brave.com/F1QuxA16VcatEjvcc2YEdCLqFbLbt96FvzZLEh7Kgq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVhcmx5bmV3Y2Fz/aG1lcmUuY28udWsv/Y2RuL3Nob3AvZmls/ZXMvMTAzODU5ODY2/NDU2XzAxXzE4NjE5/MmM1LTkwNmItNDI2/MC1hZmVlLWMzMzA2/MTdkMmQyOC5qcGc_/dj0xNzQ2MDA4ODk3/JndpZHRoPTIwMDA", title: "Cashmere Cardigan", category: "Outerwear", price: "Rs159.99", originalPrice: "Rs199.99", rating: 4.8, isNew: true },
        { id: 24, image: "https://imgs.search.brave.com/TKJIZSAUUjKD-YMOc6VKOWsoBOCr3KuAFdk0Jj5rtTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxjb3R0LmV1L2R3/L2ltYWdlL3YyL0JE/SlpfUFJEL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/Y2F0YWxvZy1hbGNv/dHQtbWFzdGVyL2Rl/ZmF1bHQvZHczOGRj/MzJlNi9oaS1yZXMv/R0IwMDc2RE9BWDEz/X0JLM18wMDIuanBn/P3N3PTEwMDAmc2g9/MTM1MCZxPTkwJnN0/cmlwPWZhbHNl", title: "Bomber Jacket", category: "Outerwear", price: "Rs124.99", originalPrice: "Rs159.99", rating: 4.5, isSale: true },
        { id: 25, image: "https://imgs.search.brave.com/Ca1FU-6krrnzU9YaCxnkPiH565XoPfNUujvUvJbDe68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zNWEuY29tL2lz/L2ltYWdlL3Nha3Nv/ZmY1dGgvMDQwMDAy/Mjc0MDEyNl9LSEFL/ST9kcHI9b24sMg", title: "Studded Bomber Jacket", category: "Outerwear", price: "Rs129.99", originalPrice: "Rs159.99", rating: 4.8, isSale: true }

    ];

    const categories = ["All Collections", "Dresses", "Tops", "Bottoms", "Outerwear"];

    useEffect(() => {
        // Trigger initial animation
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Filter items based on active category
        if (activeFilter === "All Collections") {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === activeFilter));
        }
    }, [activeFilter]);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 150);
    };

    const getCategoryStats = (category) => {
        if (category === "All Collections") return items.length;
        return items.filter(item => item.category === category).length;
    };

    const renderStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {hasHalfStar && <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />}
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 lg:py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/80 rounded-full mb-4">
                        <Sparkles className="w-5 h-5 text-rose-500" />
                        <span className="text-rose-600 font-medium">Premium Collection</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Women's Timeless Elegance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Celebrate femininity with sophisticated designs that blend grace, power, and effortless style.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-rose-600">{items.length}+</div>
                            <div className="text-gray-600 text-sm">Products</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-pink-600">4.7★</div>
                            <div className="text-gray-600 text-sm">Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600">50%</div>
                            <div className="text-gray-600 text-sm">Off Sale</div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterClick(category)}
                            className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeFilter === category
                                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                                : 'bg-white/80 backdrop-blur-sm text-gray-600 border-2 border-transparent hover:border-rose-300 shadow-md'
                                }`}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                {category}
                                <span className={`px-2 py-0.5 text-xs rounded-full ${activeFilter === category
                                    ? 'bg-white/20 text-white'
                                    : 'bg-rose-100 text-rose-600'
                                    }`}>
                                    {getCategoryStats(category)}
                                </span>
                            </span>
                            {activeFilter !== category && (
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 shadow-lg ${isVisible ? 'animate-slideInUp' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badges */}
                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                                {item.isNew && (
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                                        NEW
                                    </span>
                                )}
                                {item.isSale && (
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        SALE
                                    </span>
                                )}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Quick Action Buttons */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    {/* Wishlist */}
                                    <button className="w-10 h-10 bg-white/90 hover:bg-rose-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transform opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                        <Heart className="w-5 h-5" />
                                    </button>

                                    {/* Quick View */}
                                    <button className="w-10 h-10 bg-white/90 hover:bg-pink-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transform opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75 shadow-lg backdrop-blur-sm">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-rose-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <div className="mb-2">
                                            {renderStarRating(item.rating)}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold text-gray-800">{item.price}</span>
                                        {item.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                                        )}
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="group/btn bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300">
                                        <ShoppingBag className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-100">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Elevate Your Style?</h3>
                            <p className="text-gray-600">Join thousands of fashion-forward women who trust our collection</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    Discover Full Collection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 bg-white border-2 border-rose-300 text-rose-600 font-bold rounded-full hover:bg-rose-50 transform hover:scale-105 transition-all duration-300">
                                View Lookbook
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
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

export default Women;