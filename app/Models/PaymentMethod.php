<?php

namespace App\Models;

use App\Observers\PaymentMethodObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ObservedBy(PaymentMethodObserver::class)]
class PaymentMethod extends Model
{
    protected $fillable = [
        'company_id',
        'name',
    ];


    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
