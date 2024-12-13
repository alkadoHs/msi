import { Branch } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import UpdateBranchAction from "./actions/update-branch";
import dayjs from "dayjs";

export const branchColumns: ColumnDef<Branch>[] = [
    {
        accessorKey: 'id',
        header: 'S/N',
        cell: ({ row }) => {
            return row.index < 10? `0${row.index+1}.`: `${row.index+1}.`
        }
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phones",
        header: "Phone numbers",
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
            return <UpdateBranchAction branch={row.original} />;
        },
    },
];
