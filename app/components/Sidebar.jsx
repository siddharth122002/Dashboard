"use client"
import Link from 'next/link'
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TbTransactionDollar } from "react-icons/tb";
function Sidebar() {
    const path = usePathname()
    const links = [
        { href: '/dashboard', icon: <MdDashboard />, label: 'Dashboards' },
        { href: '/dashboard/users', icon: <CiUser />, label: 'Users' },
        { href: '/dashboard/products', icon: <MdOutlineProductionQuantityLimits />, label: 'Products' },
        { href: '/dashboard/transactions', icon: <TbTransactionDollar />, label: 'Transactions' }
    ];
    return (
        <div className='w-1/4 bg-zinc-900 h-screen border-r-[1px] border-zinc-700'>
            <div className='flex p-4 items-center w-full gap-2 mb-4 border-b-[1px] border-zinc-700 '>
                <img src='https://www.svgrepo.com/show/354113/nextjs-icon.svg' className='w-8 bg-white rounded-2xl' />
                NXT
            </div>
            {links.map(link => (
                <Link key={link.href} href={link.href}>
                    <div className={`flex justify-center transition-all duration-300 items-center text-xl w-11/12 mx-auto rounded p-3 mb-3 gap-2 
                        ${path === link.href ? 'bg-zinc-800' : 'hover:bg-zinc-800'}
                        `}>
                        {link.icon}
                        {link.label}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
