<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use PharIo\Manifest\Email;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|exists:waitlist_users,email|unique:users,email',
            'sex' => 'required',
            'preference' => 'required',
            'dateOfBirth' => ['required', 'date', 'before:' . now()->subYears(18)->format('Y-m-d')],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ], [
            'dateOfBirth.before' => 'You must be at least 18 years old to register.',
            'email.exists' => 'Email not found in waitlist',
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'sex' => $request->sex,
            'preference' => $request->preference,
            'dateOfBirth' => $request->dateOfBirth,
            'password' => Hash::make($request->password),
        ]);

        //$request->user()->sendEmailVerificationNotification();

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('main.index'));
    }
}
