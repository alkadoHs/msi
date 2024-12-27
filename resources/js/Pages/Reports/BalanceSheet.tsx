import { DataTable } from "@/components/data-table";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head } from "@inertiajs/react";
import TableWrapper from "@/components/table-wrapper";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { Account } from "@/lib/interfaces";
import { balanceSheetColumns } from "./columns/balance-sheet-columns";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const BalanceSheetPage = ({ accounts }: { accounts: Account[] }) => {
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
                        <DataTable
                            columns={balanceSheetColumns}
                            data={accounts}
                        />
                    </Deferred>
                </TableWrapper>
            </section>
        </Authenticated>
    );
};

export default BalanceSheetPage;
