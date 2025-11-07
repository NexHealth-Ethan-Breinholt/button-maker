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
    dataKey: string,
    valueSuffix?: string,
    pattern?: RegExp,
    min?: number,
    max?: number,
    valueAtMax?: number,
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
        if (conditionalKey) {
            if (buttonData[conditionalKey] === undefined) {
                setHidden(hiddenByDefault);
            }
            else {
                setHidden(isHidden);
            }
        }
    }, [buttonData, conditionalKey, conditionalKeyValue, isHidden]);

    if (hidden) {
        return null;
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-400">{label}</label>
            {children}
        </div>
    )
}

export const TextInput = (props: InputFieldProps) => {
    const { buttonData, handleInput } = useButtonContext();
    let startValue: string = buttonData[props.dataKey] ?? "";
    if (startValue && props.valueSuffix && startValue.endsWith(props.valueSuffix)) {
        startValue = startValue.slice(0, startValue.length - props.valueSuffix?.length);
    }
    const [value, setValue] = useState(startValue);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        let newValue = typeof e === "string" ? e : e.target.value;

        if (props.pattern && !props.pattern.test(newValue)) {
            return;
        }

        setValue(newValue);

        if (props.valueSuffix && !newValue.endsWith(props.valueSuffix)) {
            newValue += props.valueSuffix;
        }

        handleInput(props.dataKey, newValue);
    }

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <input type="text" onChange={handleOnChange} value={value} className="text-white w-full bg-zinc-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
        </InputWrapper>
    )
}

export const ToggleInput = (props: InputFieldProps) => {
    const { buttonData, handleInput } = useButtonContext();
    const startValue: boolean = buttonData[props.dataKey] ?? false;
    const [value, setValue] = useState(false);

    const handleOnChange = (value: boolean) => {
        handleInput(props.dataKey, value);
        setValue(value);
    }

    // TODO: The value is not being applied as the default value here.

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <Toggle defaultValue={startValue} onChange={handleOnChange} />
        </InputWrapper>
    )
}

export const ColorInput = (props: InputFieldProps) => {
    const { buttonData, handleInput } = useButtonContext();
    const startValue: string = buttonData[props.dataKey] ?? "";
    const [value, setValue] = useState(startValue);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        let newValue = typeof e === "string" ? e : e.target.value;
        if (props.valueSuffix && !newValue.endsWith(props.valueSuffix)) {
            newValue += props.valueSuffix;
        }
        handleInput(props.dataKey, newValue);
        setValue(newValue);
    }

    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <input type="color" onChange={handleOnChange} value={value} className="w-full bg-zinc-800 rounded-lg px-2 py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
        </InputWrapper>
    )
}

export const RangeInput = (props: InputFieldProps) => {
    const { buttonData, handleInput } = useButtonContext();
    let startValue: string = buttonData[props.dataKey] ?? "";
    if (startValue && props.valueSuffix && startValue.endsWith(props.valueSuffix)) {
        startValue = startValue.slice(0, startValue.length - props.valueSuffix?.length);
    }
    const [value, setValue] = useState(startValue);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        let newValue = typeof e === "string" ? e : e.target.value;

        if (props.pattern && !props.pattern.test(newValue)) {
            return;
        }

        if (props.valueAtMax && props.max && newValue === props.max.toString()) {
            newValue = props.valueAtMax.toString();
        }

        setValue(newValue);

        if (props.valueSuffix && !newValue.endsWith(props.valueSuffix)) {
            newValue += props.valueSuffix;
        }

        handleInput(props.dataKey, newValue);
    }

    const min = props.min ?? 0;
    const max = props.max ?? 100;
    
    return (
        <InputWrapper label={props.label} conditionalKey={props.conditionalKey} conditionalKeyValue={props.conditionalKeyValue} hiddenByDefault={props.hiddenByDefault}>
            <div className="p-2 flex justify-between">
                <input type="range" min={min} max={max} onChange={handleOnChange} value={value} className="text-white w-full bg-zinc-800 accent-teal-400 rounded-lg py-1 text-left focus-within:outline-4 focus-within:outline-teal-400/50" />
                <p className="w-20 text-right text-white">{value}{props.valueSuffix}</p>
            </div>
        </InputWrapper>
    )
}