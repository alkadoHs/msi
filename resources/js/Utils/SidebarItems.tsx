import SidebarItem from "@/components/sidebar-item";
import { Link, usePage } from "@inertiajs/react";
import {
    AlignCenterHorizontal,
    ChartBarDecreasing,
    GitBranchPlus,
    LayoutList,
    NotebookText,
    ShoppingBag,
    ShoppingCart,
    SquareUserRound,
    Users,
    WalletMinimal,
} from "lucide-react";

const SidebarItems = () => {
    const user = usePage().props.auth.user;

    return (
        <div>
            <div className="px-6">
                <a
                    className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                    href="#"
                    aria-label="Brand"
                >
                    {user?.branch?.name}
                </a>
            </div>
            <nav
                className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open
            >
                <ul className="space-y-1">
                    <li>
                        <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white"
                            href={route("dashboard")}
                        >
                            <svg
                                className="size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Dashboard
                        </Link>
                    </li>

                    <SidebarItem
                        label="Accounts"
                        icon={<WalletMinimal className="size-4" />}
                        href={route("accounts.index")}
                    />

                    <SidebarItem
                        label="Branches"
                        icon={<GitBranchPlus className="size-4" />}
                        href={route("branches.index")}
                    />

                    <SidebarItem
                        label="Payment Methods"
                        icon={<ChartBarDecreasing className="size-4" />}
                        href={route("paymentMethods.index")}
                    />
                    <SidebarItem
                        label="Users"
                        icon={<Users className="size-4" />}
                        href={route("users.index")}
                    />

                    <SidebarItem
                        label="Products"
                        href={route("products.index")}
                        icon={<ShoppingCart className="size-4" />}
                    />
                    <SidebarItem
                        label="Point of sale"
                        href={route("pos.index")}
                        icon={<ShoppingBag className="size-4" />}
                    />

                    <SidebarItem
                        label="All Orders"
                        href={route("orders.index")}
                        icon={<AlignCenterHorizontal className="size-4" />}
                    />

                    <SidebarItem
                        label="Pending Orders"
                        href={route("orders.pendingOrders")}
                        icon={<NotebookText className="size-4" />}
                    />

                    <SidebarItem
                        label="Credit Orders"
                        href={route("orders.creditOrders")}
                        icon={<AlignCenterHorizontal className="size-4" />}
                    />

                    <SidebarItem
                        label="Expenses"
                        href={route("expenses.index")}
                        icon={<LayoutList className="size-4" />}
                    />

                    <SidebarItem
                        label="Suppliers"
                        href={route("suppliers.index")}
                        icon={<SquareUserRound className="size-4" />}
                    />
                    
                    {/* purchases */}
                    <SidebarItem
                        label="Purchases"
                        href={route("purchases.index")}
                        icon={<ShoppingCart className="size-4" />}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default SidebarItems;
