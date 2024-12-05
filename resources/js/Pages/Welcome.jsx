import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Layouts/Navbar';
import Underdevelopment from '@/Layouts/Underdevelopment';
import LoginRequest from '@/Layouts/LoginRequest';

function Welcome({ auth }) {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 to-purple-100">
            <Head title="Welcome" />
            <Navbar auth={auth} />
            <main className="flex-grow pt-16">
                {auth.user ? <Underdevelopment /> : <LoginRequest />}
            </main>
        </div>
    );
}

export default Welcome;
