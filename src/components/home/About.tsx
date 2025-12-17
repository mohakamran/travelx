import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                                alt="Traveler overlooking canyon"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-primary">10+</div>
                                <div className="text-sm text-text-muted leading-tight">Years of<br />Excellence</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            Crafting Unforgettable <span className="text-primary">Journeys</span>
                        </h2>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            At TravelX, we believe travel is more than just visiting a place—it's about the feeling, the discovery, and the memories that last a lifetime. Our team of expert explorers curates every detail to ensure your adventure is nothing short of perfection.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'Expert Local Guides',
                                'Hidden Gem Destinations',
                                'Sustainable Travel Practices',
                                'Personalized Itineraries'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-text-primary">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="px-8 py-3 bg-white text-background font-bold rounded-full hover:bg-gray-200 transition-colors inline-block">
                            Read Our Story
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
