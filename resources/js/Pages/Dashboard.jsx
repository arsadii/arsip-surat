import { Grid } from "gridjs-react";
import React from "react";
import { useRecoilState } from "recoil";
import AddForm from "../Components/AddForm";
import Header from "../Components/Header";
import ButtonBlue from "../Components/Parts/ButtonBlue";
import Main from "../Layout/Main";
import { dialog } from "../Store";
import { _ } from "gridjs-react";

export default function Dashboard({ user }) {
    const [showForm, setShowForm] = useRecoilState(dialog);
    const prev = "http://localhost:8000/api/";

    return (
        <Main title="Dashboard">
            <Header user={user} />
            <AddForm />
            <div className="px-3 mt-5">
                <ButtonBlue
                    onClick={() => {
                        console.log("tes");
                        setShowForm(true);
                    }}
                    label="Tambah Arsip"
                />
            </div>
            <div className="overflow-x-auto w-full ">
                <Grid
                    server={{
                        url: `${prev}files`,
                        then: (data) =>
                            data.map((file) => [
                                _(
                                    <a
                                        className={
                                            "py-1 px-2 rounded-lg text-white bg-blue-600 box-border text-xs"
                                        }
                                        href={`http://localhost:8000/${file.file_path}`}
                                        target="_blank"
                                    >
                                        Lihat
                                    </a>
                                ),
                                file.goods_code,
                                file.goods_name,
                                file.contract_no,
                                file.contract_date,
                                file.skpd,
                                file.bank_name,
                                file.npwp,
                                file.spm_no,
                                file.bast_no,
                                file.bast_date,
                                file.sp2d_no,
                                file.sp2d_date,
                                file.company_name,
                                file.brand,
                                file.size,
                                file.ingredient,
                                file.buy_year,
                                file.model_no,
                                file.price,
                                file.user_name,
                            ]),
                    }}
                    columns={[
                        "File",
                        "Kode Barang",
                        "Nama Barang",
                        "No Kontrak",
                        "Tgl Kontrak",
                        "SKPD",
                        "Nama Bank",
                        "NPWP",
                        "No SPM",
                        "No BAST",
                        "Tgl BAST",
                        "No SP2D",
                        "Tgl SP2D",
                        "Nama Perusahaan",
                        "Merek",
                        "Ukuran",
                        "Bahan",
                        "Tahun Pembelian",
                        "Model",
                        "Harga",
                        "Diinput Oleh",
                    ]}
                    language={{
                        search: {
                            placeholder: "🔍 Cari...",
                        },
                        pagination: {
                            previous: "Sebelumnya",
                            next: "Selanjutnya",
                            showing: "Menampilkan",
                            results: () => "Data",
                        },
                    }}
                    search={{
                        enabled: true,
                        keyword: "",
                    }}
                    className={{
                        container: "p-3 w-fit ",
                        td: "px-5",
                        thead: "bg-gray-700 text-white",
                        th: "py-3",
                        tr: "border-b border-gray-200",
                        table: "bg-white my-5 shadow-lg rounded-lg overflow-hidden",
                        paginationButton: "mt-5",
                        paginationButtonCurrent:
                            "bg-gray-600 text-white px-2 py-1 rounded mx-3",
                        paginationButtonNext:
                            "bg-gray-100 hover:bg-gray-200 px-2 py-1 ml-3 rounded",
                        paginationButtonPrev:
                            "bg-gray-100 hover:bg-gray-200 px-2 py-1 mr-3 rounded",
                    }}
                    pagination={{
                        enabled: true,
                        limit: 10,
                    }}
                    sort={true}
                />
            </div>
        </Main>
    );
}
