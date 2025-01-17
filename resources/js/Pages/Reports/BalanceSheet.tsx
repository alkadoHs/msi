import { DataTable } from "@/components/data-table";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head } from "@inertiajs/react";
import TableWrapper from "@/components/table-wrapper";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { Account } from "@/lib/interfaces";
import { balanceSheetColumns } from "./columns/balance-sheet-columns";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Branch } from "@/types";
import React from "react";
import { numberFormat } from "@/lib/utils";
import dayjs from "dayjs";

const BalanceSheetPage = ({ accounts }: { accounts: Branch[] }) => {
    console.log(accounts);

    return (
        <Authenticated header={<h2 className="page-head">Balance Sheet</h2>}>
            <Head title="Balance Sheet Report" />

            <section className="mt-4 mb-20">
                <div className="flex gap-4 items-center px-4 md:px-8 mb-4 justify-end">
                    <Button
                        variant={"outline"}
                        type="button"
                        title="downlad excel"
                        asChild
                    >
                        <a
                            href={route("reports.balance-sheet.export-excel")}
                            className="flex items-center gap-1"
                        >
                            <Download className="size-4" />
                            Excel
                        </a>
                    </Button>
                    <Button
                        variant={"outline"}
                        title="downlad pdf"
                        type="button"
                        asChild
                    >
                        <a
                            href={route("reports.balance-sheet.export-pdf")}
                            className="flex items-center gap-1"
                        >
                            <Printer className="size-4" />
                            PDF
                        </a>
                    </Button>
                </div>
                <TableWrapper>
                    <Deferred
                        data="accounts"
                        fallback={<TableSkeleton columns={3} rows={7} />}
                    >
                        <div className="container mx-auto p-4">
                            <table className="table-auto border-collapse border border-gray-300 w-full dark:border-gray-700">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700 dark:text-white">
                                            Branch Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700 dark:text-white">
                                            Account Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700 dark:text-white">
                                            Balance
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700 dark:text-white">
                                            Last Used
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts?.map((branch, branchIndex) => (
                                        <React.Fragment key={branchIndex}>
                                            <tr className="bg-gray-100 dark:bg-gray-800">
                                                <td
                                                    className="border border-gray-300 px-4 py-2 dark:border-gray-700 dark:text-white"
                                                    rowSpan={
                                                        branch.accounts.length
                                                    }
                                                >
                                                    {branch.name}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 dark:border-gray-700 dark:text-white">
                                                    {
                                                        branch.accounts[0]
                                                            .payment_method.name
                                                    }
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700 dark:text-white">
                                                    {numberFormat(branch.accounts[0].amount)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 dark:border-gray-700 dark:text-white">
                                                    {
                                                        dayjs(branch.accounts[0]
                                                            .updated_at).fromNow()
                                                    }
                                                </td>
                                            </tr>
                                            {branch.accounts
                                                .slice(1)
                                                .map(
                                                    (account, accountIndex) => (
                                                        <tr
                                                            key={accountIndex}
                                                            className="dark:bg-gray-900"
                                                        >
                                                            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700 dark:text-white">
                                                                {
                                                                    account
                                                                        .payment_method
                                                                        .name
                                                                }
                                                            </td>
                                                            <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700 dark:text-white">
                                                                {numberFormat(account.amount)}
                                                            </td>
                                                            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700 dark:text-white">
                                                                {
                                                                    dayjs(account.updated_at).fromNow()
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Deferred>
                </TableWrapper>
            </section>
        </Authenticated>
    );
};

export default BalanceSheetPage;
