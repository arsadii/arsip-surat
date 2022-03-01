import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Main from "../../Layout/Main";

export default function Login() {
    const [credential, setCredential] = useState({
        username: "",
        password: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        Inertia.post("login", credential, {
            onSuccess: () => {
                toast.success("Login Successful");
            },
            onError: (e) => {
                toast.error("Login Failed");
            },
        });
    };

    return (
        <Main title="Login">
            <div className="h-full w-full flex flex-col justify-center items-center space-y-6 p-5">
                <h1 className="text-4xl sm:text-6xl font-semibold">
                    Arsip BPKAD
                </h1>
                <form
                    onSubmit={submitHandler}
                    className="w-full sm:w-1/3 flex flex-col items-center space-y-4"
                >
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="username">Username</label>
                        <input
                            className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e) => {
                                setCredential({
                                    ...credential,
                                    username: e.target.value,
                                });
                            }}
                            value={credential.username}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 w-full mb-5">
                        <label htmlFor="username">Password</label>
                        <input
                            className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => {
                                setCredential({
                                    ...credential,
                                    password: e.target.value,
                                });
                            }}
                            value={credential.password}
                        />
                    </div>
                    <div className="flex pt-5 w-full">
                        <button
                            type="submit"
                            className="bg-gray-700 hover:bg-gray-800 rounded-lg py-2 px-4 text-lg w-full text-white font-bold text-center transition-all duration-200 tranform hover:-translate-y-1"
                        >
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </Main>
    );
}
