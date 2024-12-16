import FormModal from "@/components/form/form-modal";
import KdNumericInput from "@/components/form/kd-numeric-input";
import KdTextInput from "@/components/form/kd-text-input";
import { Product } from "@/lib/interfaces";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

const EditProduct = ({ product }: { product: Product }) => {
    const { data, patch, setData, processing, errors, reset } = useForm({
        ...product
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("products.update", product.id), {
            onSuccess: () => {
                toast.success("Updated successfully.");
                reset();
            },
        });
    };
    return (
        <>
            <FormModal
                onSubmit={submit}
                processing={processing}
                errors={Object.values(errors)}
                modalTitle="Create new product"
                buttonLabel=""
                id={`edit-product-modal${product.id}`}
                action="update"
            >
                <div className="p-4 overflow-y-auto scroll-bar grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <KdTextInput
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Product name"
                    />
                    <KdNumericInput
                        label="Buying price"
                        type="number"
                        value={data.buy_price.toString()}
                        onChange={(e) => setData("buy_price", e.target.value as any)}
                    />
                    <KdNumericInput
                        label="Selling price"
                        type="number"
                        value={data.sell_price.toString()}
                        onChange={(e) => setData("sell_price", e.target.value as any)}
                        placeholder=""
                    />
                    <KdNumericInput
                        label="Stock"
                        type="number"
                        value={data.stock.toString()}
                        onChange={(e) => setData("stock", e.target.value as any)}
                    />
                    <KdNumericInput
                        label="Stock alert"
                        type="number"
                        value={data.stock_alert.toString()}
                        onChange={(e) => setData("stock_alert", e.target.value as any)}
                    />
                    <KdTextInput
                        label="Expire date"
                        type="date"
                        value={data.expire_date}
                        onChange={(e) => setData("expire_date", e.target.value)}
                    />
                    <KdNumericInput
                        label="Wholesale price"
                        type="number"
                        value={data.whole_price.toString()}
                        onChange={(e) => setData("whole_price", e.target.value as any)}
                    />
                    <KdNumericInput
                        label="Wholesale stock"
                        type="number"
                        value={data.whole_stock.toString()}
                        onChange={(e) => setData("whole_stock", e.target.value as any)}
                    />
                </div>
            </FormModal>
        </>
    );
};

export default EditProduct;
