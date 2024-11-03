import { Head ,router} from '@inertiajs/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import Modal from 'react-modal';

// Bind modal to your appElement for accessibility
Modal.setAppElement('#app');

const Welcome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post('/joinWaitlist', { email });
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setModalIsOpen(false);
            setEmail('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
            <Head title="Future of Dating" />

            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 flex justify-center">
                        <Heart className="h-16 w-16 animate-pulse text-pink-500" />
                    </div>

                    <h1 className="mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
                        Link Up
                    </h1>

                    <div className="mb-8 inline-block rounded-full bg-purple-100 px-4 py-1 font-semibold text-purple-600">
                        Beta Coming Soon
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Welcome to the Future of Dating
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-600">
                            Experience authentic connections without any barriers. Unlike other dating apps,
                            Link Up is completely free - no subscriptions, no hidden fees, just genuine relationships.
                        </p>

                        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                { title: '100% Free', desc: 'No subscriptions or hidden charges ever' },
                                { title: 'Real Connections', desc: 'Focus on authentic relationships' },
                                { title: 'Safe & Secure', desc: 'Your privacy is our priority' }
                            ].map((feature, index) => (
                                <div key={index} className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                                    <div className="mb-2 font-bold text-pink-500">{feature.title}</div>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={() => setModalIsOpen(true)}
                                className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-xl"
                            >
                                Join the Waitlist
                            </button>
                        </div>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md shadow-xl"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                            contentLabel="Waitlist Signup Modal"
                        >
                            {!isSubmitted ? (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-semibold text-gray-900">Join Our Waitlist</h2>
                                        <button
                                            onClick={() => setModalIsOpen(false)}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <p className="text-gray-600">
                                        Be the first to know when Link Up launches.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end space-x-2">
                                            <button
                                                type="button"
                                                onClick={() => setModalIsOpen(false)}
                                                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600"
                                            >
                                                Join Waitlist
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                                    <div className="text-green-500 text-5xl">✓</div>
                                    <p className="text-center font-medium text-gray-900">
                                        Thanks for joining! We'll be in touch soon.
                                    </p>
                                </div>
                            )}
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
