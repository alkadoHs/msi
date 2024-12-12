import { Branch } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const branchColumns: ColumnDef<Branch>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'phones',
        header: 'Phone numbers'
    }
]