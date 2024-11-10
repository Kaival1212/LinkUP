<?php

namespace App\Http\Controllers;

use App\Mail\JoinedWaitingList;
use App\Mail\JoinWaitListUserMail;
use App\Models\WaitlistUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class WaitlistUserController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());

        $emailExist = WaitlistUser::where('email', $request->email)->first();

        if ($emailExist) {
            return Redirect::back()->withErrors(['email' => 'Email already exists']);
        }

        $request->validate([
            'email' => 'required|email|unique:waitlist_users,email',
        ]);

        try {
            $waitListUser = WaitlistUser::create($request->only('email'));

            Mail::to($waitListUser->email)->send(new JoinWaitListUserMail($waitListUser));

            return Redirect::back()->with('success', 'You have been added to the waitlist');
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }
    }

}
