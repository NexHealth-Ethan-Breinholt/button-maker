interface MSelectOptionProps {
    label: string,
    returnEmptyString?: boolean
    valueSetFunction: (arg: string) => void,
    placeholderStyle?: boolean,
    highlighted?: boolean,
}

export default function SelectOption({ label, returnEmptyString, valueSetFunction, placeholderStyle = false, highlighted = false }: MSelectOptionProps) {
    return (
        <li onClick={() => valueSetFunction(returnEmptyString ? "" : label)} className={`rounded-lg p-2 ${highlighted ? "bg-teal-500" : "hover:bg-zinc-700"} italic" : ""}`}>{label}</li>
    )
}