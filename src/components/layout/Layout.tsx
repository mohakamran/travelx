import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import ParticlesBackground from './ParticlesBackground';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-text-primary selection:bg-accent selection:text-background font-sans relative isolate">
            <ParticlesBackground />
            <ScrollProgress />
            <div className="fixed inset-0 bg-background/5 -z-10 pointer-events-none" /> {/* Optional Overlay */}
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
