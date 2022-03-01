import React from "react";

export default function ButtonBlue({ label, onClick, type }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-blue-500 rounded-full py-2 px-4 text-white font-bold"
        >
            {label}
        </button>
    );
}
