<?php

use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('index');
Route::inertia('/', 'home')->name('home');
Route::inertia('/about', 'about')->name('about');
