"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

function Header() {
  const path = usePathname();
  const { isSignedIn } = useAuth(); // Get authentication status

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className='border border-grey-800 rounded-lg  p-4 mx-4 md:mx-10 bg-transparent mt-4'>
      <div className='flex items-center justify-between'>
        {/* Text in place of Logo */}
        <Link href={'/'}>
          <h1 className='text-3xl font-extrabold text-gray-900 uppercase cursor-pointer'>
            EXPONENT.AI
          </h1>
        </Link>
        <ul className='hidden md:flex gap-4'>
          <Link href={'/dashboard'}>
            <li className={`transition-colors duration-300 ease-in-out transform hover:text-gray-800 cursor-pointer ${path == '/dashboard' && 'text-primary font-bold'}`}>
              DASHBOARD
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`transition-colors duration-300 ease-in-out transform hover:text-gray-800 cursor-pointer ${path == '/dashboard/faq' && 'text-primary font-bold'}`}>
              FAQ'S
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`transition-colors duration-300 ease-in-out transform hover:text-gray-800 cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}>
              UPGRADE
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`transition-colors duration-300 ease-in-out transform hover:text-gray-800 cursor-pointer ${path == '/dashboard/how' && 'text-primary font-bold'}`}>
              HOW IT WORKS?
            </li>
          </Link>
        </ul>
        {/* Profile Icon */}
        <div className="ml-4">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/sign-in"> {/* Link to sign-in page */}
              <button className="text-grey-900 transition duration-300">
                LOGIN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
