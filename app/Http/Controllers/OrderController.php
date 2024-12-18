<?php

namespace App\Http\Controllers;

use App\Enums\Enums\OrderStatusesEnum;
use App\Models\Branch;
use App\Models\Order;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index(): Response
    {
        $search = request()->search ?? null;
        $branch_id = request()->branch_id ?? null;

        return Inertia::render('Orders/Index', [
            'orders' => Inertia::defer(fn () => 
                            Order::with(['branch', 'user', 'paymentMethod', 'customer'])
                                ->withSum('orderItems', 'total')
                                // ->where('status', OrderStatusesEnum::CREDIT)
                                ->where(function ($query) use ($search) {
                                    $query->where('invoice_no', 'LIKE', "%$search%")
                                        ->orWhereHas('customer', function ($query) use ($search) {
                                            $query->where('name', 'LIKE', "%$search%");
                                        });
                                })
                                ->when($branch_id, fn ($query) => $query->where('branch_id', $branch_id))
                                ->latest()
                                ->paginate(50)
            )
        ]);
    }


    public function creditOrders(): Response
    {
        $search = request()->search ?? null;
        $branch_id = request()->branch_id ?? null;

        return Inertia::render('CreditOrders/Index', [
            'orders' => Inertia::defer(fn () => 
                                    Order::with(['branch', 'user', 'paymentMethod', 'customer'])
                                             ->withSum('orderItems', 'total')
                                             ->withSum('creditOrderPayments', 'amount')
                                             ->where('status', OrderStatusesEnum::CREDIT)
                                             ->where(function ($query) use ($search) {
                                                 $query->where('invoice_no', 'LIKE', "%$search%")
                                                       ->orWhereHas('customer', function ($query) use ($search) {
                                                           $query->where('name', 'LIKE', "%$search%");
                                                       });
                                             })
                                             ->when($branch_id, fn ($query) => $query->where('branch_id', $branch_id))
                                             ->latest()
                                             ->paginate(20)
                       ),
            'paymentMethods' => Inertia::defer(fn () => \App\Models\PaymentMethod::get())
        ]);
    }

}
