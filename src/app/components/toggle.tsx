"use client";

import { useState } from "react";

interface ToggleProps {
    label: string,
    onChange?: (value: boolean) => void,
}

export default function Toggle({ label, onChange }: ToggleProps) {
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        const newValue = !isOn;
        setIsOn(newValue);
        onChange?.(newValue);
    }

    return (
        <button onClick={toggleState} className={`relative mt-6 cursor-pointer rounded-full w-16 h-8 ${isOn ? "bg-teal-400" : "bg-zinc-800"} transition-colors focus-within:outline-4 outline-teal-400/50`}>
            <div className={`pointer-events-none w-6 h-6 rounded-full bg-white top-1 absolute ${isOn ? "left-9" : "left-1"} transition-all`} />
            <label className="absolute left-0 -top-7 text-sm text-neutral-400 whitespace-nowrap">{label}</label>
        </button>
    )
} 