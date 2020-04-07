<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator,Redirect,Response;
Use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Session;

class AuthController extends Controller {
    
    public function login(Request $request) {

        if(Auth::guard('web')->attempt(['email' => $request->email, 'password' => $request->password])) {
        	$msg = [
        		'status' => 'success',
        		'message' => 'Connexion effectuée avec succès',
        	];
        } else {
        	$msg = [
        		'status' => 'error',
        		'message' => 'Les identifiants ne sont pas correctes'
        	];
        }

        return response()->json($msg);
    }
}
