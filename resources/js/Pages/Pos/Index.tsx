import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head } from "@inertiajs/react";
import React from "react";
import CreateCart from "./actions/create-cart";
import { PaymentMethod, Product } from "@/lib/interfaces";
import Spinner from "@/components/Spinner";

export default function Index({
    products,
    paymentMethods,
    orderDate,
    invoice_no,
}: {
    products: Product[];
    paymentMethods: PaymentMethod[];
    orderDate: string;
    invoice_no: string;
}) {
    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Point of sale
                </h2>
            }
        >
            <Head title="Point of sale" />

            <section className="p-4 sm:px-6 lg:px-8">
                <Deferred
                    data={["products", "paymentMethods", 'invoice_no']}
                    fallback={<Spinner />}
                >
                    <CreateCart
                        products={products}
                        paymentMethods={paymentMethods}
                        orderDate={orderDate}
                        invoiceNo={invoice_no}
                    />
                </Deferred>
            </section>
        </Authenticated>
    );
}
