interface TextfieldProps {
    label: string,
}

export default function Textfield({ label }: TextfieldProps) {
    return (
        <div className="relative mt-8">
            <input id={`${label}-textfield`} type="text" className="text-white w-full bg-neutral-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
            <label htmlFor={`${label}-textfield`} className="absolute left-0 -top-6 text-sm text-neutral-400">{label}</label>
        </div>
    )
}