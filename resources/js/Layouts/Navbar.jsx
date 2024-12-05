import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, User, LogOut, Heart } from 'lucide-react';
import { Head, Link } from '@inertiajs/react';

function Navbar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-2">
                        <Heart className="h-6 w-6 text-pink-500" />
                        <Link
                            href={route('main.index')}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent hover:opacity-80 transition-opacity"
                        >
                            LinkUP Beta
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {auth?.user && (
                            <>
                                <Link
                                    href={route('main.index')}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors group"
                                >
                                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span>Chats</span>
                                </Link>

                                <Link
                                    href={route('main.findPartner')}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors group"
                                >
                                    <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span>Find Your Partner</span>
                                </Link>

                                <Link
                                    href={route('connections.index')}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors group"
                                >
                                    <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span>Connections</span>
                                </Link>
                            </>
                        )}

                        {auth?.user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center space-x-2 rounded-full bg-pink-50 px-4 py-2 text-pink-500 hover:bg-pink-100 transition-all hover:shadow-md"
                                >
                                    <User className="h-5 w-5" />
                                    <span>{auth.user.name}</span>
                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 transform origin-top-right transition-all">
                                        <Link
                                            href={route('profile.edit')}
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                        >
                                            <User className="h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="POST"
                                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            <span>Logout</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="space-x-4">
                                <Link
                                    href={route('register')}
                                    className="text-pink-500 hover:text-pink-600 transition-colors"
                                >
                                    Register
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="rounded-full bg-pink-500 px-6 py-2 font-semibold text-white hover:bg-pink-600 transition-all hover:shadow-md"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden rounded-lg p-2 text-gray-400 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                }`} />
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}>
                    <div className="space-y-2 px-2 pb-3 pt-2">
                        {auth?.user && (
                            <>
                                <Link
                                    href={route('main.index')}
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>Chats</span>
                                </Link>
                                <Link
                                    href={route('main.index')}
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <Users className="h-5 w-5" />
                                    <span>Find Your Partner</span>
                                </Link>
                                <Link
                                    href={route('main.index')}
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <User className="h-5 w-5" />
                                    <span>Profile</span>
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="POST"
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <LogOut className="h-5 w-5" />
                                    <span>Logout</span>
                                </Link>
                            </>
                        )}
                        {!auth?.user && (
                            <div className="space-y-2">
                                <Link
                                    href={route('register')}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-pink-500 hover:bg-pink-50 transition-colors"
                                >
                                    Register
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="block rounded-lg bg-pink-500 px-3 py-2 text-base font-medium text-white hover:bg-pink-600 transition-colors"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
