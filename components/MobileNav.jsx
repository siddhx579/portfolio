"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: 'home', path: '/' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'blogs', path: '/blogs' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className='sr-only'>Hidden</SheetTitle>
                <div className="mt-20 mb-20 text-center text-2xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <h1 className="text-4xl font-semibold">
                            Siddhant<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            onClick={() => setOpen(false)}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;