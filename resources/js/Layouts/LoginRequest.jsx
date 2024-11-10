import React from 'react';
import { Link } from '@inertiajs/react';
import { Handshake } from 'lucide-react';

function LoginRequest() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-md">
                <div className="mb-6 flex justify-center">
                    <Handshake className="h-12 w-12 text-pink-500 animate-pulse" />
                </div>

                <h1 className="mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                    Access Required
                </h1>

                <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
                    <div className="text-center space-y-6">
                        <p className="text-gray-600">
                            Please log in to access this page.
                        </p>

                        <Link
                            href={route('login')}
                            className="block w-full rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-xl"
                        >
                            Log In
                        </Link>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link
                        href={route('register')}
                        className="font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginRequest;
