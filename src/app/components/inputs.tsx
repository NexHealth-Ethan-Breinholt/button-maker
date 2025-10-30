import { useEffect, useState } from "react"
import Toggle from "./toggle";

interface BaseProps {
    label: string;
    buttonData: any;
    conditionalKey?: string;
    conditionalKeyValue?: any;
    hiddenByDefault?: boolean;
}

interface InputWrapperProps extends BaseProps {
    children: React.ReactNode;
}

interface InputFieldProps extends BaseProps {
    defaultValue?: string | boolean,
    dataKey: string,
    onChange: (key: string, value: string | boolean) => void,
}

const InputWrapper = ({
    children,
    label,
    buttonData,
    conditionalKey,
    conditionalKeyValue,
    hiddenByDefault,
}: InputWrapperProps) => {
    const [hidden, setHidden] = useState(hiddenByDefault);

    useEffect(() => {
        setHidden(conditionalKey ? buttonData[conditionalKey] !== conditionalKeyValue : false);
    }, [buttonData, conditionalKey, conditionalKeyValue]);

    if (hidden) {
        return <></>
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-400">{label}</label>
            {children}
        </div>
    )
}

export const TextInput = (props: InputFieldProps) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.dataKey, e.target.value);
    }

    return (
        <InputWrapper label={props.label} buttonData={props.buttonData} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <input type="text" onChange={handleOnChange} className="text-white w-full bg-neutral-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
        </InputWrapper>
    )
}

export const ToggleInput = (props: InputFieldProps) => {
    const handleOnChange = (value: boolean) => {
        props.onChange(props.dataKey, value);
    }

    return (
        <InputWrapper label={props.label} buttonData={props.buttonData} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <Toggle defaultValue={props.defaultValue as boolean} onChange={handleOnChange} />
        </InputWrapper>
    )
}