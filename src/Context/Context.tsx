import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context state
interface ActiveContextType {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an initial value of `null`
const ActiveContext = createContext<ActiveContextType | null>(null);

// Create a custom hook to use the context
export const useActive = (): ActiveContextType => {
    const context = useContext(ActiveContext);
    if (!context) {
        throw new Error('useActive must be used within an ActiveProvider');
    }
    return context;
};

// Define the props type for the provider component
interface ActiveProviderProps {
    children: ReactNode;
}

// Provider component to wrap your app
export const ActiveProvider: React.FC<ActiveProviderProps> = ({ children }) => {
    const [isActive, setIsActive] = useState<string>('About');  // Initialize as an empty string

    return (
        <ActiveContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </ActiveContext.Provider>
    );
};
