import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        qoute: "The trip to Machu Picchu was absolutely life-changing. TravelX handled every detail perfectly!",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Digital Nomad",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        qoute: "I've used many travel agencies, but none compare to the personalized service I received here.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Photographer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
        qoute: "From the flights to the hidden gem hotels, everything was curated to perfection. Highly recommended.",
        rating: 5
    },
    {
        name: "Michael Chang",
        role: "Luxury Traveler",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        qoute: "The level of detail in the itinerary was astonishing. It was truly a first-class experience.",
        rating: 5
    },
    {
        name: "Emma Wilson",
        role: "Solo Backpacker",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        qoute: "As a solo traveler, safety is key. TravelX made me feel secure and supported throughout my journey.",
        rating: 5
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const current = testimonials[index];

    return (
        <section className="py-24 bg-surface/10 overflow-hidden relative">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-text-muted">Real stories from real adventures</p>
                </div>

                <div className="max-w-4xl mx-auto h-[400px] relative flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-surface p-10 rounded-3xl border border-white/5 shadow-2xl relative w-full max-w-2xl mx-4"
                        >
                            <Quote className="absolute top-8 left-8 text-primary/20 w-16 h-16 transform -scale-x-100" />

                            <div className="relative z-10 flex flex-col items-center">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-lg mb-6"
                                />

                                <p className="text-xl md:text-2xl text-white italic mb-8 font-light leading-relaxed">
                                    "{current.qoute}"
                                </p>

                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">{current.name}</h4>
                                    <p className="text-primary font-medium text-sm mb-3">{current.role}</p>
                                    <div className="flex justify-center gap-1 text-yellow-400">
                                        {[...Array(current.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-8' : 'bg-white/10 hover:bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
