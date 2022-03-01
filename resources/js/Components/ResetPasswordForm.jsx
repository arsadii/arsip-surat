import { Dialog, Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";

export default function ResetPasswordForm({ showDialog, setShowDialog }) {
    const [password, setPassword] = useState({
        old_password: "",
        new_password: "",
        new_password_confirmation: "",
    });
    const [errorMessages, setErrorMessages] = useState();

    function closeModal() {
        setShowDialog(false);
    }

    function openModal() {
        setShowDialog(true);
    }

    const submitPassword = (e) => {
        e.preventDefault();
        Inertia.post("/password/update", password, {
            onError: (error) => {
                setErrorMessages(error);
                error.password && toast.error(error.password);
            },
            onSuccess: () => {
                toast.success("Password berhasil diubah!");
                setShowDialog(false);
            },
        });
    };

    return (
        <>
            <Transition appear show={showDialog} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Ubah Password
                                </Dialog.Title>
                                <form onSubmit={submitPassword}>
                                    <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label
                                                htmlFor="old_password"
                                                className="block text-sm font-medium leading-5 text-gray-700"
                                            >
                                                Password Lama
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <input
                                                    id="old_password"
                                                    type="password"
                                                    required
                                                    className="form-input rounded-lg block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    onChange={(e) => {
                                                        setPassword({
                                                            ...password,
                                                            old_password:
                                                                e.target.value,
                                                        });
                                                    }}
                                                    value={
                                                        password.old_password
                                                    }
                                                />
                                                {errorMessages?.old_password && (
                                                    <p className="text-red-400 text-xs italic mt-2">
                                                        {
                                                            errorMessages.old_password
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium leading-5 text-gray-700"
                                            >
                                                Password Baru
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    required
                                                    className="form-input rounded-lg block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    onChange={(e) => {
                                                        setPassword({
                                                            ...password,
                                                            new_password:
                                                                e.target.value,
                                                        });
                                                    }}
                                                    value={
                                                        password.new_password
                                                    }
                                                />
                                                {errorMessages?.new_password && (
                                                    <p className="text-red-400 text-xs italic mt-2">
                                                        {
                                                            errorMessages.new_password
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium leading-5 text-gray-700"
                                            >
                                                Konfirmasi Password Baru
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    required
                                                    className="form-input rounded-lg block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    onChange={(e) => {
                                                        setPassword({
                                                            ...password,
                                                            new_password_confirmation:
                                                                e.target.value,
                                                        });
                                                    }}
                                                    value={
                                                        password.new_password_confirmation
                                                    }
                                                />
                                                {errorMessages?.new_password_confirmation && (
                                                    <p className="text-red-400 text-xs italic mt-2">
                                                        {
                                                            errorMessages.new_password_confirmation
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        >
                                            Ubah Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
