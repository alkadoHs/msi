<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'phones',
        'email',
        'address',
        'city',
        'registration_no',
        'logo',
    ];

    public function branches(): HasMany
    {
        return $this->hasMany(Branch::class);
    }
    
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
