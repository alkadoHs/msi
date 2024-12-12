import TableSkeleton from "@/components/skeletons/TableSkeleton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Users } from "@/lib/interfaces";
import { Deferred, Head, Link } from "@inertiajs/react";
import dayjs from "dayjs";
import CreateUser from "./actions/create-user";
import { Branch } from "@/types";
import DangerBadge from "@/components/badges/danger-badge";
import SuccessBadge from "@/components/badges/success-badge";

const Index = ({ users, branches }: { users: Users; branches: Branch[] }) => {
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    System users
                </h2>
            }
        >
            <Head title="Company users" />

            <section>
                {/* <!-- Table Section --> */}
                <div className="px-4 pb-10 pt-4  sm:px-6 lg:px-8 lg:pb-14 mx-auto">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col">
                        <div className="-m-1.5 max-w-full overflow-hidden">
                            <div className="p-1.5">
                                <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm  dark:bg-gray-800 dark:border-gray-700">
                                    {/* <!-- Header --> */}
                                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Users
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Add users, edit and more.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="inline-flex gap-x-2">
                                                <a
                                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                                                    href="#"
                                                >
                                                    View all
                                                </a>

                                                <CreateUser
                                                    branches={branches}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Header --> */}

                                    {/* <!-- Table --> */}
                                    <div className="w-full overflow-auto scroll-bar">
                                        <Deferred
                                            data={"users"}
                                            fallback={<TableSkeleton />}
                                        >
                                            <>
                                                <table className="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="ps-6 py-3 text-start"
                                                            >
                                                                <label
                                                                    htmlFor="hs-at-with-checkboxes-main"
                                                                    className="flex"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        className="shrink-0 border-gray-300 rounded text-cyan-600 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-600 dark:checked:bg-cyan-500 dark:checked:border-cyan-500 dark:focus:ring-offset-gray-800"
                                                                        id="hs-at-with-checkboxes-main"
                                                                    />
                                                                    <span className="sr-only">
                                                                        Checkbox
                                                                    </span>
                                                                </label>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Name
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start"
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Position
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start"
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Status
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start"
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Branch
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="py-3 text-start"
                                                            >
                                                                <div className="">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Gender
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start"
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                        Created
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-end"
                                                            ></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                        {users?.data?.map(
                                                            (user) => (
                                                                <tr
                                                                    key={
                                                                        user.name
                                                                    }
                                                                >
                                                                    <td className="size-px whitespace-nowrap">
                                                                        <div className="ps-6 py-3">
                                                                            <label
                                                                                htmlFor="hs-at-with-checkboxes-1"
                                                                                className="flex"
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="shrink-0 border-gray-300 rounded text-cyan-600 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-600 dark:checked:bg-cyan-500 dark:checked:border-cyan-500 dark:focus:ring-offset-gray-800"
                                                                                    id="hs-at-with-checkboxes-1"
                                                                                />
                                                                                <span className="sr-only">
                                                                                    Checkbox
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td className="size-px whitespace-nowrap">
                                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                                            <div className="flex items-center gap-x-3">
                                                                                <img
                                                                                    className="inline-block size-[38px] rounded-full"
                                                                                    src={
                                                                                        user.avatar ??
                                                                                        "/images/avatar_placeholder.jpg"
                                                                                    }
                                                                                    alt="Avatar"
                                                                                />
                                                                                <div className="grow">
                                                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                                        {
                                                                                            user.name
                                                                                        }
                                                                                    </span>
                                                                                    <span className="block text-sm text-gray-500 dark:text-gray-500">
                                                                                        {
                                                                                            user.email
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="h-px w-72 whitespace-nowrap">
                                                                        <div className="px-6 py-3">
                                                                            <span className="block text-sm text-gray-800 dark:text-gray-200">
                                                                                {
                                                                                    user.role
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </td>

                                                                    <td className="size-px whitespace-nowrap">
                                                                        <div className="px-6 py-3">
                                                                            {user.isActive ? (
                                                                                <SuccessBadge label="Active" />
                                                                            ) : (
                                                                                <DangerBadge label="Blocked" />
                                                                            )}
                                                                        </div>
                                                                    </td>
                                                                    <td className="h-px w-72 whitespace-nowrap">
                                                                        <div className="px-6 py-3">
                                                                            <span className="block text-sm text-gray-800 dark:text-gray-200">
                                                                                {
                                                                                    user
                                                                                        .branch
                                                                                        ?.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="size-px whitespace-nowrap">
                                                                        {user.gender}
                                                                    </td>
                                                                    <td className="size-px whitespace-nowrap">
                                                                        <div className="px-6 py-3">
                                                                            <span className="text-sm text-gray-500 dark:text-gray-500">
                                                                                {dayjs(
                                                                                    user.created_at
                                                                                ).fromNow()}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="size-px whitespace-nowrap">
                                                                        <div className="px-6 py-1.5">
                                                                            <a
                                                                                className="inline-flex items-center gap-x-1 text-sm text-cyan-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-cyan-500"
                                                                                href="#"
                                                                            >
                                                                                Edit
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                                {/* <!-- End Table --> */}
                                                <div className="px-6 py-4 gap-3 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
                                                    <div>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                                                {users?.total}
                                                            </span>{" "}
                                                            results
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="inline-flex gap-x-2">
                                                            <Link
                                                                href={
                                                                    users?.prev_page_url
                                                                }
                                                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                                                            >
                                                                <svg
                                                                    className="shrink-0 size-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="m15 18-6-6 6-6" />
                                                                </svg>
                                                                Prev
                                                            </Link>
                                                            <Link
                                                                href={
                                                                    users?.next_page_url
                                                                }
                                                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                                                            >
                                                                Next
                                                                <svg
                                                                    className="shrink-0 size-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="m9 18 6-6-6-6" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        </Deferred>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Table Section --> */}
            </section>
        </Authenticated>
    );
};

export default Index;
