import { useEffect, useState } from "react";
import { Heart, Eye, ShoppingBag, Star, Filter, ArrowRight, Shield, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Menswear = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Styles");
    const [filteredItems, setFilteredItems] = useState([]);

    // Enhanced product data with more items per category
    const items = [
        // Formal
        { id: 1, image: "https://imgs.search.brave.com/kD9d9BOO1vjfhldRoKwOpnRezdLXpGzZr0NMrnc2H8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eHBvc2VkbG9uZG9u/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9C/MDdITFczRkJaLlBU/MDEuUENfMTEwLmpw/Zz92PTE3NTgxOTYz/OTc", title: "Classic Business Suit", category: "Formal", price: "Rs399.99", originalPrice: "Rs499.99", rating: 4.9, isNew: true },
        { id: 2, image: "https://imgs.search.brave.com/-6tnRX-QBFLC5JrezfLBQef7k6puo7NRNxj2fTiKNuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFuMXR6aFlYQ0wu/anBn", title: "Slim Fit Dress Shirt", category: "Formal", price: "Rs89.99", originalPrice: "Rs119.99", rating: 4.7, isSale: true },
        { id: 3, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop", title: "Premium Tuxedo", category: "Formal", price: "Rs599.99", originalPrice: "Rs799.99", rating: 4.8, isNew: false },
        { id: 4, image: "https://imgs.search.brave.com/9wQHEd1JDoJzNUjg-Db5TAbT6x3UtBRkx3kCf-IwYws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm1vc3MuY28u/dWsvaW1hZ2VzL2V4/dHJhZXh0cmFsYXJn/ZS85NjY1MTEzNjRf/MDEuanBn", title: "Tailored Dress Pants", category: "Formal", price: "Rs149.99", originalPrice: "Rs199.99", rating: 4.6, isSale: true },
        { id: 5, image: "https://imgs.search.brave.com/Bt5OIpvGnSMT0QLMULwuGBpiHWUrmtGai5DfQH0VkDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiLzcy/LzgzLzBiNzI4M2Jm/MGI5NzRiODk3MmEx/YTEwNzJmNjZmZDE4/LmpwZw", title: "Executive Blazer", category: "Formal", price: "Rs249.99", originalPrice: "Rs319.99", rating: 4.8, isNew: true },
        { id: 6, image: "https://imgs.search.brave.com/RvVYxTU48L1S7NkxqktEV4qeBs2ZeMUicfmJtmA5rS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEybFg2dHJlaEwu/anBn", title: "Formal Vest Set", category: "Formal", price: "Rs179.99", originalPrice: "Rs229.99", rating: 4.5, isSale: true },

        // Casual
        { id: 7, image: "https://imgs.search.brave.com/S3a66JiHezggZRP0v_pjDD7QdfgC7DhpNoL-oHPUsno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFxUXRyM29HZkwu/anBn", title: "Casual Blazer", category: "Casual", price: "Rs159.99", originalPrice: "Rs199.99", rating: 4.6, isSale: true },
        { id: 8, image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&h=500&fit=crop", title: "Weekend Polo", category: "Casual", price: "Rs69.99", originalPrice: "Rs89.99", rating: 4.4, isNew: true },
        { id: 9, image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=500&fit=crop", title: "Denim Jacket", category: "Casual", price: "Rs119.99", originalPrice: "Rs159.99", rating: 4.7, isSale: true },
        { id: 10, image: "https://imgs.search.brave.com/Sv_RCRiHqoPgvH8ecss9Bf9X7oS4fH_b3WNPRXg_-Vo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly85Zjhl/NjJkNC5kZWxpdmVy/eS5yb2NrZXRjZG4u/bWUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvS2hha2lz/LWFuZC1DaGlub3Mu/anBn", title: "Casual Chinos", category: "Casual", price: "Rs89.99", originalPrice: "Rs119.99", rating: 4.5, isNew: false },
        { id: 11, image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&h=500&fit=crop", title: "Graphic T-Shirt", category: "Casual", price: "Rs39.99", originalPrice: "Rs49.99", rating: 4.3, isSale: true },
        { id: 12, image: "https://imgs.search.brave.com/fwy75v8Kz6QegUkriKdFG7Du7fvPus8-Yaatm4bL_Ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib25v/Ym9zLXByb2QtczMu/aW1naXgubmV0L3By/b2R1Y3RzLzM3MzYz/Ni9vcmlnaW5hbC9X/T1ZFTi1DQVNVQUwt/U0hJUlRfQlVUVE9O/LURPV04tV09WRU4t/U0hJUlRfQlNIMTE4/ODNTQjc5NDRfM19j/YXRlZ29yeS5qcGc_/MTc1Nzk2NTYzMj0m/YXV0bz1jb21wcmVz/cyxmb3JtYXQmY3M9/c3JnYiZmbT1wanBn/JmZpdD1jbGlwJnc9/MTkyMA", title: "Casual Button-Up", category: "Casual", price: "Rs79.99", originalPrice: "Rs99.99", rating: 4.6, isNew: true },

        // Seasonal
        { id: 13, image: "https://imgs.search.brave.com/C4M-NPCMaEf0pk4_3sXkVnMZhzM-dt3LsHMY2hMHLtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM0MzYxNzU2L3Iv/aWwvZGEyZjliLzU1/OTI4ODU2NjAvaWxf/NjAweDYwMC41NTky/ODg1NjYwX2x3Zncu/anBn", title: "Winter Overcoat", category: "Seasonal", price: "Rs299.99", originalPrice: "Rs399.99", rating: 4.8, isSale: true },
        { id: 14, image: "https://imgs.search.brave.com/9_IM7qpUgiZHIX_f3aMrBobOhnF8SVqHZWzrguP9kbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtWDlyWTJWMkwu/anBn", title: "Summer Linen Shirt", category: "Seasonal", price: "Rs89.99", originalPrice: "Rs119.99", rating: 4.5, isNew: true },
        { id: 15, image: "https://imgs.search.brave.com/A2ccQRFQY_Y2zYvafjkq4mpJHdEJf4XBAsw30ah1Qlo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3VpdHN1cHBseS5j/b20vaW1hZ2UvdXBs/b2FkL2FyXzEwOjIx/LGJfcmdiOmVmZWZl/Zixib18yMDBweF9z/b2xpZF9yZ2I6ZWZl/ZmVmLGNfcGFkLGdf/bm9ydGgsd18yNjAw/L2JfcmdiOmVmZWZl/ZixjX2xmaWxsLGdf/bm9ydGgsZHByXzEs/d183NjgsaF85MjIs/Zl9hdXRvLHFfYXV0/byxmbF9wcm9ncmVz/c2l2ZS9wcm9kdWN0/cy9rbml0d2Vhci9k/ZWZhdWx0L1N1bW1l/ci9TVzE4MTZfMS5q/cGc", title: "Spring Cardigan", category: "Seasonal", price: "Rs129.99", originalPrice: "Rs169.99", rating: 4.6, isSale: true },
        { id: 16, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop", title: "Fall Wool Sweater", category: "Seasonal", price: "Rs159.99", originalPrice: "Rs199.99", rating: 4.7, isNew: false },
        { id: 17, image: "https://imgs.search.brave.com/xRVA-SaqE0e9q-IrBa7rchs9lGZNSGS832ot3KrR0DM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/Njg5ZjNiMjJkNmQw/MzM0YmFhYTg3NWFh/LzQ6My93Xzc0OCxj/X2xpbWl0L0NOVF9Q/YWNrYWJsZS1GYWxs/LUphY2tldHNfVmlu/Y2UtYm9tYmVyLWph/Y2tldC5qcGc", title: "Lightweight Jacket", category: "Seasonal", price: "Rs179.99", originalPrice: "Rs229.99", rating: 4.4, isSale: true },
        { id: 18, image: "https://imgs.search.brave.com/MYxVKpmbXkrdzs9pZUEA8I4Tye5HfpwSMQYxcgjuHE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8wMGM5/YzBmNi5pbWcueWFm/ZXguY29tL3VwbG9h/ZC9wcm9kdWN0LzIw/MjQvMDUvMTcvSEhI/MDMxMjU2MS9vcmln/aW5hbC84NzQxMjRk/NWUxY2U1ZjY5NzZh/ODlmMjdjMDI0OWNm/My5qcGVn", title: "Holiday Vest", category: "Seasonal", price: "Rs109.99", originalPrice: "Rs139.99", rating: 4.5, isNew: true },

        // Active
        { id: 19, image: "https://imgs.search.brave.com/SBYAn258wiW45PojtgGJlrPADX8ktty0TlWIL2ZcRpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2L2I3/LzViLzE2Yjc1YmQ1/MzY0YzM1NDI0M2Nk/N2EzYTU0ZjZjNGE2/LmpwZw", title: "Athletic Track Suit", category: "Active", price: "Rs149.99", originalPrice: "Rs199.99", rating: 4.6, isNew: true },
        { id: 20, image: "https://imgs.search.brave.com/WbX8WlQvV0Y2D5kf92BDnO4Zh0OWdD1sgJWYyz-nmjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3B0aW1pemVkLXJs/bWVkaWEuaW8vaXMv/aW1hZ2UvUG9sb0dT/SS9zNy0xNDM1Nzc2/X2FsdGVybmF0ZTEw/PyRybF9kZl96b29t/X2ExMCQ", title: "Performance Polo", category: "Active", price: "Rs79.99", originalPrice: "Rs99.99", rating: 4.5, isSale: true },
        { id: 21, image: "https://imgs.search.brave.com/W7MWj6LxTgs8HclLPice6eentv5JYLtcTn1OEhuoRzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFwYTdxNzB2UEwu/anBn", title: "Gym Shorts", category: "Active", price: "Rs49.99", originalPrice: "Rs69.99", rating: 4.4, isSale: true },
        { id: 22, image: "https://imgs.search.brave.com/-A2r3S-sRRWzRSRaQfBwPcMe6zwSLn79BtiDmuVHgok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50cy5tZWRpYWRl/Y2F0aGxvbi5jb20v/cDIzNTI2ODgvayRj/Njg2YWM3NzE2OWYy/ZmQxNDU2NDlmZDc4/MjVhYjdhZS9waWN0/dXJlLmpwZz9mb3Jt/YXQ9YXV0byZmPTMw/MDB4MA", title: "Running Jacket", category: "Active", price: "Rs119.99", originalPrice: "Rs149.99", rating: 4.7, isNew: true },
        { id: 23, image: "https://imgs.search.brave.com/_MuSIRb1UiwPLfl7d6CJ8JkTLwfIpFuqOcWTG9Mkfn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNzU1/MTE4NzU2LWhsaDA5/MDEyNWRpZ21vaXN0/dXJld2lja2luZ3No/aXJ0cy12dW9yaS0w/MDUtNjg5Y2ZjOWFm/MjAyNy5qcGc_Y3Jv/cD0xeHc6MXhoO2Nl/bnRlcix0b3AmcmVz/aXplPTk4MDoq", title: "Moisture-Wicking Tee", category: "Active", price: "Rs39.99", originalPrice: "Rs49.99", rating: 4.3, isSale: true },
        { id: 24, image: "https://imgs.search.brave.com/tJIqACFrobzylaHAWeQynCHY8jP1M-H89rIddd1zCcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21w/cmVzc2lvbnouY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL0NaLTAw/MDItUE1haW4yMDAw/eDIwMDBfNzAweDcw/MC5qcGc_dj0xNzM5/NDU3MjMx", title: "Compression Pants", category: "Active", price: "Rs69.99", originalPrice: "Rs89.99", rating: 4.6, isNew: false }
    ];

    const categories = ["All Styles", "Formal", "Casual", "Seasonal", "Active"];

    useEffect(() => {
        // Trigger initial animation
        setIsVisible(true);
    }, []);

    useEffect(() => {
        // Filter items based on active category
        if (activeFilter === "All Styles") {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === activeFilter));
        }
    }, [activeFilter]);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
    };

    const getCategoryStats = (category) => {
        if (category === "All Styles") return items.length;
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

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.95 },
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-50 to-blue-50 py-12 lg:py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 2 }}
                />
                <motion.div
                    className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 4 }}
                />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-700 font-medium">Premium Quality</span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-800 via-gray-800 to-indigo-800 bg-clip-text text-transparent mb-4">
                        Men's Style Redefined
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
                        Elevate your wardrobe with timeless pieces designed for the modern, confident man.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 text-center">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className="text-3xl font-bold text-blue-700">{items.length}+</div>
                            <div className="text-gray-600 text-sm">Styles</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className="text-3xl font-bold text-gray-700">4.6★</div>
                            <div className="text-gray-600 text-sm">Rating</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className="text-3xl font-bold text-indigo-700">40%</div>
                            <div className="text-gray-600 text-sm">Off Sale</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced Filter Buttons */}
                <motion.div
                    className="flex justify-center flex-wrap gap-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => handleFilterClick(category)}
                            className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                    : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-transparent hover:border-blue-300 shadow-md'
                            }`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                {category}
                                <span className={`px-2 py-0.5 text-xs rounded-full ${
                                    activeFilter === category 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-blue-100 text-blue-700'
                                }`}>
                                    {getCategoryStats(category)}
                                </span>
                            </span>
                            {activeFilter !== category && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid Section */}
                <AnimatePresence>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
                                variants={itemVariants}
                                whileHover={{ y: -12, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                {/* Badges */}
                                <motion.div
                                    className="absolute top-4 left-4 z-20 flex flex-col gap-2"
                                    variants={badgeVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {item.isNew && (
                                        <motion.span
                                            className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            NEW
                                        </motion.span>
                                    )}
                                    {item.isSale && (
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            SALE
                                        </span>
                                    )}
                                </motion.div>

                                {/* Image Container */}
                                <div className="relative h-80 lg:h-96 overflow-hidden">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        loading="lazy"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Quick Action Buttons */}
                                    <motion.div
                                        className="absolute top-4 right-4 flex flex-col gap-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        transition={{ staggerChildren: 0.1 }}
                                    >
                                        {/* Wishlist */}
                                        <motion.button
                                            className="w-10 h-10 bg-white/90 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Heart className="w-5 h-5" />
                                        </motion.button>
                                        
                                        {/* Quick View */}
                                        <motion.button
                                            className="w-10 h-10 bg-white/90 hover:bg-indigo-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </motion.button>
                                    </motion.div>

                                    {/* Category Badge */}
                                    <motion.div
                                        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.category}
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <motion.h3
                                                className="font-bold text-lg text-gray-800 mb-1"
                                                whileHover={{ color: "#1D4ED8" }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.title}
                                            </motion.h3>
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
                                        <motion.button
                                            className="group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-3 shadow-lg"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <ShoppingBag className="w-5 h-5 group-hover/btn:rotate-12" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-3xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Enhanced Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100">
                        <motion.div className="mb-6" whileHover={{ scale: 1.05 }}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Upgrade Your Style Game</h3>
                            <p className="text-gray-600">Join the ranks of well-dressed, confident men worldwide</p>
                        </motion.div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white font-bold rounded-full shadow-xl overflow-hidden"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    Shop All Men's Collection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-900"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                            
                            <motion.button
                                className="px-8 py-4 bg-white border-2 border-blue-300 text-blue-700 font-bold rounded-full"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Size Guide
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Menswear;