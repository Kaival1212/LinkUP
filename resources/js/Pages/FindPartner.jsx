import React, { useEffect, useState } from "react";
import { Heart, Mail, Calendar, MapPin, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from '@/Layouts/Navbar';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Flash from '@/Components/Flash';

const FindPartner = ({ auth, suggestedUsers }) => {

    const [showFlash, setShowFlash] = useState(false);
    const [flashMessage, setFlashMessage] = useState('');
    const [flashType, setFlashType] = useState('');

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const handleConnect = async (friendID) => {
        try {
            const response = await axios.post(route('connections.store'), { friend_id: friendID });
            if (response.status === 200) {
                setShowFlash(true);
                setFlashMessage(response.data.message);
                setFlashType('success');
            } else {
                setShowFlash(true);
                setFlashMessage(response.data.message);
                setFlashType('error')
            }
        } catch (error) {
            setShowFlash(true);
            setFlashMessage(error.response.data.message);
            setFlashType('error');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFlash(false);
        }, 5000); // Automatically disappear after 5 seconds

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, [showFlash]);

    return (
        <>
            <Navbar auth={auth} />
            <Head title='Match Finder' />
            <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="max-w-7xl mx-auto px-4 flex-grow pt-20 pb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        {showFlash && <Flash message={flashMessage} type={flashType} />}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                            Find Your Perfect Match
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                <Users className="h-5 w-5 text-pink-500" />
                                <span className="text-gray-700 font-medium">{suggestedUsers.total} Matches Found</span>
                            </div>
                            <select className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border-none focus:ring-2 focus:ring-pink-500">
                                <option>Sort by Age</option>
                                <option>Recently Active</option>
                                <option>Nearest First</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {suggestedUsers?.data.map((user) => (
                            <div key={user.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative">
                                    <img
                                        src={user.profile_image}
                                        alt={user.name}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="text-white">
                                                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{calculateAge(user.dateOfBirth)} years</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>2km away</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                                            {user.sex}
                                        </span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                            Seeking: {user.preference}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                            Online Now
                                        </span>
                                    </div>

                                    <div className="flex justify-between space-x-4">
                                        <button
                                            onClick={() => handleConnect(user.id)}
                                            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-colors font-medium">
                                            <Heart className="h-5 w-5" />
                                            <span>Connect</span>
                                        </button>

                                        <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-colors font-medium">
                                            <Mail className="h-5 w-5" />
                                            <span>Message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        {suggestedUsers.prev_page_url && (
                            <Link
                                href={suggestedUsers.prev_page_url}
                                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 font-medium"
                            >
                                <ChevronLeft className="h-5 w-5" />
                                <span>Previous</span>
                            </Link>
                        )}

                        <div className="bg-white px-6 py-3 rounded-xl shadow-sm">
                            <span className="text-gray-700 font-medium">
                                Page {suggestedUsers.current_page} of {suggestedUsers.last_page}
                            </span>
                        </div>

                        {suggestedUsers.next_page_url && (
                            <Link
                                href={suggestedUsers.next_page_url}
                                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 font-medium"
                            >
                                <span>Next</span>
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FindPartner;
