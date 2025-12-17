import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, User, MapPin, CheckCircle, HelpCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Custom styles for DatePicker (you might need to add this to global.css or use a styled wrapper)
import '../index.css';

const BookNow = () => {
    const { state } = useLocation();
    const [step, setStep] = useState(1);

    // Form States
    const [destination, setDestination] = useState(state?.destinationName || '');
    const [travelers, setTravelers] = useState(2);
    const [budget, setBudget] = useState(state?.price ? `$${state.price * 2} - $${state.price * 4}` : '$1000 - $3000');

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 7)));

    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const services = [
        "Flight Booking", "Hotel Reservation", "Private Transfers",
        "Guided Tours", "Travel Insurance", "Concierge Service"
    ];

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <div className="min-h-screen bg-transparent text-text-primary flex flex-col">
            <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-heading font-bold text-white mb-4">Start Your Journey</h1>
                        <p className="text-text-muted">Complete the form below to begin planning your dream trip.</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-between items-center mb-12 relative max-w-2xl mx-auto">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -z-10" />
                        {[1, 2, 3, 4].map((s) => (
                            <div
                                key={s}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-colors z-10 ${step >= s ? 'bg-primary border-background text-white shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 'bg-surface border-background text-text-muted'}`}
                            >
                                {s}
                            </div>
                        ))}
                    </div>

                    <div className="bg-surface/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                        <AnimatePresence mode='wait'>
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                        <div className="p-2 bg-primary/20 rounded-lg"><MapPin className="text-primary w-6 h-6" /></div>
                                        Where are we going?
                                    </h3>
                                    <div className="space-y-6">
                                        <label className="block">
                                            <span className="text-gray-300 font-medium mb-2 block">Destination</span>
                                            <input
                                                type="text"
                                                value={destination}
                                                onChange={(e) => setDestination(e.target.value)}
                                                placeholder="e.g. Santorini, Greece"
                                                className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                                            />
                                        </label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <label className="block">
                                                <span className="text-gray-300 font-medium mb-2 block">Travelers</span>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={travelers}
                                                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                                                    className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                                />
                                            </label>
                                            <label className="block">
                                                <span className="text-gray-300 font-medium mb-2 block">Approx. Budget</span>
                                                <select
                                                    value={budget}
                                                    onChange={(e) => setBudget(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                                                >
                                                    <option>$1000 - $3000</option>
                                                    <option>$3000 - $5000</option>
                                                    <option>$5000 - $10000</option>
                                                    <option>$10000+</option>
                                                </select>
                                            </label>
                                        </div>
                                        <button onClick={() => setStep(2)} className="w-full bg-primary py-4 rounded-xl font-bold text-lg text-white mt-4 hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25">Continue</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                        <div className="p-2 bg-primary/20 rounded-lg"><CalendarIcon className="text-primary w-6 h-6" /></div>
                                        Select Dates
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <label className="block relative z-20">
                                                <span className="text-gray-300 font-medium mb-2 block">Departure Date</span>
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full block"
                                                    wrapperClassName="w-full"
                                                />
                                            </label>
                                            <label className="block relative z-20">
                                                <span className="text-gray-300 font-medium mb-2 block">Return Date</span>
                                                <DatePicker
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate || new Date()}
                                                    className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full block"
                                                    wrapperClassName="w-full"
                                                />
                                            </label>
                                        </div>
                                        <div className="flex gap-4 mt-8">
                                            <button onClick={() => setStep(1)} className="flex-1 bg-white/5 py-4 rounded-xl font-bold text-white hover:bg-white/10 transition-colors">Back</button>
                                            <button onClick={() => setStep(3)} className="flex-1 bg-primary py-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">Continue</button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                        <div className="p-2 bg-primary/20 rounded-lg"><CheckCircle className="text-primary w-6 h-6" /></div>
                                        Add-on Services
                                    </h3>

                                    <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                                        <HelpCircle className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-blue-200">Unsure what to choose?</p>
                                            <Link to="/services" target="_blank" className="text-sm font-bold text-blue-400 hover:text-blue-300 underline">View our Services Guide</Link>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {services.map(service => (
                                            <div
                                                key={service}
                                                onClick={() => toggleService(service)}
                                                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${selectedServices.includes(service)
                                                    ? 'bg-primary/20 border-primary shadow-[0_0_10px_rgba(255,107,0,0.2)]'
                                                    : 'bg-black/20 border-white/10 hover:border-white/30 hover:bg-black/30'
                                                    }`}
                                            >
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedServices.includes(service) ? 'bg-primary border-primary' : 'border-white/40'
                                                    }`}>
                                                    {selectedServices.includes(service) && <CheckCircle className="w-3 h-3 text-white" />}
                                                </div>
                                                <span className="text-white font-medium">{service}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <button onClick={() => setStep(2)} className="flex-1 bg-white/5 py-4 rounded-xl font-bold text-white hover:bg-white/10 transition-colors">Back</button>
                                        <button onClick={() => setStep(4)} className="flex-1 bg-primary py-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">Continue</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                        <div className="p-2 bg-primary/20 rounded-lg"><User className="text-primary w-6 h-6" /></div>
                                        Contact Details
                                    </h3>
                                    <div className="space-y-6">
                                        <label className="block">
                                            <span className="text-gray-300 font-medium mb-2 block">Full Name</span>
                                            <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                        </label>
                                        <label className="block">
                                            <span className="text-gray-300 font-medium mb-2 block">Email Address</span>
                                            <input type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                        </label>
                                        <label className="block">
                                            <span className="text-gray-300 font-medium mb-2 block">Special Requests</span>
                                            <textarea rows={3} placeholder="Dietary restrictions, special occasions..." className="w-full bg-black/40 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" />
                                        </label>

                                        <div className="flex gap-4 mt-8">
                                            <button onClick={() => setStep(3)} className="flex-1 bg-white/5 py-4 rounded-xl font-bold text-white hover:bg-white/10 transition-colors">Back</button>
                                            <button className="flex-1 bg-green-500 py-4 rounded-xl font-bold text-white hover:bg-green-600 transition-all shadow-lg shadow-green-500/25">Complete Booking</button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default BookNow;
