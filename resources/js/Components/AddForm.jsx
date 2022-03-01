import React, { useState } from "react";
import ModalRoot from "./ModalRoot";
import ButtonBlue from "./Parts/ButtonBlue";
import { Inertia } from "@inertiajs/inertia";
import { useRecoilState } from "recoil";
import { dialog } from "../Store";
import toast from "react-hot-toast";

export default function AddForm() {
    const [showDialog, setShowDialog] = useRecoilState(dialog);
    const [files, setFiles] = useState({
        goods_code: "",
        goods_name: "",
        contract_no: "",
        contract_date: "",
        skpd: "",
        bank_name: "",
        npwp: "",
        spm_no: "",
        bast_no: "",
        bast_date: "",
        sp2d_no: "",
        sp2d_date: "",
        company_name: "",
        brand: "",
        size: "",
        ingredient: "",
        buy_year: "",
        model_no: "",
        price: "",
        file: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData = files;

        Inertia.post("/files", formData, {
            onSuccess: () => {
                setShowDialog(false);
                toast.success("File Upload Successful");
                setFiles({
                    ...files,
                    goods_code: "",
                    goods_name: "",
                    contract_no: "",
                    contract_date: "",
                    skpd: "",
                    bank_name: "",
                    npwp: "",
                    spm_no: "",
                    bast_no: "",
                    bast_date: "",
                    sp2d_no: "",
                    sp2d_date: "",
                    company_name: "",
                    brand: "",
                    size: "",
                    ingredient: "",
                    buy_year: "",
                    model_no: "",
                    price: "",
                    file: "",
                });
            },
            onError: (e) => {
                toast.error("File Upload Failed");
            },
        });
    };

    return (
        <ModalRoot title="Tambah Arsip">
            <form onSubmit={submitHandler} className="space-y-4">
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="goods_code">
                        Kode Barang
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="goods_code"
                        id="goods_code"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                goods_code: e.target.value,
                            });
                        }}
                        value={files.goods_code}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="goods_name">
                        Nama Barang
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="goods_name"
                        id="goods_name"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                goods_name: e.target.value,
                            });
                        }}
                        value={files.goods_name}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="contract_no">
                        No. Kontrak
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="contract_no"
                        id="contract_no"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                contract_no: e.target.value,
                            });
                        }}
                        value={files.contract_no}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="contract_date">
                        Tanggal Kontrak
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="date"
                        name="contract_date"
                        id="contract_date"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                contract_date: e.target.value,
                            });
                        }}
                        value={files.contract_date}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="skpd">
                        SKPD
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="skpd"
                        id="skpd"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                skpd: e.target.value,
                            });
                        }}
                        value={files.skpd}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="bank_name">
                        Nama Bank
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="bank_name"
                        id="bank_name"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                bank_name: e.target.value,
                            });
                        }}
                        value={files.bank_name}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="npwp">
                        NPWP
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="npwp"
                        id="npwp"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                npwp: e.target.value,
                            });
                        }}
                        value={files.npwp}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="spm_no">
                        No SPM
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="spm_no"
                        id="spm_no"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                spm_no: e.target.value,
                            });
                        }}
                        value={files.spm_no}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="bast_no">
                        No. BAST
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="bast_no"
                        id="bast_no"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                bast_no: e.target.value,
                            });
                        }}
                        value={files.bast_no}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="bast_date">
                        Tanggal BAST
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="date"
                        name="bast_date"
                        id="bast_date"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                bast_date: e.target.value,
                            });
                        }}
                        value={files.bast_date}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="sp2d_no">
                        No SP2D
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="sp2d_no"
                        id="sp2d_no"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                sp2d_no: e.target.value,
                            });
                        }}
                        value={files.sp2d_no}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="sp2d_date">
                        Tanggal SP2D
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="date"
                        name="sp2d_date"
                        id="sp2d_date"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                sp2d_date: e.target.value,
                            });
                        }}
                        value={files.sp2d_date}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="company_name">
                        Nama Perusahan
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="company_name"
                        id="company_name"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                company_name: e.target.value,
                            });
                        }}
                        value={files.company_name}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="brand">
                        Merek
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="brand"
                        id="brand"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                brand: e.target.value,
                            });
                        }}
                        value={files.brand}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="size">
                        Ukuran
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="size"
                        id="size"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                size: e.target.value,
                            });
                        }}
                        value={files.size}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="ingredient">
                        Bahan
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                ingredient: e.target.value,
                            });
                        }}
                        value={files.ingredient}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="buy_year">
                        Tahun Pembelian
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="buy_year"
                        id="buy_year"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                buy_year: e.target.value,
                            });
                        }}
                        value={files.buy_year}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="model_no">
                        No. Model
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="model_no"
                        id="model_no"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                model_no: e.target.value,
                            });
                        }}
                        value={files.model_no}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="price">
                        harga
                    </label>
                    <input
                        className="bg-white border-0 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-0 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-xl transform focus:-translate-y-1 transition-all duration-200"
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                price: e.target.value,
                            });
                        }}
                        value={files.price}
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label className="text-gray-500" htmlFor="file">
                        File Surat
                    </label>
                    <input
                        className=" file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100  w-full appearance-none leading-normal"
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => {
                            setFiles({
                                ...files,
                                file: e.target.files[0],
                            });
                        }}
                    />
                </div>
                <ButtonBlue type="submit" label="Simpan" />
            </form>
        </ModalRoot>
    );
}
