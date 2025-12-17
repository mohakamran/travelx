
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTrip } from '../context/TripContext';
import { Calendar, GripVertical, Trash2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Destination } from '../data/destinations';

const SortableItem = ({ destination, id }: { destination: Destination, id: string }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const { removeFromTrip } = useTrip();

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className="bg-surface rounded-xl p-4 mb-4 flex items-center shadow-lg border border-white/5 relative group">
            <button {...attributes} {...listeners} className="p-2 mr-4 cursor-grab text-text-muted hover:text-white">
                <GripVertical />
            </button>

            <img src={destination.image} alt={destination.name} className="w-20 h-20 rounded-lg object-cover mr-4" />

            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                <div className="flex items-center text-text-muted text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.location}
                </div>
            </div>

            <div className="text-right mr-6 hidden sm:block">
                <div className="font-bold text-primary">${destination.price}</div>
                <div className="text-xs text-text-muted">per night</div>
            </div>

            <button
                onClick={() => removeFromTrip(id)}
                className="p-2 rounded-full bg-white/5 text-red-400 hover:bg-red-500/20 transition-colors"
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    );
};

const Planner = () => {
    const { trip, reorderTrip } = useTrip();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = trip.findIndex((item) => item.id === active.id);
            const newIndex = trip.findIndex((item) => item.id === over.id);
            reorderTrip(arrayMove(trip, oldIndex, newIndex));
        }
    }

    return (
        <div className="min-h-screen container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white mb-2 ml-1">Your Trip</h1>
                    <p className="text-text-muted ml-1">Drag and drop to reorder your itinerary</p>
                </div>
                <div className="bg-surface px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <Calendar className="text-primary" />
                    <div>
                        <div className="text-xs text-text-muted">Total Destinations</div>
                        <div className="font-bold text-white">{trip.length} Stops</div>
                    </div>
                </div>
            </div>

            {trip.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
                    <Calendar className="w-16 h-16 text-text-muted mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">My Trip is Empty</h3>
                    <p className="text-text-muted mb-6">Start exploring destinations to add them to your plan.</p>
                    <Link to="/explore" className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all">
                        Browse Destinations
                    </Link>
                </div>
            ) : (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={trip.map(d => d.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="max-w-3xl mx-auto">
                            {trip.map(destination => (
                                <SortableItem key={destination.id} id={destination.id} destination={destination} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            )}
        </div>
    );
};

export default Planner;
