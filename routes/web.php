<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\PosController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\RemoveCommaFromInput;
use App\Mail\WelcomeMail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
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

Route::post('/upload', [FileUploadController::class, 'avatar'])
    ->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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
});
