import { ProfitChart } from "@/components/dashboard/charts/ProfitChart";
import {
    chartData,
    SalesChart,
} from "@/components/dashboard/charts/SalesChart";
import { SalesExpenses } from "@/components/dashboard/charts/SalesExpenses";
import MetricsList from "@/components/dashboard/MetricsList";
import { DateRangePicker } from "@/components/DatePicker";
import { ChartSkeleton } from "@/components/skeletons/ChartSkeleton";
import StatsCardSkeleton from "@/components/skeletons/StatsCartSkeleton";
import Spinner from "@/components/Spinner";
import { StatsCardProps } from "@/components/StatsCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head } from "@inertiajs/react";

export default function Dashboard({
    statsData,
    monthlySales,
    monthlyProfit,
    startDate,
    endDate,
}: {
    statsData: StatsCardProps[];
    monthlySales: chartData[];
    monthlyProfit: chartData[];
    startDate: string;
    endDate: string;
}) {
    return (
        <AuthenticatedLayout header={<h2 className="page-head">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="px-4 ">
                <DateRangePicker from={startDate} to={endDate} url="/dashboard" />
            </div>
            <div className="py-6 space-y-6 px-4">
                <Deferred
                    data={"statsData"}
                    fallback={<StatsCardSkeleton columns={4} />}
                >
                    <MetricsList statsData={statsData} />
                </Deferred>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Deferred
                        data={"monthlySales"}
                        fallback={<ChartSkeleton />}
                    >
                        <SalesChart chartData={monthlySales} />
                    </Deferred>

                    <Deferred
                        data={"monthlyProfit"}
                        fallback={<ChartSkeleton />}
                    >
                        <ProfitChart chartData={monthlyProfit} />
                    </Deferred>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
