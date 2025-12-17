import { useState } from 'react';
import { Settings, X, Moon, Sun, Monitor, Zap, Map as MapIcon, Layers, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCommand } from '../context/CommandContext';

const CommandPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        theme, setTheme,
        animationIntensity, setAnimationIntensity,
        layoutMode, setLayoutMode,
        mapStyle, setMapStyle,
        performanceMode, setPerformanceMode
    } = useCommand();

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 shadow-lg text-primary hover:bg-surface hover:scale-105 transition-all"
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 90 }}
            >
                <Settings className="w-6 h-6" />
            </motion.button>

            {/* Panel Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-surface/90 backdrop-blur-xl border-l border-white/10 z-50 p-6 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                    Command Center
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/5 transition-colors"
                                >
                                    <X className="w-6 h-6 text-text-muted" />
                                </button>
                            </div>

                            <div className="space-y-8">
                                {/* Theme Section */}
                                <section>
                                    <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">Theme</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['sunset', 'dark', 'light'].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setTheme(t as any)}
                                                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${theme === t
                                                    ? 'bg-primary/20 border-primary text-primary'
                                                    : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
                                                    }`}
                                            >
                                                {t === 'light' ? <Sun size={18} /> : t === 'dark' ? <Moon size={18} /> : <Monitor size={18} />}
                                                <span className="text-xs capitalize">{t}</span>
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* Animation Section */}
                                <section>
                                    <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">Animation</h3>
                                    <div className="flex bg-white/5 p-1 rounded-lg">
                                        {['low', 'medium', 'high'].map((intensity) => (
                                            <button
                                                key={intensity}
                                                onClick={() => setAnimationIntensity(intensity as any)}
                                                className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${animationIntensity === intensity
                                                    ? 'bg-primary text-white shadow-lg'
                                                    : 'text-text-muted hover:text-white'
                                                    }`}
                                            >
                                                {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* Layout View */}
                                <section>
                                    <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">View Mode</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setLayoutMode('card')}
                                            className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${layoutMode === 'card'
                                                ? 'bg-accent/20 border-accent text-accent'
                                                : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
                                                }`}
                                        >
                                            <Layers size={20} />
                                            <span className="text-sm font-medium">Card View</span>
                                        </button>
                                        <button
                                            onClick={() => setLayoutMode('cinematic')}
                                            className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${layoutMode === 'cinematic'
                                                ? 'bg-accent/20 border-accent text-accent'
                                                : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
                                                }`}
                                        >
                                            <Monitor size={20} />
                                            <span className="text-sm font-medium">Cinematic</span>
                                        </button>
                                    </div>
                                </section>

                                {/* Map Style */}
                                <section>
                                    <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">Map Style</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setMapStyle('minimal')}
                                            className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${mapStyle === 'minimal'
                                                    ? 'bg-accent/20 border-accent text-accent'
                                                    : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
                                                }`}
                                        >
                                            <MapIcon size={20} />
                                            <span className="text-sm font-medium">Minimal</span>
                                        </button>
                                        <button
                                            onClick={() => setMapStyle('satellite')}
                                            className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${mapStyle === 'satellite'
                                                    ? 'bg-accent/20 border-accent text-accent'
                                                    : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
                                                }`}
                                        >
                                            <Globe size={20} />
                                            <span className="text-sm font-medium">Satellite</span>
                                        </button>
                                    </div>
                                </section>

                                {/* Performance */}
                                <section>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-3">
                                            <Zap className={`w-5 h-5 ${performanceMode ? 'text-yellow-400' : 'text-text-muted'}`} />
                                            <div>
                                                <div className="text-sm font-medium text-text-primary">Performance Mode</div>
                                                <div className="text-xs text-text-muted">Reduce effects</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setPerformanceMode(!performanceMode)}
                                            className={`w-12 h-6 rounded-full transition-colors relative ${performanceMode ? 'bg-primary' : 'bg-white/10'
                                                }`}
                                        >
                                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${performanceMode ? 'translate-x-6' : 'translate-x-0'
                                                }`} />
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default CommandPanel;
