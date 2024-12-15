<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'branch_id',
        'name',
        'unit',
        'buy_price',
        'sell_price',
        'stock',
        'stock_alert',
        'unique_id',
        'expired_date',
        'whole_price',
        'whole_stock',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
