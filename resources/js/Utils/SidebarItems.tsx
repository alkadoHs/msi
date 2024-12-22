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

                    {/* <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hs-accordion-active:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                            aria-expanded="true"
                            aria-controls="users-accordion"
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Users
                            <svg
                                className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            id="users-accordion"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            role="region"
                            aria-labelledby="users-accordion"
                        >
                            <ul
                                className="hs-accordion-group ps-3 pt-2"
                                data-hs-accordion-always-open
                            >
                                <li
                                    className="hs-accordion"
                                    id="users-accordion-sub-1"
                                >
                                    <button
                                        type="button"
                                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hs-accordion-active:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                                        aria-expanded="true"
                                        aria-controls="users-accordion-sub-1"
                                    >
                                        Sub Menu 1
                                        <svg
                                            className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <div
                                        id="users-accordion-sub-1"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                        role="region"
                                        aria-labelledby="users-accordion-sub-1"
                                    >
                                        <ul className="pt-2 ps-2">
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    className="hs-accordion"
                                    id="users-accordion-sub-2"
                                >
                                    <button
                                        type="button"
                                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hs-accordion-active:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                                        aria-expanded="true"
                                        aria-controls="users-accordion-sub-2"
                                    >
                                        Sub Menu 2
                                        <svg
                                            className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <div
                                        id="users-accordion-sub-2"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                        role="region"
                                        aria-labelledby="users-accordion-sub-2"
                                    >
                                        <ul className="pt-2 ps-2">
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                                    href="#"
                                                >
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li> */}

                    {/* <li className="hs-accordion" id="account-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hs-accordion-active:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                            aria-expanded="true"
                            aria-controls="account-accordion"
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
                                <circle cx="18" cy="15" r="3" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                <path d="m21.7 16.4-.9-.3" />
                                <path d="m15.2 13.9-.9-.3" />
                                <path d="m16.6 18.7.3-.9" />
                                <path d="m19.1 12.2.3-.9" />
                                <path d="m19.6 18.7-.4-1" />
                                <path d="m16.8 12.3-.4-1" />
                                <path d="m14.3 16.6 1-.4" />
                                <path d="m20.7 13.8 1-.4" />
                            </svg>
                            Accounts
                            <svg
                                className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            id="account-accordion"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            role="region"
                            aria-labelledby="account-accordion"
                        >
                            <ul className="pt-2 ps-2">
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="hs-accordion" id="projects-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hs-accordion-active:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                            aria-expanded="true"
                            aria-controls="projects-accordion"
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
                                <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                                <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                                <path d="M15 2v5h5" />
                            </svg>
                            Projects
                            <svg
                                className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            id="projects-accordion"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            role="region"
                            aria-labelledby="projects-accordion"
                        >
                            <ul className="pt-2 ps-2">
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
                                        href="#"
                                    >
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li> */}

                    <li>
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                            href="#"
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
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            Documentation
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarItems;
