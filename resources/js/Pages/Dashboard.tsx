import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FileUpload from "@/fileUpload";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const filePath = usePage().props;
    console.log(filePath);
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <FileUpload />

                            <br />
                            <br />

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Column 1</TableHead>
                                        <TableHead>Column 2</TableHead>
                                        <TableHead>Column 3</TableHead>
                                        <TableHead>Column 4</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Product 1</TableCell>
                                        <TableCell>7,000</TableCell>
                                        <TableCell>7,800</TableCell>
                                        <TableCell>890,000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
