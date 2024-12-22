<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Valorin\Random\Random;

class PurchaseOrderController extends Controller
{
    public function index(): Response
    {
        $search = request('search') ?? null;

        return Inertia::render('PurchaseOrders/Index', [
            'purchaseOrders' => Inertia::defer(function () use($search) {
                return PurchaseOrder::with(['supplier', 'paymentMethod', 'branch'])
                                        ->where('reference', 'like', "%{$search}%")
                                        ->withSum('items', 'buy_price')
                                        ->paginate(50);
            }),
        ]);
    }


    public function create(): Response
    {
        $branch_id = request()->branch_id ?? null;
        return Inertia::render('PurchaseOrders/Create', [
            'branches' => Inertia::defer(function () {
                return auth()->user()->company->branches;
            }),
            'suppliers' => Inertia::defer(function () {
                return auth()->user()->company->suppliers;
            }),
            'paymentMethods' => Inertia::defer(function () {
                return auth()->user()->company->paymentMethods;
            }),
            'reference' => Inertia::defer(fn () => Random::string(
                6,
                true,
                true,
               true,
            )),
            'products' => Inertia::defer(function () use($branch_id) {
                return Product::where('branch_id', $branch_id)->get();
            } ),
        ]);
    }
}
