<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $fillable = [
        'company_id',
        'name',
        'contact',
        'description',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
