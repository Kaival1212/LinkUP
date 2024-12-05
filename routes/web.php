<?php

use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\FindPartnerController;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WaitlistUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('BetaWelcome');
});

Route::get('/beta', [MainPageController::class, 'index'])->name('main.index');

Route::post('/joinWaitlist', [WaitlistUserController::class, 'store'])->name('waitlist.store');

Route::prefix('beta')->middleware('auth')->group(function () {
    Route::resource('connections', ConnectionController::class);
});

Route::get('/findpartner', [FindPartnerController::class, 'index'])->name('main.findPartner')->prefix('beta')->middleware('auth');

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
