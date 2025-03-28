<?php

namespace Database\Seeders;

use App\Enums\Enums\PermissionsEnum;
use App\Enums\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ProductSeeder::class);
        // $this->call(HardwareProductSeeder::class);
        // $this->call(SupermarketProductSeeder::class);
        // $this->call(PharmacyProductSeeder::class);
    }
}
