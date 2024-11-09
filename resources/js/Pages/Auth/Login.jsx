import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Heart } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
            <Head title="Log in" />

            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-md">
                    <div className="mb-6 flex justify-center">
                        <Heart className="h-12 w-12 text-pink-500" />
                    </div>

                    <h1 className="mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                        Welcome Back
                    </h1>

                    {status && (
                        <div className="mb-4 text-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                            {status}
                        </div>
                    )}

                    <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-xl disabled:opacity-70"
                                >
                                    Log in
                                </button>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-center text-sm text-gray-600 hover:text-pink-500 transition-colors"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="mt-6 text-center">
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link
                            href={route('register')}
                            className="font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
