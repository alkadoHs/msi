import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import NavigationBar from "@/Utils/NavigationBar";
import SidebarItems from "@/Utils/SidebarItems";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="flex overflow-hidden">
            <aside className="min-w-[250px] w-[280px] bg-white/80 h-dvh sticky top-0 shadow dark:bg-gray-800 hidden md:block">
                <SidebarItems />
            </aside>
            <div className="overflow-auto w-full h-dvh scroll-bar bg-gray-100 dark:bg-gray-900">
                <NavigationBar />
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800 sticky top-16 z-30">
                        <div className="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <main>{children}</main>
            </div>
        </div>
    );
}
