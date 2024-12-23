<?php

namespace App\Models;

use App\Models\Scopes\BranchCompanyScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ScopedBy(BranchCompanyScope::class)]
class CreditOrderPayment extends Model
{
    protected $fillable = [
        'branch_id',
        'order_id',
        'payment_method_id',
        'amount',
    ];


    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function paymentMethod(): BelongsTo
    {
        return $this->belongsTo(PaymentMethod::class);
    }
}
