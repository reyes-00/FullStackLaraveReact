<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegistroRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegistroRequest $req){
        $data = $req->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' =>  bcrypt($data['password'])
        ]);

        return[
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }
    public function login(LoginRequest $req){
        $data= $req->validated();

        if(!Auth::attempt($data)){
            return response()->json([
                'errors' => ['El email o password son incorrectos']
            ],422);
        }

        //Autenticar
        $user = Auth::user();

        return[
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }


    public function logout(Request $req){

    }
}
