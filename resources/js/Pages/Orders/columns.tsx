import DangerBadge from "@/components/badges/danger-badge";
import ErrorBadge from "@/components/badges/ErrorBadge";
import SuccessBadge from "@/components/badges/success-badge";
import { Order } from "@/lib/interfaces";
import { dateFormatFilter, numberFormat } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

export const orderColumns: ColumnDef<Order>[] = [
    {
        accessorKey: "invoice_no",
        header: "Invoice No",
        cell: ({ row }) => (
            <Link
                href={route("pos.invoice", row.original.id)}
                className="text-cyan-500 hover:underline hover:underline-offset-4 hover:text-cyan-400"
            >
                #{row.getValue("invoice_no")}
            </Link>
        ),
    },
    {
        accessorKey: "customer_name",
        header: "Customer",
        cell: ({ row }) => (
            <div className="font-medium">{row.original.customer?.name}</div>
        ),
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const order = row.original;
            if (order.status === 'pending') {
                return (
                    <DangerBadge label={order.status} />
                );
            } else if (order.status === 'paid') {
                return (
                    <SuccessBadge label={order.status} />
                );
            } else {
                return (
                    <ErrorBadge label={order.status} />
                );
            }
        }
    },

    //user
    {
        accessorKey:  "user.name",
        header: "Seller",
        cell: ({ row }) => (
            <div className="text-muted-foreground text-sm">{row.original.user?.name}</div>
        )
    },

    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => (
            <div className="">
                {numberFormat(row.original.order_items_sum_total)}
            </div>
        ),
    },
    {
        accessorKey: "payment_method",
        header: "Account",
        cell: ({ row }) => (
            <div className="text-muted-foreground">
                {row.original.payment_method?.name}
            </div>
        )
    },
    // order date
    {
        accessorKey: "order_date",
        header: "Order Date",
        cell: ({ row }) => (
            <div className="text-muted-foreground">
                {dateFormatFilter(row.original.order_date)}
            </div>
        ),
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const order = row.original;
            return (
                <div className="flex gap-x-2">
                    actions
                    {/* <PayCreditOrder order={row.original} /> */}
                </div>);
        }
    }
];
