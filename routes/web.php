<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect(route('login'));
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('auth');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Dashboard', [
            'user' => auth()->user(),
        ]);
    })->name('dashboard');

    Route::post('/password/update', [LoginController::class, 'updatePassword'])->name('password.update');

    Route::post('/files', [FileController::class, 'store'])->name('files.store');

    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
});
