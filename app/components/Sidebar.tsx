import React from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { RiDashboardFill } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { RiShoppingBagFill } from 'react-icons/ri';
import { SlSettings } from 'react-icons/sl';
import Image from 'next/image';

interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <div className='flex '>
      Sidebar
      <div className=' fixed  h-screen bg-white  w-20 border-r-[1px] border-black p-4 flex flex-col justify-between '>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-red-400 hover:bg-red-300 p-4 cursor-pointer rounded-2xl text-white  inline-blck '>
              <FaHome size={20} className='' />
            </div>
          </Link>

          <span className='border-b-[1px] border-gray-500 w-full p-2 '></span>

          <Link href='/'>
            <div className=' text-black p-4 rounded-2xl bg-gray-300  inline-blck my-3 cursor-pointer hover:bg-red-300 '>
              <RiDashboardFill size={20} className='' />
            </div>
          </Link>
          <Link href='/customers'>
            <div className=' text-black p-4 rounded-2xl bg-gray-300  inline-blck my-3 cursor-pointer hover:bg-red-300 '>
              <IoPersonOutline size={20} className='' />
            </div>
          </Link>
          <Link href='/orders'>
            <div className=' text-black p-4 rounded-2xl bg-gray-300  inline-blck my-3 cursor-pointer hover:bg-red-300 '>
              <RiShoppingBagFill size={20} className='/orders' />
            </div>
          </Link>

          <Link href='#'>
            <div className=' text-black p-4 rounded-2xl bg-gray-300  inline-blck my-3 cursor-pointer hover:bg-red-300 '>
              <SlSettings size={20} className='' />
            </div>
          </Link>
        </div>
      </div>
      <main className='w-full ml-20'>{children}</main>
    </div>
  );
};

export default Sidebar;
