<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = \App\Models\Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }
}
