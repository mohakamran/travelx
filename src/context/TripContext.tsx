import React, { createContext, useContext, useState } from 'react';
import type { Destination } from '../data/destinations';

interface TripContextType {
    trip: Destination[];
    addToTrip: (destination: Destination) => void;
    removeFromTrip: (id: string) => void;
    reorderTrip: (newTrip: Destination[]) => void;
    isInTrip: (id: string) => boolean;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [trip, setTrip] = useState<Destination[]>([]);

    const addToTrip = (destination: Destination) => {
        if (!trip.find(d => d.id === destination.id)) {
            setTrip([...trip, destination]);
        }
    };

    const removeFromTrip = (id: string) => {
        setTrip(trip.filter(d => d.id !== id));
    };

    const reorderTrip = (newTrip: Destination[]) => {
        setTrip(newTrip);
    };

    const isInTrip = (id: string) => {
        return trip.some(d => d.id === id);
    };

    return (
        <TripContext.Provider value={{ trip, addToTrip, removeFromTrip, reorderTrip, isInTrip }}>
            {children}
        </TripContext.Provider>
    );
};

export const useTrip = () => {
    const context = useContext(TripContext);
    if (context === undefined) {
        throw new Error('useTrip must be used within a TripProvider');
    }
    return context;
};
