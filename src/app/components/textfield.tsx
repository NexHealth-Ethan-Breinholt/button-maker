interface TextfieldProps {
    label: string,
    dataKey: string,
    onChange: (key: string, value: string) => void,
    buttonData: any,
    conditionalKey?: string,
    conditionalKeyValue?: any,
}

export default function Textfield({ label, dataKey: key, onChange, buttonData, conditionalKey, conditionalKeyValue }: TextfieldProps) {
    if (conditionalKey && buttonData[conditionalKey] !== conditionalKeyValue) {
        return <></>
    }
    
    return (
        <div className="relative mt-8">
            <input onChange={(e) => onChange(key, e.target.value)} id={`${label}-textfield`} type="text" className="text-white w-full bg-neutral-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
            <label htmlFor={`${label}-textfield`} className="absolute left-0 -top-6 text-sm text-neutral-400">{label}</label>
        </div>
    )
}