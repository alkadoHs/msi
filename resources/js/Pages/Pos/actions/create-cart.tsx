import { FormEventHandler, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { numberFormat } from "@/lib/utils";
import { Product } from "@/lib/interfaces";
import FormRepeater from "@/components/ui/form-repeater";
import KdSelectInput from "@/components/form/kd-select-input";
import KdNumericInput from "@/components/form/kd-numeric-input";

interface Item {
    product_id?: number;
    qty: number;
    buy_price: number;
    sell_price: number;
}

const initialItem: Item = {
    product_id: undefined,
    qty: 1,
    buy_price: 0,
    sell_price: 0,
};

const CreateCart = ({ products }: { products: Product[] }) => {
    const [items, setItems] = useState<Item[]>([initialItem]);

    const { data, setData, errors, post, processing, reset } = useForm({
        supplier_id: "",
        branch_id: "",
        payment_method_id: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            route("products.store"),
            {
                supplier_id: data.supplier_id,
                branch_id: data.branch_id,
                payment_method_id: data.payment_method_id,
                items: items as any,
            },
            {
                onSuccess: () => {
                    toast.success("Purchase order CreateCartd successfully");
                    reset();
                    setItems([initialItem]);
                },
                onError: () => {
                    toast.error("Something went wrong");
                },
            }
        );
    };

    return (
        <>

            <section className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/*  */}

                    <div className="">
                        <div>
                            <div className="space-y-4">
                                <h1 className="text-xl font-semibold mb-4">
                                    Add Items
                                </h1>
                                <FormRepeater<Item>
                                    initialValues={initialItem}
                                    onChange={(updatedItems) =>
                                        setItems(updatedItems)
                                    } // Update the state
                                    renderFields={(
                                        item,
                                        index,
                                        handleChange
                                    ) => (
                                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                                            <div>
                                                <KdSelectInput
                                                    label="Product"
                                                    id={index}
                                                    data={products}
                                                    value={item.product_id?.toString()}
                                                    onChange={(e) => {
                                                        const selectedProduct =
                                                            products.find(
                                                                (product) =>
                                                                    product.id.toString() ===
                                                                    e.target
                                                                        .value
                                                            );
                                                        if (selectedProduct) {
                                                            handleChange(
                                                                index,
                                                                undefined,
                                                                {
                                                                    product_id:
                                                                        selectedProduct.id,
                                                                    buy_price:
                                                                        selectedProduct.buy_price,
                                                                    sell_price:
                                                                        selectedProduct.sell_price,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-full">
                                                    <KdNumericInput
                                                        label="Qty"
                                                        id={index}
                                                        value={item.qty.toString()}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                index,
                                                                "qty",
                                                                e.target
                                                                    .value as any
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <KdNumericInput
                                                        label="Price"
                                                        id={index}
                                                        value={item.sell_price.toString()}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                index,
                                                                "sell_price",
                                                                e.target
                                                                    .value as any
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center gap-2 pt-4">
                            <h2>
                                Total:{" "}
                                {numberFormat(
                                    items.reduce(
                                        (acc, item) =>
                                            acc + item.buy_price * item.qty,
                                        0
                                    )
                                )}
                            </h2>
                            <div className="flex items-center gap-2">
                                <Button variant={"outline"} asChild>
                                    <Link href={route("products.index")}>
                                        Cancel
                                    </Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? "Saving..." : "CreateCart"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default CreateCart;
