
import { useRouter } from 'next/router';
import React from 'react';
import { Header } from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <div className='h-screen w-screen flex flex-col overflow-hidden bg-primary-100'>
            <Header />
            <div className="flex-1 p-4 overflow-x-hidden overflow-y-auto scrollbar flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Layout;