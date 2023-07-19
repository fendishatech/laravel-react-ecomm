<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $req)
    {
        // Validate
        // $validatedData = $req->validate([
        //     "name" => "required",
        //     "email" => "required|email|unique:users",
        //     "passowrd" => "required",
        // ]);

        // // Add to db
        // if ($validatedData) {
        $user = new User();
        $user->name = $req->input("name");
        $user->email = $req->input("email");
        $user->password = Hash::make($req->input("password"));
        $user->save();

        return $user;
        // } else {
        //     return response()->json(['errors' => $validatedData->errors()], 422);
        // }
    }

    public function login(Request $req)
    {
    }


    public function logout(Request $req)
    {
    }
}
