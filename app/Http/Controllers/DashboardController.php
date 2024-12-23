<?php

namespace App\Http\Controllers;

use App\Models\CreditOrderPayment;
use App\Models\Expense;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $startDate = request()->startDate ?? now()->startOfMonth();
        $endDate = request()->endDate ?? now()->endOfMonth();

        $expenseTotal = Expense::whereBetween('created_at', [$startDate, $endDate])
                                   ->where('branch_id', auth()->user()->branch_id)
                                    ->sum('cost');

                                    
        $salesTotal = OrderItem::whereBetween('created_at', [$startDate, $endDate])
                                    ->whereRelation('order', 'status', 'paid')
                                    ->whereRelation('order', 'branch_id', auth()->user()->branch_id)
                                    ->sum('total');

        $profitTotal = OrderItem::whereBetween('created_at', [$startDate, $endDate])
                                    ->whereRelation('order', 'status', 'paid')
                                    ->whereRelation('order', 'branch_id', auth()->user()->branch_id)
                                    ->sum('profit');

        $creditPaymentsTotal = CreditOrderPayment::whereBetween('created_at', [$startDate, $endDate])
                                    ->where('branch_id', auth()->user()->branch_id)
                                    ->sum('amount');

                       
        
        return Inertia::render('Dashboard', [
            'statsData' => Inertia::defer(fn () => [
                 [
                    'title' => 'Expenses',
                    'amount' => $expenseTotal,
                    'net' => "______",
                    'isPositive' => false,
                ],
                 [
                    'title' => 'Sales',
                    'amount' => $salesTotal,
                    'net' => "NET. " . number_format($salesTotal - $expenseTotal),
                    'isPositive' => true,
                ],
                 [
                    'title' => 'Profit',
                    'amount' => $profitTotal,
                    'net' => "NET. " . number_format($profitTotal - $expenseTotal),
                    'isPositive' => true,
                ],
                 [
                    'title' => 'Credit Payments',
                    'amount' => $creditPaymentsTotal,
                    'net' => "______",
                    'isPositive' => true,
                ]
                // 'startDate' => $startDate,
                // 'endDate' => $endDate,
            ]),
        ]);
    }


}
