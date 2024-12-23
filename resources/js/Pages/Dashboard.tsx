import StatsCardSkeleton from "@/components/skeletons/StatsCartSkeleton";
import StatsCard, { StatsCardProps } from "@/components/StatsCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head } from "@inertiajs/react";
import { Globe, Link, Store, Tag } from "lucide-react";

const cards = [
    {
        title: "Sales",
        amount: "70,820,000",
        net: "5k net",
        icon: <Store className="text-gray-500" />,
        isPositive: true,
    },
    {
        title: "Profit",
        amount: "985,937",
        net: "21k net",
        icon: <Globe className="text-gray-500" />,
        isPositive: true,
    },
    {
        title: "Expenses",
        amount: "15,503,000",
        net: "6k net",
        icon: <Tag className="text-gray-500" />,
        isPositive: true,
    },
    {
        title: "Credit payments",
        amount: "30,982,000",
        net: "2.4 net",
        icon: <Link className="text-gray-500" />,
        isPositive: false,
    },
];

export default function Dashboard({
    statsData,
}: {
    statsData: StatsCardProps[];
}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6 px-4">
                {/* <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"></div>
                </div> */}
                <Deferred
                    data={"statsData"}
                    fallback={<StatsCardSkeleton columns={4} />}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {statsData?.map((card, index) => (
                            <StatsCard key={index} {...card} />
                        ))}
                    </div>
                </Deferred>
            </div>
        </AuthenticatedLayout>
    );
}
