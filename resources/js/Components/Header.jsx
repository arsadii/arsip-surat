import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import ResetPasswordForm from "./ResetPasswordForm";

export default function Header({ user }) {
    const [dropDown, setDropDown] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className="flex w-full justify-between h-20 bg-white shadow-xl p-3 items-center">
            <ResetPasswordForm
                showDialog={showDialog}
                setShowDialog={setShowDialog}
            />
            <h1 class="text-3xl font-bold">Arsip BPKAD</h1>
            <div className="flex space-x-3 items-center">
                <div className="flex px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 relative">
                    {dropDown && (
                        <div className="bg-white w-[150px] flex justify-center text-red-400 hover:text-red-500 cursor-pointer transition-all duration-200 rounded-lg absolute top-0 right-0 translate-y-12 p-3 shadow-xl">
                            <span
                                onClick={() => setShowDialog(true)}
                                className="p-1 rounded hover:bg-red-50"
                            >
                                Ubah Password
                            </span>
                        </div>
                    )}

                    <span
                        className="cursor-pointer"
                        onClick={() => setDropDown(!dropDown)}
                    >
                        {user.name}
                    </span>
                </div>
                <Link href="/logout">
                    <a title="Keluar" className="text-red-400">
                        <FiIcons.FiLogOut size={24} />
                    </a>
                </Link>
            </div>
        </div>
    );
}
