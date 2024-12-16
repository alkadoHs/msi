<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PosController extends Controller
{
    public function index(): Response
    {
        $search = request()->search ?? null;

        return Inertia::render('Pos/Index', [
            'products' => Inertia::defer(fn () => 
                                Product::where('name', 'LIKE', "%$search%")->latest()->limit(1000)->get(),
                        )
        ]);
    }
}
