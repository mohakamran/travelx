import { Check } from 'lucide-react';

const plans = [
    {
        name: "Explorer",
        price: "$49",
        period: "/trip",
        features: ["Custom Itinerary", "24/7 Support", "Hotel Booking", "Local Guide Recommendations"],
        featured: false
    },
    {
        name: "Adventurer",
        price: "$99",
        period: "/trip",
        features: ["Everything in Explorer", "Flight Booking Assistance", "Restaurant Reservations", "Private Transfer Options", "Insurance Advisory"],
        featured: true
    },
    {
        name: "Globetrotter",
        price: "$199",
        period: "/month",
        features: ["Unlimited Trip Planning", "Dedicated Travel Concierge", "VIP Airport Lounge Access", "Exclusive Deals", "Priority Cancellation"],
        featured: false
    }
];

const PricingSection = () => {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Simple Pricing</h2>
                    <p className="text-text-muted">Transparent planning fees. No hidden costs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.featured
                                    ? 'bg-surface/50 border-primary shadow-2xl shadow-primary/10 scale-105 z-10'
                                    : 'bg-surface/20 border-white/5 hover:border-white/20'
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-text-muted mb-2">{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-text-muted ml-2">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.featured
                                    ? 'bg-primary text-white hover:bg-primary/90'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
