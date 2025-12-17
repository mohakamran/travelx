import { motion } from 'framer-motion';
import { Globe, Users, Heart } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-20 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
                    >
                        We Are <span className="text-primary">TravelX</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted max-w-2xl mx-auto"
                    >
                        Curators of unforgettable journeys. Architects of adventure. We bring the world closer to you.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-heading font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-text-muted text-lg leading-relaxed mb-6">
                                TravelX was born from a simple belief: that travel is the only thing you buy that makes you richer. We strive to create immersive, authentic, and seamless travel experiences that connect you with the heart of every destination.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Globe />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Global Reach</h4>
                                        <p className="text-text-muted text-sm">Access to 100+ countries</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <Users />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Local Experts</h4>
                                        <p className="text-text-muted text-sm">Guides who know the secrets</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-300 transform text-blue-400">
                                        <Heart />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Sustainable Travel</h4>
                                        <p className="text-text-muted text-sm">Committed to eco-friendly practices</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl transform translate-y-10" alt="Travel 1" />
                                <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl" alt="Travel 2" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-5xl font-bold mb-2">10k+</div>
                                <div className="opacity-80">Happy Travelers</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">500+</div>
                                <div className="opacity-80">Destinations</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">150+</div>
                                <div className="opacity-80">Luxury Hotels</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">24/7</div>
                                <div className="opacity-80">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
