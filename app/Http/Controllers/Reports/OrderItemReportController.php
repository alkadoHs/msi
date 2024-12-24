<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderItemReportController extends Controller
{
    public function index(): Response
    {
        $startDate = request()->startDate ?? now()->startOfMonth();
        $endDate = request()->endDate ?? now()->endOfMonth();

        return Inertia::render('Reports/OrderItemReport',[
            'startDate' => request()->startDate ?? now()->startOfMonth(),
            'endDate' => request()->endDate ?? now()->endOfMonth(),
            'orderItems' => Inertia::defer(function () use($startDate, $endDate) {
                return OrderItem::query()
                    ->whereBetween('created_at', [$startDate, $endDate])
                    ->whereRelation('order', 'branch_id', auth()->user()->branch_id)
                    ->with(['order' => ['customer', 'branch','user', 'paymentMethod'], 'product'])
                    ->get();
            }),
        ]);
    }
}
