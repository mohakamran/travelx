import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, CreditCard } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "Choose Destination",
        desc: "Browse our curated list of 500+ premium locations."
    },
    {
        icon: Calendar,
        title: "Select Dates",
        desc: "Pick your perfectly timed seasonal getaway."
    },
    {
        icon: Plane,
        title: "We Plan Details",
        desc: "Flights, transfers, and accommodations are sorted."
    },
    {
        icon: CreditCard,
        title: "Book & Go",
        desc: "Secure payment and instant itinerary confirmation."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-surface/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform scale-110 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">How It Works</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Your journey from dream to departure in four simple steps. We handle the complexity so you can focus on the experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
