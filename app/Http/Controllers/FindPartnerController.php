<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\AddedFriend;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FindPartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $userpreference = $request->user()->preference;

        $suggestedUser = User::where('sex', $userpreference)->orderBy('name')->first();

        $suggestedUsers = User::where('sex', $userpreference)->orderBy('name')->paginate(12);

        // $request->user()->notify(new AddedFriend($suggestedUser));

        return Inertia::render('FindPartner', [
            'suggestedUsers' => $suggestedUsers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
