import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Star, ArrowLeft, Camera, Coffee, Sun, Check } from 'lucide-react';
import { destinations } from '../data/destinations';
import { useTrip } from '../context/TripContext';

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = destinations.find(d => d.id === id);
    const { addToTrip, removeFromTrip, isInTrip } = useTrip();
    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 500], [0, 200]);

    const isAdded = id ? isInTrip(id) : false;

    const handleTripAction = () => {
        if (destination) {
            if (isAdded) {
                removeFromTrip(destination.id);
            } else {
                addToTrip(destination);
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
                    <Link to="/explore" className="text-primary hover:underline">Back to Explore</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Parallax Hero */}
            <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <motion.div
                    style={{ y: imageY }}
                    className="absolute inset-0"
                >
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </motion.div>

                <div className="absolute top-4 left-4 z-20">
                    <Link to="/explore" className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors flex items-center gap-2">
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline font-medium">Back</span>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center space-x-2 text-primary mb-2 font-medium tracking-wide uppercase text-sm">
                                <span>{destination.continent}</span>
                                <span>•</span>
                                <span>{destination.tags[0]}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-4 shadow-black drop-shadow-lg">
                                {destination.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-accent" />
                                    <span>{destination.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <span>{destination.rating} ({destination.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sun className="w-5 h-5 text-orange-400" />
                                    <span>{destination.weather.temp}°C {destination.weather.condition}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-heading font-bold mb-6">Overview</h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Welcome to {destination.name}, a place where dreams come alive.
                            Whether you are looking for {destination.tags.join(', ').toLowerCase()},
                            this destination offers an unforgettable experience.
                            Immerse yourself in the local culture, enjoy breathtaking views,
                            and create memories that will last a lifetime.
                        </p>
                    </section>

                    {/* Gallery (Masonry style using grid) */}
                    <section>
                        <h2 className="text-3xl font-heading font-bold mb-6">Experience Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96">
                            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                                <img src={destination.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery 1" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <div className="w-full h-full bg-surface flex items-center justify-center">
                                    <Camera className="w-8 h-8 text-text-muted" />
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <div className="w-full h-full bg-surface flex items-center justify-center">
                                    <Coffee className="w-8 h-8 text-text-muted" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-surface border border-white/5 sticky top-24">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-text-muted">Price per night</span>
                            <span className="text-3xl font-bold text-primary">${destination.price}</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span>Check-in</span>
                                <span className="font-medium text-white">Select Date</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Guests</span>
                                <span className="font-medium text-white">2 Guests</span>
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mb-4">
                            Book Now
                        </button>
                        <button
                            onClick={handleTripAction}
                            className={`w-full py-4 rounded-xl font-bold transition-all border ${isAdded
                                ? 'bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30'
                                : 'bg-white/5 text-primary border-primary/20 hover:bg-white/10'
                                }`}
                        >
                            {isAdded ? (
                                <div className="flex items-center justify-center gap-2">
                                    <Check size={20} />
                                    <span>Added to Trip</span>
                                </div>
                            ) : (
                                'Add to Trip Plan'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;
