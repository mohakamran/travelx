import { Plane, Hotel, Map, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Plane,
        title: 'Flight Booking',
        description: 'We ensure the best flight experience with our premium airline partners worldwide.'
    },
    {
        icon: Hotel,
        title: 'Luxury Hotels',
        description: 'Hand-picked luxury accommodations that guarantee comfort and style.'
    },
    {
        icon: Map,
        title: 'Custom Tours',
        description: 'Tailor-made itineraries crafted to suit your personal travel preferences.'
    },
    {
        icon: Headset,
        title: '24/7 Support',
        description: 'Round-the-clock assistance to ensure your trip is smooth and worry-free.'
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-surface/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
                    >
                        Our Premium Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-muted max-w-2xl mx-auto mb-8"
                    >
                        Elevating your travel experience with comprehensive solutions for every step of your journey.
                    </motion.p>

                    <Link to="/services" className="text-primary font-bold hover:underline">
                        View All Services &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
