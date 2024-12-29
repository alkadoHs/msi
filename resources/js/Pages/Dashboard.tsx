import { ProfitChart } from "@/components/dashboard/charts/ProfitChart";
import {
    chartData,
    SalesChart,
} from "@/components/dashboard/charts/SalesChart";
import { SalesExpenses } from "@/components/dashboard/charts/SalesExpenses";
import MetricsList from "@/components/dashboard/MetricsList";
import GoalConversionTable from "@/components/DataCard";
import { DateRangePicker } from "@/components/DatePicker";
import SigleColumnDataCard from "@/components/signgle-column-data-card";
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
    const data = [
        { goal: "preline.co", unique: "39,8k", total: "329,3k", cr: "19,8%" },
        {
            goal: "preline.co/examples",
            unique: "27k",
            total: "56,2k",
            cr: "48,2%",
        },
        {
            goal: "preline.co/plugins",
            unique: "77,8k",
            total: "13,0k",
            cr: "5,5%",
        },
        { goal: "preline.co/docs", unique: "56,9k", total: "35,97k", cr: "5%" },
        { goal: "preline.co/figma", unique: "8,9k", total: "3,1k", cr: "4%" },
        {
            goal: "preline.co/examples/hero",
            unique: "2k",
            total: "2,2k",
            cr: "76,4%",
        },
        {
            goal: "preline.co/examples/ai-tables",
            unique: "2,1k",
            total: "22,1k",
            cr: "34,1%",
        },
        { goal: "Others", unique: "1,4k", total: "4k", cr: "5,1%" },
    ];

    const data1 = [
        { country: "United States", percentage: "39,8%" },
        { country: "India", percentage: "27,1%" },
        { country: "Canada", percentage: "13,5%" },
        { country: "China", percentage: "5,9%" },
        { country: "United Kingdom", percentage: "5,1%" },
        { country: "Brasil", percentage: "5%" },
        { country: "Indonesia", percentage: "2,1%" },
        { country: "Others", percentage: "1,4%" },
    ];
    return (
        <AuthenticatedLayout header={<h2 className="page-head">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="px-4 ">
                <DateRangePicker
                    from={startDate}
                    to={endDate}
                    url="/dashboard"
                />
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

                    <GoalConversionTable data={data} />

                    <SigleColumnDataCard data={data1} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
