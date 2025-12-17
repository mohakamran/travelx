import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, DollarSign, Cloud, Heart } from 'lucide-react';
import type { Destination } from '../../data/destinations';

interface DestinationCardProps {
    destination: Destination;
    index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer bg-surface"
            whileHover={{ y: -10 }}
        >
            {/* Image with Tilt/Zoom effect handled by Group Hover CSS or simplistic scale */}
            <Link to={`/destination/${destination.id}`} className="absolute inset-0 overflow-hidden block">
                <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </Link>

            {/* Like Button */}
            <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors z-20"
                whileTap={{ scale: 0.9 }}
            >
                <Heart className="w-5 h-5" />
            </motion.button>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-white">{destination.name}</h3>
                        <div className="flex items-center text-text-muted text-sm space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{destination.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold text-white">{destination.rating}</span>
                    </div>
                </div>

                {/* Hidden Details that Reveal */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-2">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-sm text-text-primary">
                                <DollarSign className="w-4 h-4 text-accent" />
                                <span>{destination.price}/night</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-text-muted">
                                <Cloud className="w-4 h-4" />
                                <span>{destination.weather.temp}°C</span>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                            Details
                        </button>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {destination.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-text-muted">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DestinationCard;
