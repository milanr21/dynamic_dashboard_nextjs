import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";

const TopCards = () => {
    return (
        <div className='gap-4 p-4 grid lg:grid-cols-5'  >

            <div className='col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg' >
                <div className='flex flex-row justify-between w-full' >

                    <div className='flex flex-col w-full pb-2'  >
                        <p className='text-xl md:text-2xl font-bold'  >$555</p>
                        <p className='text-sm md:text-base'   >Daily Revenue</p>

                    </div>

                    <p className='font-bold flex flex-col justify-between space-y-4' >

                        <span className='bg-purple-500 px-2 flex items-center cursor-pointer hover:bg-purple-400 text-white justify-center py-3 rounded-lg' >
                            <FaMoneyBillTrendUp size={20} />
                        </span>




                        <span className='text-base md:text-lg 
                    
                    px-2 py-4 rounded-lg 
                    
                    bg-green-300'  >+18%</span>
                    </p>

                </div>

            </div>

            <div className='col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg' >

                <div className='flex flex-row justify-between w-full' >

                    <div className='flex flex-col w-full pb-2'  >
                        <p className='text-xl md:text-2xl font-bold'  >$431,500</p>
                        <p className='text-sm md:text-base'   >Daily Transaction</p>

                    </div>

                    <p className='font-bold flex flex-col justify-between space-y-4' >

                        <span className='bg-purple-500 px-2 flex items-center cursor-pointer hover:bg-purple-400 text-white justify-center py-3 rounded-lg' >
                            <GiWallet size={20} />
                        </span>

                        <span className='text-base md:text-lg 

px-2 py-4 rounded-lg 

bg-green-300'  >+18%</span>
                    </p>

                </div>
            </div>

            <div className='  bg-white flex justify-between w-full border p-4 rounded-lg' >
                <div className='flex flex-row justify-between w-full' >

                    <div className='flex flex-col w-full pb-2'  >
                        <p className='text-xl md:text-2xl font-bold'  >3M+</p>
                        <p className='text-sm md:text-base'   >Total Subscribers</p>

                    </div>

                    <p className='font-bold flex flex-col justify-between space-y-4' >

                        <span className='bg-purple-500 px-2 flex items-center cursor-pointer hover:bg-purple-400 text-white justify-center py-3 rounded-lg' >
                            <FaPeopleGroup size={20} />
                        </span>




                        <span className='text-base md:text-lg 

px-2 py-4 rounded-lg 

bg-green-300'  >+18%</span>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default TopCards