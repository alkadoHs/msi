<?php

namespace App\Observers;

use App\Models\OrderItem;

class OrderItemObserver
{
    /**
     * Handle the OrderItem "created" event.
     */
    public function created(OrderItem $orderItem): void
    {
        // decrement the stock of the product
        $orderItem->product->decrement('stock', $orderItem->qty);
    }

    /**
     * Handle the OrderItem "deleted" event.
     */
    public function deleted(OrderItem $orderItem): void
    {
        // increment the stock of the product
        $orderItem->product->increment('stock', $orderItem->qty);
    }

    /**
     * Handle the OrderItem "restored" event.
     */
    public function restored(OrderItem $orderItem): void
    {
        // decrement the stock of the product
        $orderItem->product->decrement('stock', $orderItem->qty);
    }

    /**
     * Handle the OrderItem "force deleted" event.
     */
    public function forceDeleted(OrderItem $orderItem): void
    {
        // increment the stock of the product
        $orderItem->product->increment('stock', $orderItem->qty);
    }
}
