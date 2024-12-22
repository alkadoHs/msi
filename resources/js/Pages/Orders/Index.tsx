import { DataTable } from "@/components/data-table";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import TableWrapper from "@/components/table-wrapper";
import TableTopHeader from "@/components/TableTopHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Orders } from "@/lib/interfaces";
import { Deferred, Head } from "@inertiajs/react";
import Pagination from "@/components/pagination";
import { orderColumns } from "./columns";

export default function Index({ orders }: { orders: Orders }) {
    return (
        <Authenticated
            header={
                <nav
                        className="relative w-full z-0 flex border rounded-xl overflow-hidden dark:border-gray-700"
                        aria-label="Tabs"
                        role="tablist"
                        aria-orientation="horizontal"
                    >
                        <button
                            type="button"
                            className="hs-tab-active:border-b-cyan-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-cyan-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-2 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-cyan-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
                            id="bar-with-underline-item-1"
                            aria-selected="true"
                            data-hs-tab="#bar-with-underline-1"
                            aria-controls="bar-with-underline-1"
                            role="tab"
                        >
                            All Orders
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:border-b-cyan-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-cyan-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-2 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-cyan-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                            id="bar-with-underline-item-2"
                            aria-selected="false"
                            data-hs-tab="#bar-with-underline-2"
                            aria-controls="bar-with-underline-2"
                            role="tab"
                        >
                            Pending
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:border-b-cyan-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-cyan-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-2 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-cyan-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                            id="bar-with-underline-item-3"
                            aria-selected="false"
                            data-hs-tab="#bar-with-underline-3"
                            aria-controls="bar-with-underline-3"
                            role="tab"
                        >
                            Credits
                        </button>
                    </nav>
            }
        >
            <Head title="Credit Orders" />

            <section className="space-y-4 mb-8 mt-4">
                <TableWrapper>
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Orders
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                These orders are specific to the branch you're
                                currently in.
                            </p>
                        </div>
                        <div>
                            <div className="inline-flex gap-x-2">
                                {/* <CreateProduct /> */}
                            </div>
                        </div>
                    </div>
                    <TableTopHeader url={route("orders.index")} />
                    <Deferred
                        data={["orders"]}
                        fallback={<TableSkeleton columns={5} rows={8} />}
                    >
                        <>
                            <DataTable
                                columns={orderColumns}
                                data={orders?.data}
                            />
                            <Pagination data={orders} />
                        </>
                    </Deferred>
                </TableWrapper>
            </section>
        </Authenticated>
    );
}
