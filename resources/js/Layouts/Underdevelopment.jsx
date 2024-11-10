import React from 'react';
import { Construction, Hammer, Wrench, Cog } from 'lucide-react';
import { Link } from '@inertiajs/react';

function Underdevelopment() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
                <div className="mb-8 flex justify-center space-x-4">
                    <Construction className="h-16 w-16 text-pink-500 animate-bounce" />
                    <Wrench className="h-16 w-16 text-purple-500 animate-bounce delay-100" />
                    <Hammer className="h-16 w-16 text-pink-500 animate-bounce delay-200" />
                </div>

                <h1 className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
                    Working on Something Special
                </h1>

                <div className="mb-8 inline-block rounded-full bg-purple-100 px-4 py-1 font-semibold text-purple-600">
                    Coming Soon
                </div>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Our team is hard at work building this feature. We're making sure everything is perfect before we launch. Check back soon!
                </p>

                <div className="relative mx-auto max-w-md">
                    <div className="h-4 overflow-hidden rounded-full bg-purple-100">
                        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-pink-500 to-purple-600"></div>
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>50%</span>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Building',
                            desc: 'Crafting the perfect experience',
                            icon: <Hammer className="h-6 w-6" />
                        },
                        {
                            title: 'Testing',
                            desc: 'Ensuring everything works flawlessly',
                            icon: <Cog className="h-6 w-6 animate-spin" />
                        },
                        {
                            title: 'Polishing',
                            desc: 'Adding the final touches',
                            icon: <Construction className="h-6 w-6" />
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                        >
                            <div className="mb-4 flex justify-center text-pink-500">
                                {feature.icon}
                            </div>
                            <div className="mb-2 text-center font-bold text-gray-800">
                                {feature.title}
                            </div>
                            <p className="text-center text-gray-600">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-sm text-gray-600">
                    Want to be notified when we launch?{' '}
                    <Link
                        href="/"
                        className="font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                    >
                        Join our waitlist
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Underdevelopment;
