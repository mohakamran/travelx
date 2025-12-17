import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, HelpCircle, AlertTriangle, FileText, Phone, type LucideIcon } from 'lucide-react';

interface QAItem {
    q: string;
    a: string;
}

interface Section {
    heading: string;
    content?: string;
    items?: QAItem[];
}

interface TabContent {
    title: string;
    icon: LucideIcon;
    sections: Section[];
}

const TAB_CONTENT: Record<string, TabContent> = {
    help: {
        title: "Help Center",
        icon: HelpCircle,
        sections: [
            {
                heading: "Frequently Asked Questions",
                items: [
                    { q: "How do I book a trip?", a: "You can book directly through our website by selecting a destination and using the 'Book Now' button, or contact our concierge team for a custom itinerary." },
                    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, Amex), bank transfers, and crypto payments for premium members." },
                    { q: "Can I modify my itinerary?", a: "Yes, our 'Adventurer' and 'Globetrotter' plans allow for flexible itinerary modifications up to 48 hours before departure." }
                ]
            },
            {
                heading: "Contact Support",
                content: "Our support team is available 24/7. Email us at support@travelx.com or call +1 (800) 123-4567."
            }
        ]
    },
    insurance: {
        title: "Travel Insurance",
        icon: Shield,
        sections: [
            {
                heading: "Why You Need Insurance",
                content: "Unforeseen events can happen. Our comprehensive travel insurance partners protect you against trip cancellations, medical emergencies, and lost luggage."
            },
            {
                heading: "Coverage Typs",
                items: [
                    { q: "Medical & Dental", a: "Up to $1,000,000 in emergency medical coverage internationally." },
                    { q: "Trip Cancellation", a: "100% reimbursement if you cancel for a covered reason (illness, injury, jury duty)." },
                    { q: "Baggage Delay", a: "Reimbursement for essential items if your bags are delayed more than 12 hours." }
                ]
            }
        ]
    },
    cancellation: {
        title: "Cancellation Policy",
        icon: AlertTriangle,
        sections: [
            {
                heading: "Standard Policy",
                content: "Cancellations made 30 days or more before departure receive a full refund minus a 5% processing fee. Cancellations made 15-29 days before departure receive a 50% refund."
            },
            {
                heading: "Force Majeure",
                content: "In the event of natural disasters, political unrest, or pandemics, we offer full travel credit valid for 2 years."
            }
        ]
    }
};

const SupportPage = () => {
    const { type } = useParams();
    const [activeTab, setActiveTab] = useState(type || 'help');

    useEffect(() => {
        if (type && TAB_CONTENT[type as keyof typeof TAB_CONTENT]) {
            setActiveTab(type);
        }
    }, [type]);

    const activeContent = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];
    const ActiveIcon = activeContent.icon;

    return (
        <div className="min-h-screen bg-transparent text-text-primary flex flex-col">
            <main className="flex-grow pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-heading font-bold text-white mb-4">How can we help?</h1>
                        <p className="text-text-muted">Find answers, review policies, and get support.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-white/10 pb-1">
                        {Object.entries(TAB_CONTENT).map(([key, data]) => {
                            const Icon = data.icon;
                            const isActive = activeTab === key;
                            return (
                                <Link
                                    to={`/support/${key}`}
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all ${isActive
                                        ? 'bg-surface border-t border-x border-white/10 text-primary'
                                        : 'text-text-muted hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {data.title}
                                </Link>
                            );
                        })}
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="bg-surface/30 border border-white/10 rounded-2xl p-8 md:p-12"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    <ActiveIcon className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">{activeContent.title}</h2>
                            </div>

                            <div className="space-y-10">
                                {activeContent.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            {idx === 0 ? <FileText className="w-5 h-5 text-primary" /> : <Phone className="w-5 h-5 text-primary" />}
                                            {section.heading}
                                        </h3>

                                        {section.content && (
                                            <p className="text-text-muted leading-relaxed">{section.content}</p>
                                        )}

                                        {section.items && (
                                            <div className="grid gap-4">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="bg-background/50 p-6 rounded-xl border border-white/5">
                                                        <h4 className="font-bold text-white mb-2">{item.q}</h4>
                                                        <p className="text-text-muted text-sm">{item.a}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default SupportPage;
