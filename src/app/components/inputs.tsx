import { useEffect, useState } from "react"
import Toggle from "./toggle";
import { useButtonContext } from "./button-context";

interface BaseProps {
    label: string;
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
}

const InputWrapper = ({
    children,
    label,
    conditionalKey,
    conditionalKeyValue,
    hiddenByDefault = false,
}: InputWrapperProps) => {
    const { buttonData } = useButtonContext();
    const [hidden, setHidden] = useState(hiddenByDefault);

    const isHidden = conditionalKey ? buttonData[conditionalKey] !== conditionalKeyValue : false;

    useEffect(() => {
        setHidden(isHidden);
        if (conditionalKey) {
            console.log(conditionalKey, conditionalKeyValue, buttonData[conditionalKey], isHidden)
        }
    }, [buttonData, conditionalKey, conditionalKeyValue, isHidden]);

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
    const { handleInput } = useButtonContext();
    const [value, setValue] = useState("");

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            handleOnChange(props.defaultValue as string);
        }
    }, []);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        handleInput(props.dataKey, typeof e === "string" ? e : e.target.value);
        setValue(typeof e === "string" ? e : e.target.value);
    }

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <input type="text" onChange={handleOnChange} value={value} className="text-white w-full bg-neutral-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
        </InputWrapper>
    )
}

export const ToggleInput = (props: InputFieldProps) => {
    const { handleInput } = useButtonContext();
    const [value, setValue] = useState(false);
    
    useEffect(() => {
        if (props.defaultValue !== undefined) {
            handleOnChange(value);
        }
    }, []);

    const handleOnChange = (value: boolean) => {
        handleInput(props.dataKey, value);
        setValue(value);
    }

    // TODO: The value is not being applied as the default value here.

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <Toggle defaultValue={props.defaultValue as boolean} onChange={handleOnChange} />
        </InputWrapper>
    )
}

export const ColorInput = (props: InputFieldProps) => {
    const { handleInput } = useButtonContext();
    const [value, setValue] = useState("");

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            handleOnChange(props.defaultValue as string);
        }
    }, []);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        handleInput(props.dataKey, typeof e === "string" ? e : e.target.value);
        setValue(typeof e === "string" ? e : e.target.value);
    }

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <input type="color" onChange={handleOnChange} value={value} className="w-full bg-neutral-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
        </InputWrapper>
    )
}