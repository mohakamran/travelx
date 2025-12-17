import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MapPage from './pages/MapPage';
import Planner from './pages/Planner';
import BookNow from './pages/BookNow';
import DestinationDetails from './pages/DestinationDetails';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SignIn from './pages/SignIn';
import SupportPage from './pages/SupportPage';
import { CommandProvider } from './context/CommandContext';
import { TripProvider } from './context/TripContext';
import CommandPanel from './components/CommandPanel';
import 'leaflet/dist/leaflet.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="support/:type" element={<SupportPage />} />
          <Route path="destination/:id" element={<DestinationDetails />} />
          <Route path="map" element={<MapPage />} />
          <Route path="planner" element={<Planner />} />
          <Route path="book" element={<BookNow />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CommandProvider>
      <TripProvider>
        <BrowserRouter>
          <CommandPanel />
          <AnimatedRoutes />
        </BrowserRouter>
      </TripProvider>
    </CommandProvider>
  );
}

export default App;
