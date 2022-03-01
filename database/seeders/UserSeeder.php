<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@gmail.com',
                'username' => 'superadmin',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Admin1',
                'email' => 'admin1@gmail.com',
                'username' => 'admin1',
                'password' => Hash::make('passwordadmin1'),
            ],
            [
                'name' => 'Admin2',
                'email' => 'admin2@gmail.com',
                'username' => 'admin2',
                'password' => Hash::make('passwordadmin2'),
            ],
            [
                'name' => 'Admin3',
                'email' => 'admin3@gmail.com',
                'username' => 'admin3',
                'password' => Hash::make('passwordadmin3'),
            ]
        ];

        $roles = [
            'superadmin',
            'admin',
            'admin',
            'admin',
        ];

        foreach ($users as $index => $user) {
            $user = User::create($user);
            $user->assignRole($roles[$index]);
        }
    }
}
