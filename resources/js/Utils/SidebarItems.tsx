import SidebarItem from "@/components/sidebar-item";
import { Link, usePage } from "@inertiajs/react";
import {
    AlignCenterHorizontal,
    ChartBarDecreasing,
    GitBranchPlus,
    LayoutList,
    NotebookText,
    PieChart,
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
                    <SidebarItem
                      label="Dashboard"
                      icon={<PieChart className="size-4" />}
                      href={route("dashboard")}
                      />

                      
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

                    <SidebarItem
                        label="Reports"
                        href={route("reports")}
                        icon={<PieChart className="size-4" />}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default SidebarItems;
