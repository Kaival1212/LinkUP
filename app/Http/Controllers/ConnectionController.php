<?php

namespace App\Http\Controllers;

use App\Mail\ConnectionRequestGetMail;
use App\Models\Connection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ConnectionController extends Controller
{
    public function index(Request $request)
    {

        $receivedConnections = Connection::where('friend_id', $request->user()->id)->get();
        $sentConnections = Connection::where('user_id', $request->user()->id)->get();

        return Inertia::render('Connections',[
            'receivedConnections' => $receivedConnections,
            'sentConnections' => $sentConnections,
        ]);
    }

    public function create(Request $request)
    {

        // Connection::create([
        //     'user_id' => $request->user()->id,
        //     'friend_id' => $request->query('friendID'),
        // ]);

    }

    public function store(Request $request)
    {

        $request->validate([
            'friend_id' => 'required|exists:users,id',
        ]);

        $receiver = User::where('id', $request->friend_id)->first();

        if ($request->user()->connections()->where('friend_id', $request->friend_id)->exists()) {
            return response(['message' => 'You are already connected with this user'], 400);
        }

        $request->user()->connections()->create([
            'friend_id' => $request->friend_id,
        ]);

        Mail::to($receiver->email)->send(new ConnectionRequestGetMail($receiver, $request->user()));

        return response(['message' => 'Request sent Successfully'], 200);
    }

    public function show(Request $request, $id)
    {

    }

    public function edit(Request $request, $id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy(Request $request, $id)
    {

    }

}
