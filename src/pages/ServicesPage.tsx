import { motion } from 'framer-motion';
import { Plane, Crown, Shield, Globe, Compass, HeartHandshake } from 'lucide-react';

const services = [
    {
        icon: Plane,
        title: "Flight & Transfer Booking",
        description: "We handle all logistics, from first-class flights to private helicopter transfers, ensuring seamless connectivity.",
        details: ["Private Jet Charters", "Airport VIP Lounges", "Luxury Chauffeurs", "Helicopter Transfers"]
    },
    {
        icon: Crown,
        title: "Luxury Accommodation",
        description: "Access to the world's most exclusive hotels, private villas, and eco-lodges that aren't listed on public booking sites.",
        details: ["5-Star Hotel Partners", "Private Islands", "Historic Castles", "Sustainable Eco-Resorts"]
    },
    {
        icon: Compass,
        title: "Tailored Itineraries",
        description: "Every trip is designed from scratch based on your passions, whether it's culinary exploration or adrenaline sports.",
        details: ["Day-by-Day Planning", "Exclusive Access", "Flexible Schedules", "Local Expert Guides"]
    },
    {
        icon: Shield,
        title: "Comprehensive Insurance",
        description: "Travel with peace of mind knowing you're covered for every eventuality, including medical and cancellation.",
        details: ["Full Medical Coverage", "Trip Cancellation", "Lost Typography", "Adventure Sports"]
    },
    {
        icon: Globe,
        title: "Global Concierge",
        description: "Our 24/7 global support team is always just a message away to secure reservations or solve problems.",
        details: ["24/7 Support", "Restaurant Reservations", "Event Tickets", "Emergency Assistance"]
    },
    {
        icon: HeartHandshake,
        title: "Unique Experiences",
        description: "We unlock doors to experiences money usually can't buy, from private museum tours to meeting local artisans.",
        details: ["Private Tours", "Cultural Immersion", "Wildlife Encounters", "VIP Access"]
    }
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-transparent text-text-primary flex flex-col">
            <main className="flex-grow pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Premium Services</h1>
                        <p className="text-xl text-text-muted max-w-3xl mx-auto">
                            We don't just book trips; we craft unforgettable journeys. Our comprehensive suite of services ensures that every moment of your travel is perfect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-surface/50 border border-white/5 rounded-2xl p-8 hover:bg-surface hover:border-primary/30 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>

                                    <div className="space-y-2">
                                        {service.details.map((detail, i) => (
                                            <div key={i} className="flex items-center text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-20 bg-gradient-to-r from-surface to-background border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to experience the exceptional?</h2>
                        <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors relative z-10">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServicesPage;
