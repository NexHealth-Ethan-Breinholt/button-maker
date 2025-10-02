interface ColorPickerProps {
    label: string,
}

export default function ColorPicker({ label }: ColorPickerProps) {
    return (
        <button className="relative mt-8 bg-zinc-800 p-4 rounded-lg group focus-within:outline-4 outline-teal-400/50">
            <label className="absolute left-0 -top-6 text-sm text-neutral-400">{label}</label>
            <div className="hidden group-focus-within:block bg-zinc-600 rounded-lg absolute top-10 shadow-lg p-4 left-0 right-0">
                <div className="w-full h-24 bg-[#ff0000] color-picker-gradients"></div>
                <div className="w-full rainbow-gradient h-4 mt-2"></div>
            </div>
        </button>
    )
}