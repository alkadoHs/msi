import { DataTable } from "@/components/data-table";
import Pagination from "@/components/pagination";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head, Link } from "@inertiajs/react";
import { Fragment } from "react";
import { User } from "@/types";
import UserTab from "@/components/user-tab";
import {
    LandmarkIcon,
    ListCheck,
    ShoppingBasket,
    TrafficCone,
} from "lucide-react";
import { CreditCollections } from "@/lib/interfaces";
import { creditCollectionColumns } from "./columns";

const creditCollectionsPage = ({ creditCollections, user }: { creditCollections: CreditCollections; user: User }) => {
    return (
        <Authenticated
            header={
                <nav className="flex items-center gap-3 overflow-x-auto scroll-bar whitespace-nowrap">
                    <UserTab
                        href={route("users.transactions", user.id)}
                        label="Transactions"
                        icon={<TrafficCone className="size-4" />}
                    />
                    <UserTab
                        href={route("users.orders", user.id)}
                        label="Orders"
                        icon={<ShoppingBasket className="size-4" />}
                    />
                    <UserTab
                        href={route("users.expenses", user.id)}
                        label="expenses"
                        icon={<ShoppingBasket className="size-4" />}
                    />
                    <UserTab
                        href={route("users.creditCollections", user.id)}
                        label=" Credit Collections"
                        icon={<LandmarkIcon className="size-4" />}
                    />
                    <UserTab
                        href={route("users.purchases", user.id)}
                        label="Purchases"
                        icon={<ListCheck className="size-4" />}
                    />
                </nav>
            }
        >
            <Head title={`${user.name}'s Credit Collections`} />

            <section className="p-4">
                <div>
                    <Deferred
                        data={"creditCollections"}
                        fallback={<TableSkeleton columns={4} rows={10} />}
                    >
                        <Fragment>
                            <DataTable
                                columns={creditCollectionColumns}
                                data={creditCollections?.data}
                            />
                            <Pagination data={creditCollections} />
                        </Fragment>
                    </Deferred>
                </div>
            </section>
        </Authenticated>
    );
};

export default creditCollectionsPage;
