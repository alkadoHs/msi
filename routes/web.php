<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\CreditOrderPaymentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PosController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Reports\DailySalesController;
use App\Http\Controllers\Reports\OrderItemReportController;
use App\Http\Controllers\Reports\SalesByProductController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\RemoveCommaFromInput;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // Mail::to('alkadosichone@gmail.com')->send(new WelcomeMail() );
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('reports', function () {
    return Inertia::render('Reports');
})->middleware(['auth', 'verified'])->name('reports');

Route::post('/upload', [FileUploadController::class, 'avatar'])
    ->middleware(['auth', 'verified']);

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';


Route::resource('companies', \App\Http\Controllers\CompanyController::class)
     ->middleware(['auth', 'verified'])
     ->only(['index', 'create', 'store', 'update', 'destroy']);

Route::resource('branches', \App\Http\Controllers\BranchController::class)
     ->middleware(['auth', 'verified'])
     ->only(['index', 'create', 'store', 'update', 'destroy']);

Route::get('congratulations', function () {
    return Inertia::render('congraturation');
})->middleware(['auth', 'verified'])->name('congratulations');


Route::resource('users', UserController::class)
    ->middleware(['auth', 'verified'])
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);

Route::post('switch-branch/{branch}', [UserController::class, 'switchBranch'])
    ->middleware(['auth', 'verified'])
    ->name('switch-branch');

Route::resource('paymentMethods', \App\Http\Controllers\PaymentMethodController::class)
    ->middleware(['auth', 'verified'])
    ->only(['index', 'create', 'store', 'update', 'destroy']);

Route::get('accounts', [AccountController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('accounts.index');

Route::resource('products', ProductController::class)
    ->middleware(['auth', 'verified', RemoveCommaFromInput::class])
    ->only(['index', 'store', 'update', 'destroy']);

Route::resource('customers', \App\Http\Controllers\CustomerController::class)
    ->middleware(['auth', 'verified'])
    ->only(['index', 'store', 'update', 'destroy']);


Route::prefix('pos')->middleware(['auth', 'verified', RemoveCommaFromInput::class])->group(function () {
    Route::get('index', [PosController::class, 'index'])->name('pos.index');
    Route::post('sell', [PosController::class, 'sell'])->name('pos.sell');

    Route::get('invoices/{order}', [PosController::class, 'invoice'])->name('pos.invoice');
});


// ordders Routes
Route::controller(OrderController::class)->prefix('orders')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', 'index')->name('orders.index');
    Route::get('credit-orders', 'creditOrders')->name('orders.creditOrders');
    Route::get('pending-orders', 'pendingOrders')->name('orders.pendingOrders');
    Route::get('pending-orders/{order}', 'editPendingOrder')->name('orders.pendingOrders.edit');
    Route::patch('pending-orders/{order}/confirm-all', 'confirmAllPendingItems')->name('orders.pendingOrders.confirm-all');
    Route::patch('pending-orders/{order}/confirm', 'confirmPendingOrder')->name('orders.pendingOrders.confirm');
    Route::patch('pending-orders/{order}/cancel', 'cancelPendingOrder')->name('orders.pendingOrders.cancel');
});


Route::middleware(['auth', 'verified', RemoveCommaFromInput::class])->group(function () {
    Route::post('credit-orders/{creditOrder}', [CreditOrderPaymentController::class, 'store'])
        ->name('credit-orders.store');
});

Route::resource('orderItems', \App\Http\Controllers\OrderItemController::class)
    ->middleware(['auth', 'verified', RemoveCommaFromInput::class])
    ->only(['update', 'destroy']);

Route::resource('expenses', \App\Http\Controllers\ExpenseController::class)
    ->middleware(['auth', 'verified', RemoveCommaFromInput::class])
    ->only(['index', 'store', 'update', 'destroy']);

Route::resource('suppliers', \App\Http\Controllers\SupplierController::class)
    ->middleware(['auth', 'verified', RemoveCommaFromInput::class])
    ->only(['index', 'store', 'update', 'destroy']);


Route::resource('purchases', \App\Http\Controllers\PurchaseOrderController::class)
    ->middleware(['auth', 'verified', RemoveCommaFromInput::class])
    ->only(['index', 'create', 'show', 'store', 'update', 'destroy']);


Route::prefix('reports')->middleware(['auth', 'verified'])->group(function () {
    Route::get('order-items', [OrderItemReportController::class, 'index'])->name('reports.order-items');
    Route::get('sales-by-product', [SalesByProductController::class, 'index'])->name('reports.sales-by-product');
    Route::get('sales-by-product/export-excel', [SalesByProductController::class, 'exportExcel'])->name('reports.sales-by-product.export-excel');
    Route::get('sales-by-product/export-pdf', [SalesByProductController::class, 'exportPdf'])->name('reports.sales-by-product.export-pdf');

    Route::get('daily-sales', [DailySalesController::class, 'index'])->name('reports.daily-sales');
    Route::get('daily-sales/export-excel', [DailySalesController::class, 'exportExcel'])->name('reports.daily-sales.export-excel');
    Route::get('daily-sales/export-pdf', [DailySalesController::class, 'exportPdf'])->name('reports.daily-sales.export-pdf');
});
