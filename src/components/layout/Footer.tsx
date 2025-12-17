import { Heart, Rocket, Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-surface pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 group mb-6">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-80 blur-[2px] group-hover:blur-[6px] transition-all" />
                                <Rocket className="relative w-6 h-6 text-white transform group-hover:-rotate-45 transition-transform duration-500" />
                            </div>
                            <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-muted">
                                Travel<span className="text-primary">X</span>
                            </span>
                        </Link>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            Crafting unforgettable journeys for the modern explorer. We bring the world to your fingertips with premium experiences and expert curation.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link to="/explore" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Destinations</Link></li>
                            <li><Link to="/services" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Services</Link></li>
                            <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />About Us</Link></li>
                            <li><Link to="/planner" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Trip Planner</Link></li>
                            <li><Link to="/map" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Interactive Map</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link to="/support/help" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Help Center</Link></li>
                            <li><Link to="/support/help" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Safety Information</Link></li>
                            <li><Link to="/support/cancellation" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Cancellation Options</Link></li>
                            <li><Link to="/support/insurance" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Travel Insurance</Link></li>
                            <li><Link to="/signin" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />Sign In (Admin)</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-text-muted mb-6">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded-lg text-white hover:bg-primary/90 transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © 2024 TravelX Experience Explorer. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                        <span>for travelers worldwide</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
