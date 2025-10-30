"use client";

import { useEffect, useState } from "react"

interface ColorPickerProps {
    label: string,
    value?: string,
    dataKey: string,
    onChange: (key: string, value: string) => void,
    buttonData: any,
    conditionalKey?: string,
    conditionalKeyValue?: any,
}

export default function ColorPicker({ label, value = "#000000", dataKey, onChange, buttonData, conditionalKey, conditionalKeyValue }: ColorPickerProps) {
    const [color, setColor] = useState(value);
    
    useEffect(() => {
        setColor(value);
        onChange(dataKey, value);
    }, [])

    const handleColorChange = (color: string) => {
        setColor(color);
        onChange(dataKey, color)
    }

    if (conditionalKey && buttonData[conditionalKey] !== conditionalKeyValue) {
        return <></>
    }

    return (
        <div className="relative mt-8">
            <input value={color} onChange={(e) => handleColorChange(e.target.value)} id={`${label}-temp-color-picker`} type="color" className="w-full focus-within:outline-4 focus-within:outline-teal-400/50" />
            <label htmlFor={`${label}-temp-color-picker`} className="absolute left-0 -top-6 text-sm text-neutral-400">{label}</label>
        </div>
    )
}