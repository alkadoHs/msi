import React, { ReactNode } from "react";

const TableWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mx-auto max-w-full px-3 sm:px-4 lg:px-6">
            <div className="w-full  border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm  p-0 text-gray-900 dark:text-gray-100 sm:rounded-lg dark:bg-gray-800 dark:border-gray-700">
                {children}
            </div>
        </div>
    );
};

export default TableWrapper;
