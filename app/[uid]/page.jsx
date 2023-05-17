"use client";

import { auth } from '../../config/firebase';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();

    const user = auth.currentUser;

    const logout = () => {
       auth.signOut();
       router.push('/login');
    }

    return (
        <section>
            <h1>Dashboard</h1>
            <p>User logged in: {user.uid}</p>
            <button onClick={logout}>Sign Out</button>
        </section>


    )
}

export default page;