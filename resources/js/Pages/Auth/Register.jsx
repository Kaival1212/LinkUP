import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Heart } from 'lucide-react';
import { Select } from '@headlessui/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        sex: 'male',
        preference: 'male',
        dateOfBirth: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
            <Head title="Register"/>

            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-md">
                    <div className="mb-6 flex justify-center">
                        <Heart className="h-12 w-12 text-pink-500 animate-pulse" fill='#eb4899' />
                    </div>

                    <h1 className="mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                        Create Account
                    </h1>

                    <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    autoComplete="name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

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
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                                    Sex
                                </label>
                                <select
                                    id='sex'
                                    name='sex'
                                    value={data.sex}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        setData('sex', e.target.value)
                                    }
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    required
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-Binary</option>
                                    <option value="prefer-not-to-say">Prefer Not to Say</option>
                                    <option value="other">Other</option>
                                </select>
                                <InputError message={errors.sex} className="mt-2" />
                            </div>

                            <div>
                                <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
                                    Preference
                                </label>
                                <select
                                    id='preference'
                                    name='preference'
                                    value={data.preference}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        setData('preference', e.target.value)
                                    }}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    required
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-Binary</option>
                                    <option value="prefer-not-to-say">Prefer Not to Say</option>
                                    <option value="other">Other</option>
                                </select>
                                <InputError message={errors.preference} className="mt-2" />
                            </div>

                            <div>
                                <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    name="dateOfBirth"
                                    value={data.dateOfBirth}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    autoComplete="age"
                                    onChange={(e) => setData('dateOfBirth', e.target.value)}
                                    required
                                />
                                <InputError message={errors.dateOfBirth} className="mt-2" />

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
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex flex-col space-y-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-xl disabled:opacity-70"
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-6 text-center">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link
                            href={route('login')}
                            className="font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
