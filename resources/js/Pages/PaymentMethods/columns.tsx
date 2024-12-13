import { PaymentMethod } from "@/lib/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import EditPaymentMethodAction from "./actions/edit-payment-method";

export const paymentMethodColumns: ColumnDef<PaymentMethod>[] = [
    {
        accessorKey: "id",
        header: "#",
        cell: ({ row }) => {
            return (
                <span>
                    {row.index < 10 ? `0${row.index + 1}` : row.index + 1}
                </span>
            );
        },
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "created_at",
        header: "Created",
        cell: ({ row }) => {
            const date = dayjs(row.getValue("created_at")).fromNow();
            return <span className="text-muted-foreground">{date}</span>;
        },
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className="flex gap-x-2">
                    <EditPaymentMethodAction paymentMethod={row.original} />
                </div>
            );
        },
    },
];
