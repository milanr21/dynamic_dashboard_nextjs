import React from 'react';
import { TbShoppingCartDollar } from 'react-icons/tb';

import { Data } from '../data/data';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 m-auto p-4 h-[50vh] lg:h-[70vh] bg-white rounded-lg border overflow-scroll'>
      <h2 className=' p-2 font-semibold text-lg md:text-xl tracking-widest '>
        Recent Activities
      </h2>

      <ul>
        {Data.map((item) => (
          <li
            key={item.id} // Use a unique identifier as the key
            className='p-2 my-2 gap-4  flex flex-row justify-between cursor-pointer   items-center bg-gray-200 hover:bg-gray-300 rounded-lg'
          >
            <div className='flex flex-row gap-4 items-center justify-center'>
              <div className='bg-purple-500 p-2 rounded-lg'>
                {/* Make sure to import TbShoppingCartDollar if it's a custom component */}
                <TbShoppingCartDollar size={25} />
              </div>

              <div className='gap-1 ml-3 flex flex-col'>
                <p className='text-xs font-semibold md:text-sm'>
                  ${item.total}
                </p>

                <p className='text-xs tracking-widest font-semibold'>
                  {item.name.firstName} {item.name.lastName}
                </p>
              </div>
            </div>
            <p className='text-sm hidden md:block font-normal absolute  right-20 '>
              {item.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
