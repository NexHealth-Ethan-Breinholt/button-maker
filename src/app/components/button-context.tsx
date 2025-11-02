"use client";

import { createContext, useContext, useState } from "react";
import { DEFAULT_BUTTON_DATA } from "../constants";

interface ButtonContextType {
    buttonData: Record<string, any>,
    setButtonData: React.Dispatch<React.SetStateAction<{}>>,
    handleInput: (key: string, value: any) => void,
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

interface ButtonContextProviderProps {
    children: React.ReactNode,
}

export default function ButtonContextProvider({ children }: ButtonContextProviderProps) {
    const [buttonData, setButtonData] = useState<Record<string, any>>(DEFAULT_BUTTON_DATA);

    const handleInput = (key: string, value: any) => {
        setButtonData({
            ...buttonData,
            [key]: value,
        });
    }

    return (
        <ButtonContext.Provider value={{ buttonData, setButtonData, handleInput }}>
            {children}
        </ButtonContext.Provider>
    )
}

export const useButtonContext = () => {
    const context = useContext(ButtonContext);
    if (!context) {
        throw new Error("useButtonContext must be used within an ButtonContextProvider.");
    }
    return context;
}