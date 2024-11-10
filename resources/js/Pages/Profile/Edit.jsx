import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Navbar from '@/Layouts/Navbar';

export default function Edit({ mustVerifyEmail, status, auth }) {
    return (
        <div >
            <Navbar auth={auth} />
            <div className='min-h-[200vh] flex flex-col bg-gradient-to-br from-pink-100 to-purple-100'>
                <div className='flex-grow pt-16'>
                    
                </div>
            </div>
        </div>
    );
}
