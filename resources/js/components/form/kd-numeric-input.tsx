import React, { ChangeEvent } from "react";
import { NumericFormat } from 'react-number-format';

interface Props {
    label: string;
    value?: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
}
const KdNumericInput = ({
    label,
    value,
    onChange,
    placeholder,
    autoFocus = false,
}: Props) => {
    return (
        <div className="max-w-sm">
            <label
                htmlFor={label}
                className="block text-sm font-medium mb-2 dark:text-white"
            >
                {label}
            </label>
            <NumericFormat
                id={label}
                value={value}
                thousandSeparator
                decimalScale={2}
                onChange={onChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
                placeholder={placeholder}
                autoFocus={autoFocus}
            />
        </div>
    );
};

export default KdNumericInput;
