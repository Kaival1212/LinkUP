import Navbar from '@/Layouts/Navbar'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

function Connections({ auth, sentConnections, receivedConnections }) {

    const [pagetype, setPagetype] = useState('received')

    function handelPageType(type) {
        setPagetype(type)
    }

    console.log(receivedConnections)
    console.log(sentConnections)

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 to-purple-100">
            <Head title="Connections" />
            <Navbar auth={auth} />
            <div className="container mx-auto px-4 py-16">
                <button
                    onClick={() => handelPageType('received')}
                >
                    Recived Connections
                </button>
                <button
                    onClick={() => handelPageType('sent')}
                >
                    Sended Connections
                </button>
            </div>

            {/* <div className="container mx-auto px-4 py-16">
                {pagetype === 'received' ? (
                    <div>
                        <h1>Received Connections</h1>
                        {receivedConnections.map((connection) => (
                            <div key={connection.id}>
                                <h3>{connection.sender.name}</h3>
                                <p>{connection.sender.email}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>Sent Connections</h1>
                        {sentConnections.map((connection) => (
                            <div key={connection.id}>
                                <h3>{connection.receiver.name}</h3>
                                <p>{connection.receiver.email}</p>
                            </div>
                        ))}
                    </div>
                )}
                </div> */}

        </div>
    )
}

export default Connections
