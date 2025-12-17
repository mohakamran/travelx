import Hero from '../components/home/Hero';
import DestinationCard from '../components/destinations/DestinationCard';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import ProcessSection from '../components/home/ProcessSection';
import PricingSection from '../components/home/PricingSection';
import { destinations } from '../data/destinations';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-heading font-bold text-center mb-10">Popular Destinations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {destinations.filter(d => d.popular).slice(0, 3).map((dest, index) => (
                        <DestinationCard key={dest.id} destination={dest} index={index} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/explore"
                        className="inline-block px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        View All Destinations
                    </Link>
                </div>
            </div>

            <Services />
            <ProcessSection />
            <PricingSection />
            <About />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
