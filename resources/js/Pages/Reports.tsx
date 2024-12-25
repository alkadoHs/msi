import ReportsCard from "@/components/reports-card";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Reports() {
    return (
        <Authenticated>
            <Head title="Reports" />

            <section className="p-4">
                <h1 className="text-2xl font-bold">Reports</h1>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ReportsCard
                        link={route("reports.order-items")}
                        title="Order Items Report"
                        description="Detailed report of products sold"
                    />
                    <ReportsCard
                        link={route("reports.sales-by-product")}
                        title="Sales by product"
                        description="Sales of each product"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                    <ReportsCard
                        link="#"
                        title="Sales Report"
                        description="10 sales today"
                    />
                </div>
            </section>
        </Authenticated>
    );
}
