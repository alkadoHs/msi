<?php

namespace App\Enums\Enums;

enum OrderStatusesEnum: string
{
    case PENDING = 'pending';
    case PAID = 'paid';
    case CREDIT = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'Pending',
            self::PAID => 'Paid',
            self::CREDIT => 'Credit',
        };
    }
}