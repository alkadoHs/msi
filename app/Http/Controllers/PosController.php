<?php

namespace App\Http\Controllers;

use App\Models\PaymentMethod;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Valorin\Random\Random;

class PosController extends Controller
{
    public function index(): Response
    {
        $search = request()->search ?? null;

        return Inertia::render('Pos/Index', [
            'products' => Inertia::defer(fn () => 
                                Product::where('name', 'LIKE', "%$search%")->latest()->limit(1000)->get(),
        ),
        'paymentMethods' => Inertia::defer(fn () => PaymentMethod::get()),
        'orderDate' => now()->format('Y-m-d'),
        'invoice_no' => Inertia::defer(fn () =>  Random::number(0000000, 100000000))
        ]);
    }
}
