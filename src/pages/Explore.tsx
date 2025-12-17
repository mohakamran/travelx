import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import DestinationCard from '../components/destinations/DestinationCard';
import { destinations } from '../data/destinations';

const Explore = () => {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [maxPrice, setMaxPrice] = useState<number>(2000);

    const continents = ['All', 'Europe', 'Asia', 'South America', 'North America', 'Africa', 'Oceania'];

    const filteredDestinations = destinations.filter(dest => {
        const matchesFilter = filter === 'All' || dest.continent === filter;
        const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase()) || dest.location.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = dest.price <= maxPrice;
        return matchesFilter && matchesSearch && matchesPrice;
    });

    return (
        <div className="min-h-screen container mx-auto px-4 py-8">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white mb-2">Explore Destinations</h1>
                    <p className="text-text-muted">Find your next dream getaway</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-end">
                    {/* Price Filter */}
                    <div className="w-full sm:w-48">
                        <div className="flex justify-between text-sm mb-2 text-text-muted">
                            <span>Max Price</span>
                            <span className="text-primary font-bold">${maxPrice}</span>
                        </div>
                        <input
                            type="range"
                            min="50"
                            max="2000"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full accent-primary h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Search */}
                    <div className="relative group w-full sm:w-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search places..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-3 rounded-xl bg-surface border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-primary w-full sm:w-64 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-10">
                {continents.map(c => (
                    <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === c
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-surface text-text-muted hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredDestinations.map((dest, index) => (
                    <DestinationCard key={dest.id} destination={dest} index={index} />
                ))}
            </motion.div>

            {filteredDestinations.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-text-muted text-lg">No destinations found matching your criteria.</p>
                    <button
                        onClick={() => { setFilter('All'); setSearch(''); }}
                        className="mt-4 text-primary hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Explore;
