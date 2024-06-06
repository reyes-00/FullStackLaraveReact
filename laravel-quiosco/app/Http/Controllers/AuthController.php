<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $req){
        $data = $req->validated();
    }
    public function login(Request $req){

    }

    public function logout(Request $req){

    }
}
