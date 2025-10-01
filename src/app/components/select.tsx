"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import SelectOption from "./select-option";

interface SelectProps {
    label: string,
    placeholderText: string,
    options: string[],
    showNoneOption?: boolean,
}

export default function Select({ label, placeholderText = "Select an Option", options = ["Option 1", "Option 2"], showNoneOption = false }: SelectProps) {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const selectRef = useRef<HTMLButtonElement>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <button ref={selectRef} onClick={() => setOpen(!open)} className="relative mt-8 text-white bg-neutral-800 rounded-lg px-2 text-left focus-within:outline-4 focus-within:outline-teal-400/50 cursor-pointer">
            <label className="absolute left-0 -top-6 text-sm text-neutral-400">{label}</label>
            {!selectedOption && <p className="py-1 italic text-neutral-400">{placeholderText}</p>}
            {selectedOption && <p className="py-1">{selectedOption}</p>}
            {!open && <FaChevronDown size={12} className="absolute right-2 top-[10px]" />}
            {open && <FaChevronUp size={12} className="absolute right-2 top-[10px]" />}
            {open && <ul className="shadow-lg p-4 rounded-lg overflow-hidden absolute flex flex-col top-full mt-2 left-0 right-0 z-50 bg-zinc-600">
                {showNoneOption && <SelectOption label="None" returnEmptyString valueSetFunction={() => handleSelect("")} placeholderStyle />}
                {
                    options.map((option, index) => (
                        <SelectOption key={`option-${index}`} label={option} valueSetFunction={() => handleSelect(option)} highlighted={selectedOption === option} />
                    ))
                }
            </ul>}
        </button>
    )
}