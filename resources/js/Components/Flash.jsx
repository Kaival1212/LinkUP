import React, { useEffect, useState } from 'react';

function Flash({ message, type }) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const typeStyles = {
        success: {
            bg: 'bg-green-100',
            border: 'border-green-400',
            text: 'text-green-700',
            icon: 'text-green-500',
        },
        error: {
            bg: 'bg-red-100',
            border: 'border-red-400',
            text: 'text-red-700',
            icon: 'text-red-500',
        },
    };

    const styles = typeStyles[type] || typeStyles.success;

    return (
        <div
            className={`${styles.bg} ${styles.border} ${styles.text} px-4 py-3 rounded fixed z-10 flex justify-center items-center mt-2`}
            role="alert"
        >
            <strong className="font-bold">{type === 'success' ? 'Success!' : 'Error!'}</strong>
            <span className="block sm:inline ml-2">{message}</span>
            <button
                onClick={() => setIsVisible(false)}
                className="top-0 bottom-0 right-0 px-4 py-3"
            >
                <svg
                    className={`fill-current h-6 w-6 ${styles.icon}`}
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <title>Close</title>
                    <path
                        fillRule="evenodd"
                        d="M14.95 5.05a.75.75 0 0 1 1.06 1.06L11.06 10l4.95 4.95a.75.75 0 0 1-1.06 1.06L10 11.06l-4.95 4.95a.75.75 0 0 1-1.06-1.06L8.94 10 4.99 5.05a.75.75 0 0 1 1.06-1.06L10 8.94l4.95-4.95z"
                    ></path>
                </svg>
            </button>
        </div>
    );
}

export default Flash;
