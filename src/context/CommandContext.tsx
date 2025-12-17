import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'sunset' | 'dark' | 'light';
type AnimationIntensity = 'low' | 'medium' | 'high';
type MapStyle = 'minimal' | 'satellite';

interface CommandContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    accentColor: string;
    setAccentColor: (color: string) => void;
    animationIntensity: AnimationIntensity;
    setAnimationIntensity: (intensity: AnimationIntensity) => void;
    layoutMode: 'card' | 'cinematic';
    setLayoutMode: (mode: 'card' | 'cinematic') => void;
    mapStyle: MapStyle;
    setMapStyle: (style: MapStyle) => void;
    performanceMode: boolean;
    setPerformanceMode: (enabled: boolean) => void;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

export const CommandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('sunset');
    const [accentColor, setAccentColor] = useState('#00C2A8');
    const [animationIntensity, setAnimationIntensity] = useState<AnimationIntensity>('medium');
    const [layoutMode, setLayoutMode] = useState<'card' | 'cinematic'>('cinematic');
    const [mapStyle, setMapStyle] = useState<MapStyle>('minimal');
    const [performanceMode, setPerformanceMode] = useState(false);

    // Apply theme classes to body
    useEffect(() => {
        document.documentElement.classList.remove('theme-sunset', 'theme-dark', 'theme-light');
        document.documentElement.classList.add(`theme-${theme}`);

        // Update CSS variables for accent color if needed, or just class logic
        document.documentElement.style.setProperty('--color-accent', accentColor);
    }, [theme, accentColor]);

    return (
        <CommandContext.Provider
            value={{
                theme,
                setTheme,
                accentColor,
                setAccentColor,
                animationIntensity,
                setAnimationIntensity,
                layoutMode,
                setLayoutMode,
                mapStyle,
                setMapStyle,
                performanceMode,
                setPerformanceMode,
            }}
        >
            {children}
        </CommandContext.Provider>
    );
};

export const useCommand = () => {
    const context = useContext(CommandContext);
    if (context === undefined) {
        throw new Error('useCommand must be used within a CommandProvider');
    }
    return context;
};
