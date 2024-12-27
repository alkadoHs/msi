import ErrorBadge from "@/components/badges/ErrorBadge";
import SuccessBadge from "@/components/badges/success-badge";
import { Transaction } from "@/lib/interfaces";
import { dateTimeFormat, numberFormat } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "created_at",
        header: "Date",
        cell: ({ row }) => {
            return (
                <span className="text-muted-foreground text-sm">
                    {dateTimeFormat(row.original.created_at)}
                </span>
            );
        },
    },
    {
        accessorKey: "user.name",
        header: "User",
        cell: ({ row }) => {
            return (
                <span className="text-sm">
                    {row.original.user?.name}
                </span>
            );
        },
    },
    {
        accessorKey: "type",
        header: "Status",
        cell: ({ row }) => {
            const transaction = row.original;
            if (transaction.type === "deposit") {
                return <SuccessBadge label={transaction.type} />;
            } else {
                return <ErrorBadge label={transaction.type} />;
            }
        },
    },
    {
        accessorKey: "branch.name",
        header: "Branch",
        cell: ({ row }) => {
            return (
                <span className="text-sm">
                    {row.original.account?.branch?.name}
                </span>
            );
        },
    },
    {
        accessorKey: "account.name",
        header: "Account",
        cell: ({ row }) => {
            return <span>{row.original.account?.payment_method?.name}</span>;
        },
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const transaction = row.original;
            if (transaction.type === "deposit")
                return (
                    <span className="text-green-600">
                        + {numberFormat(row.original.amount)}
                    </span>
                );
            else
                return (
                    <span className="text-rose-500">
                        - {numberFormat(row.original.amount)}
                    </span>
                );
        },
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            return <span className="text-sm">{row.original.description}</span>;
        },
    },

    {
        accessorKey: "balance",
        header: "A.Balance",
        cell: ({ row }) => {
            return <span>{numberFormat(row.original.balance)}</span>;
        },
    },
];
