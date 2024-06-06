<?php

namespace App\Http\Requests;

use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; /* Habilitamos para poder usar el Request */
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required','string'],
            'email' => ['required','email', 'unique:users,email'],
            'password' => ['required','confirmed', PasswordRules::min(8)->letters()->symbols()->numbers()],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre es Obligatorio',
            'email.required' => 'El email no es correcto',
            'email.email' => 'El email no tiene el formato correcto',
            'email.unique' => 'El email ya esta registrado',
            'password.required' => 'La password debe contener 8 caracteres, simbolos y numeros',
            'password.confirmed' => 'Las passwords no coinciden'
        ];
    }
}
