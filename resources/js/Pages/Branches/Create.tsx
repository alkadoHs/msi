import Registration from "@/Layouts/RegistrationLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function CreateCompany() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        phones: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("branches.store", { registering: true }), {
            onSuccess: () => toast.success("Your branch was created successfully"),
        });
    };

    return (
        <Registration>
            <Head title="Account Registration" />

            <div>
                <div className="max-w-4xl pt-4 rounded-xl shadow bg-white/80 dark:bg-gray-800/80 px-4 pb-10 sm:px-6 lg:px-8 mx-auto">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Branch Registration
                            </h2>
                            <p className="text-sm text-green-600">
                                Now the final step, create your first branch, you can add more branches later.
                                <span className="text-muted-foreground">(Your branch can be a shop, supermarket, store etc.)</span>
                            </p>
                        </div>

                        {Object.values(errors).length > 0 && (
                            <div
                                className="bg-red-50 border-s-4 border-red-500 p-4 mb-4 dark:bg-red-800/30"
                                role="alert"
                                tabIndex={-1}
                                aria-labelledby="hs-bordered-red-style-label"
                            >
                                <div className="flex">
                                    <div className="shrink-0">
                                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <h3
                                            id="hs-bordered-red-style-label"
                                            className="text-gray-800 font-semibold dark:text-white"
                                        >
                                            Errors!
                                        </h3>
                                        {Object.values(errors).map(
                                            (error, index) => (
                                                <p
                                                    key={index}
                                                    className="text-sm text-red-600 dark:text-red-500 before:content-['•'] before:mr-1"
                                                >
                                                    {error}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="company_name"
                                        className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                                    >
                                        Branch Name
                                    </label>
                                </div>

                                <div className="sm:col-span-9">
                                    <input
                                        id="company_name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
                                        placeholder="ABC STORE CO LTD"
                                    />
                                </div>



                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-account-phone"
                                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                                        >
                                            Phone Numbers
                                        </label>
                                        <span className="text-sm text-gray-400 dark:text-gray-600">
                                            (optional)
                                        </span>
                                    </div>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input
                                            id="af-account-phone"
                                            type="text"
                                            value={data.phones}
                                            onChange={(e) =>
                                                setData("phones", e.target.value)
                                            }
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
                                            placeholder="Branch phone numbers"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    {processing
                                        ? "Processing..."
                                        : "Complete"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Registration>
    );
}
