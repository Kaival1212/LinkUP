import React, { useState } from 'react'
import { MessageCircle, Users, User, LogOut } from 'lucide-react';
import { Head, Link } from '@inertiajs/react'

function Navbar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link
                            href={route('main.index')}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent"
                        >
                            LinkUP Beta
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {auth?.user &&
                            <><Link
                                href={route('main.index')}
                                className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span>Chats</span>
                            </Link>

                                <Link
                                    href={route('main.index')}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                                >
                                    <Users className="h-5 w-5" />
                                    <span>Find Your Partner</span>
                                </Link>
                            </>
                        }

                        {auth?.user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center space-x-2 rounded-full bg-pink-50 px-4 py-2 text-pink-500 hover:bg-pink-100 transition-colors"
                                >
                                    <User className="h-5 w-5" />
                                    <span>{auth.user.name}</span>
                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                                        <Link
                                            href={route('main.index')}
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                        >
                                            <User className="h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method='POST'
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            <span>Logout</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href={route('login')}
                                className="rounded-full bg-pink-500 px-6 py-2 font-semibold text-white hover:bg-pink-600 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                href={route('main.index')}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                            >
                                Chats
                            </Link>
                            <Link
                                href={route('main.index')}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                            >
                                Find Your Partner
                            </Link>
                            {auth?.user ? (
                                <>
                                    <Link
                                        href={route('main.index')}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method='POST'
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                                    >
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
