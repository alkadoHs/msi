import CostBreakdownCard from "@/components/AccountCard";
import AccountSkeleton from "@/components/skeletons/AccountSkeleton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Branch } from "@/types";
import { Deferred, Head } from "@inertiajs/react";

export default function Index({ accounts, totalBalance }: { accounts: Branch[], totalBalance: number }) {
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Accounts
                </h2>
            }
        >
            <Head title="Accounts" />

            <section className="">
                <Deferred data={"accounts"} fallback={<AccountSkeleton loops={6} />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {accounts?.map((account) => (
                            <CostBreakdownCard
                                key={account.id}
                                branch={account?.name}
                                total={account.accounts_sum_amount}
                                accounts={account.accounts}
                                totalBalance={totalBalance}
                            />
                        ))}
                    </div>
                </Deferred>
            </section>
        </Authenticated>
    );
}
