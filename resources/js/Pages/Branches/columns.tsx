import { Branch } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import UpdateBranchAction from "./actions/update-branch";

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
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return <UpdateBranchAction branch={row.original} />;
        },
    },
];
