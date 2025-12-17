import { useState } from 'react';
import MapComponent from '../components/map/Map';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../data/destinations';
import { X, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPage = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedDestination = destinations.find(d => d.id === selectedId);

    return (
        <div className="pt-4 pb-4 px-4 h-full flex flex-col relative">
            <h1 className="sr-only">Map Discovery</h1>

            {/* Map Container */}
            <div className="flex-grow rounded-2xl overflow-hidden relative border border-white/5">
                <MapComponent onDestinationSelect={setSelectedId} />

                {/* Overlay Panel for Selected Destination */}
                <AnimatePresence>
                    {selectedDestination && (
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute top-4 right-4 bottom-4 w-80 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 z-[1000] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-text-muted" />
                            </button>

                            <div className="mt-6">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <img
                                        src={selectedDestination.image}
                                        alt={selectedDestination.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 left-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white flex items-center">
                                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                        {selectedDestination.rating}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-heading font-bold text-white mb-1">{selectedDestination.name}</h2>
                                <div className="flex items-center text-text-muted text-sm mb-4">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {selectedDestination.location}, {selectedDestination.continent}
                                </div>

                                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                                    Experience the beauty of {selectedDestination.name}.
                                    Perfect for {selectedDestination.tags.join(', ')}.
                                </p>

                                <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-white/5">
                                    <span className="text-text-muted text-sm">Price per night</span>
                                    <span className="text-xl font-bold text-primary">${selectedDestination.price}</span>
                                </div>

                                <Link
                                    to="/planner"
                                    className="block w-full py-3 rounded-xl bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                >
                                    Add to Trip
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MapPage;
