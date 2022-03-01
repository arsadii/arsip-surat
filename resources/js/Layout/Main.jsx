import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Main({ title, children }) {
    return (
        <div className="bg-gradient-to-b from-white to-gray-100 text-gray-700 overflow-hidden">
            <Head title={`${title} | Arsip BPKAD`} />

            <div className="w-screen h-screen overflow-y-auto">{children}</div>
        </div>
    );
}
