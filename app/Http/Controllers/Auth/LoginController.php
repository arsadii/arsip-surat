<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }

    public function login(Request $request)
    {
        // return $request;
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only(['username', 'password']))) {
            return redirect('/dashboard');
        }
        throw ValidationException::withMessages([
            'failed' => ['Username dan password tidak sesuai'],
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ], [
            'old_password.required' => 'Password lama harus diisi',
            'new_password.required' => 'Password baru harus diisi',
            'new_password.confirmed' => 'Password baru tidak sama dengan konfirmasi password',
        ]);

        $user = User::find(Auth::user()->id);

        if (!Hash::check($request->old_password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['Password lama tidak sesuai'],
            ]);
        }

        User::where('id', Auth::user()->id)->update([
            'password' => Hash::make($request->new_password),
        ]);

        return back();
    }
}
