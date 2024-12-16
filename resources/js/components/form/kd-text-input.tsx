import React, { ChangeEvent } from "react";

interface Props {
    label: string;
    value?: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
}
const KdTextInput = ({
    label,
    value,
    type = "text",
    onChange,
    placeholder,
    autoFocus = false,
    readonly = false,
}: Props) => {
    return (
        <div className="max-w-sm">
            <label
                htmlFor={label}
                className="block text-sm font-medium mb-2 dark:text-white"
            >
                {label}
            </label>
            <input
                type={type}
                id={label}
                value={value}
                onChange={onChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
                placeholder={placeholder}
                autoFocus={autoFocus}
                autoComplete="off"
                readOnly={readonly}
            />
        </div>
    );
};

export default KdTextInput;
