<?php

namespace App\Http\Controllers;

use App\Enums\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return view('product.index')->with([
            'token' => $request->cookie('access_token'),
            'categories' => json_encode(ProductCategory::getOptions())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function form(Request $request)
    {
        return view('product.form')->with([
            'token' => $request->cookie('access_token'),
            'categories' => json_encode(ProductCategory::getOptions())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
