import { Account } from "@/lib/interfaces";
import { numberFormat } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

interface Props {
    branch: string;
    total: number;
    accounts: Account[];
    totalBalance: number;
}

const CostBreakdownCard: React.FC<Props> = ({ branch, total, accounts, totalBalance }) => {
    const [sliderValue, setSliderValue] = useState(total);


    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.target.value, 10));
    };


    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg max-w-sm shadow-lg">
            {/* Total Costs */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-1 text-cyan-600">{branch.toUpperCase()}</h2>
                <p className="text-4xl font-bold">
                    <span className="text-sm">TZS</span> {numberFormat(sliderValue)}
                </p>
            </div>

            {/* Slider */}
            <div className="flex flex-col mb-6">
                <input
                    type="range"
                    min="0"
                    max={totalBalance}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>0.00 TZS</span>
                    <span>{totalBalance > 0 ? numberFormat(totalBalance): totalBalance?.toLocaleString()} TZS</span>
                </div>
            </div>

            {/* Project Description */}
            <p className="text-sm text-gray-400 mb-4">
                A breakdown of account balances associated with this branch.
            </p>

            {/* Talents Costs */}
            <div className="bg-gray-700 rounded-md p-4">
                <h3 className="text-sm font-semibold mb-2">Account balances</h3>
                <ul>
                    {accounts.map((account) => (
                        <li
                            key={account.payment_method?.name}
                            className="flex justify-between items-center mb-2 last:mb-0"
                        >
                            <div className="flex items-center">
                                <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
                                    {account.payment_method.name[0]}
                                </span>
                                <span>{account.payment_method?.name}</span>
                            </div>
                            <span> {account.amount > 0 ? numberFormat(account.amount): account.amount?.toLocaleString()}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* View All Costs */}
            <div className="text-center mt-4">
                <Link
                    href="#"
                    className="text-green-400 text-sm font-medium hover:underline"
                >
                    View all transactions &rarr;
                </Link>
            </div>
        </div>
    );
};

export default CostBreakdownCard;
