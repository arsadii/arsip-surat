<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index()
    {
        $data = File::all();

        return $data;
    }

    public function store(Request $request)
    {
        $request->validate([
            'goods_code' => 'required',
            'goods_name' => 'required',
            'contract_no' => 'required',
            'contract_date' => 'required',
            'skpd' => 'required',
            'bank_name' => 'required',
            'npwp' => 'required',
            'spm_no' => 'required',
            'bast_no' => 'required',
            'bast_date' => 'required',
            'sp2d_no' => 'required',
            'sp2d_date' => 'required',
            'company_name' => 'required',
            'brand' => 'required',
            'size' => 'required',
            'ingredient' => 'required',
            'buy_year' => 'required',
            'model_no' => 'required',
            'price' => 'required',
            'file' => 'required|file|max:2048',
        ]);

        $files = $request->file('file');
        $fileName = $request->goods_code . '_' . $request->goods_name . '_' . $request->contract_no . '.' . $files->getClientOriginalExtension();

        $path = $request->file->storeAs('public/files', $fileName);
        $formated_path = str_replace('public/', 'storage/', $path);

        File::create([
            'goods_code' => $request->goods_code,
            'goods_name' => $request->goods_name,
            'contract_no' => $request->contract_no,
            'contract_date' => $request->contract_date,
            'skpd' => $request->skpd,
            'bank_name' => $request->bank_name,
            'npwp' => $request->npwp,
            'spm_no' => $request->spm_no,
            'bast_no' => $request->bast_no,
            'bast_date' => $request->bast_date,
            'sp2d_no' => $request->sp2d_no,
            'sp2d_date' => $request->sp2d_date,
            'company_name' => $request->company_name,
            'brand' => $request->brand,
            'size' => $request->size,
            'ingredient' => $request->ingredient,
            'buy_year' => $request->buy_year,
            'model_no' => $request->model_no,
            'price' => $request->price,
            'file_path' => $formated_path,
            'user_name' => auth()->user()->name,
        ]);

        return back()->with('success', 'File berhasil disimpan!.');
    }
}
