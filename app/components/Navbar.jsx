"use client";
import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { usePathname } from 'next/navigation';
function Navbar() {
    const path = usePathname();
    return (
        <div className='w-3/4 h-24  fixed right-0'>
            <div className='bg-zinc-900 m-4 p-4 rounded flex justify-between items-center'>
                <h1 className='font-bold text-lg uppercase'>{path.split('/').pop()}</h1>
                <div className='flex items-center justify-around gap-3'>
                    <CiSearch className='hover:cursor-pointer relative left-8' />
                    <input type="text"
                        className='bg-transparent outline-none bg-zinc-800 rounded p-1 pl-8'
                        placeholder='Search...' />
                    <CiGlobe className='text-xl' />
                    <FaRegMessage />
                    <IoIosNotificationsOutline className='text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar