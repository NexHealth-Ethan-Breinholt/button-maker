"use client";

import { useState } from "react";

interface ToggleProps {
    onChange?: (value: boolean) => void
}

export default function Toggle({ onChange }: ToggleProps) {
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        const newValue = !isOn;
        setIsOn(newValue);
        onChange?.(newValue);
    }

    return (
        <button onClick={toggleState} className={`relative cursor-pointer rounded-full w-16 h-8 ${isOn ? "bg-teal-400" : "bg-zinc-800"} transition-colors focus-within:outline-4 outline-teal-400/50`}>
            <div className={`pointer-events-none w-6 h-6 rounded-full bg-white top-1 absolute ${isOn ? "left-9" : "left-1"} transition-all`} />
        </button>
    )
} 