import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { destinations } from '../../data/destinations';
import { Star, MapPin } from 'lucide-react';

// Fix typical Leaflet icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create custom icon using Lucide React
const createCustomIcon = (price: number) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div class="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
             <span class="text-white text-xs font-bold">$${price}</span>
           </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
    });
};

interface MapProps {
    onDestinationSelect?: (id: string) => void;
}

const MapComponent: React.FC<MapProps> = ({ onDestinationSelect }) => {
    return (
        <div className="h-[calc(100vh-80px)] w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 z-0">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {destinations.filter(d => d.coordinates).map((dest) => (
                    <Marker
                        key={dest.id}
                        position={dest.coordinates!}
                        icon={createCustomIcon(dest.price)}
                        eventHandlers={{
                            click: () => onDestinationSelect && onDestinationSelect(dest.id)
                        }}
                    >
                        <Popup className="custom-popup">
                            <Link to={`/destination/${dest.id}`} className="block w-48 p-2 no-underline text-inherit hover:no-underline">
                                <img src={dest.image} alt={dest.name} className="w-full h-24 object-cover rounded-md mb-2" />
                                <h3 className="font-bold text-lg text-primary">{dest.name}</h3>
                                <div className="flex items-center text-gray-600 text-xs mb-1">
                                    <MapPin size={12} className="mr-1" /> {dest.location}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-bold text-gray-800">${dest.price}/night</span>
                                    <div className="flex items-center bg-yellow-100 px-1 rounded">
                                        <Star size={10} className="text-yellow-500 fill-current" />
                                        <span className="text-yellow-700 text-xs ml-1">{dest.rating}</span>
                                    </div>
                                </div>
                            </Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
