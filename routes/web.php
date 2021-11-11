<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/register-test', 'register-test');
Route::view('/login-test', 'login-test');
Route::view('{any?}', "home");

Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('/', 'home');
    Route::view('home', 'home')->name('home');
});