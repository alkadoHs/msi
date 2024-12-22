import { PurchaseOrder } from "@/lib/interfaces";
import { dateFormat, numberFormat } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";

export const purchaseOrdersColumns: ColumnDef<PurchaseOrder>[] = [
    {
        accessorKey: "#",
        header: "#",
        cell: ({ row }) => {
            return (
                <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
                    {row.original.id}
                </span>
            );
        },
    },
    {
        accessorKey: "created_at",
        header: "Created",
        cell: ({ row }) => {
            return (
                <span className="text-muted-foreground text-sm">
                    {dateFormat(row.original.created_at)}
                </span>
            );
        },
    },
    {
        accessorKey: "supplier",
        header: "Supplier",
        cell: ({ row }) => {
            return <span>{row.original.supplier.name}</span>;
        },
    },
    // reference
    {
        accessorKey: "reference",
        header: "Reference #",
        cell: ({ row }) => {
            return (
                <Link
                    href="#"
                    className="text-cyan-500 hover:underline hover:underline-offset-4 hover:text-cyan-400"
                >
                    {row.original.reference}
                </Link>
            );
        },
    },
    {
        accessorKey: "branch",
        header: "Branch",
        cell: ({ row }) => {
            return <span>{row.original.branch.name}</span>;
        },
    },
    {
        accessorKey: "payment_method",
        header: "Payment Method",
        cell: ({ row }) => {
            return (
                <span className="text-muted-foreground">
                    {row.original.payment_method.name}
                </span>
            );
        },
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => {
            return (
                <span>
                    {numberFormat(row.original.items_sum_total_buy_price)}
                </span>
            );
        },
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-3">
                    {/* <EditPurchaseOrder purchaseOrder={row.original} /> */}
                    {/* <DeleteAction url="purchase-orders.destroy" item={row.original} label={row.original.supplier} /> */}
                </div>
            );
        },
    },
];
