import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Data } from '../data/data';
import { BsThreeDotsVertical } from 'react-icons/bs';


const Orders = () => {
    return (
        <div className='bg-gray-200 min-h-screen' >
            <div className='flex justify-between p-4' >


                <h2 className=' p-2 font-semibold text-xl md:text-2xl tracking-widest '  >Orders</h2>
                <h2 className='bg-red-300 p-2 flex items-center justify-center  rounded-lg text-white tracking-widest  font-bold text-lg'  >Welcome to the Orders Page</h2>



            </div>
            <div className='m-4' >
                <div className="bg-white w-full m-auto p-4 border rounded-lg"  >

                    <div className=' p-2 my-2 flex-row bg-purple-400 rounded-lg uppercase
                tracking-wider  justify-between items-center
                
                grid md:grid-cols-4 text-white font-semibold sm:grid-cols-3 grid-cols-2
                
                '   >
                        <span>Order</span>
                        <span className='text-right sm:text-left'  > Status</span>

                        <span className='hidden sm:grid' >Last Order</span>

                        <span className='hidden sm:grid'   >Payment Method</span>

                    </div>

                    <ul>
                        {
                            Data.map((item, index) => (
                                <li key={index} className='grid bg-red-100 text-sm rounded-lg gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                            
                            hover:bg-red-200 cursor-pointer transition-all duration-300
                            
                            justify-between items-center p-2 my-2'  >

                                    <div className='flex flex-row items-center  '  >
                                        <div className='bg-red-400 text-white p-1 rounded-lg' >
                                            <RiShoppingCart2Fill size={15} />
                                        </div>

                                        <p className='pl-4  flex flex-col items-center justify-center' >
                                            <span className=' tracking-widest  font-bold' >${item.total}</span>

                                            <span className='text-[12px] tracking-wide font-normal' >{item.name.firstName}</span>


                                        </p>
                                    </div>
                                    <p className='text-right sm:text-left uppercase tracking-widest font-medium  '  >
                                        {item.status}


                                    </p>
                                    <p className='hidden sm:grid'  >{item.date}</p>


                                    <div className='hidden sm:flex flex-row justify-between items-center ' >
                                        <p className='hidden sm:grid uppercase tracking-widest font-medium '   >{item.method}</p>
                                        <BsThreeDotsVertical size={20} className="hover:text-white transition duration-300 cursor-pointer" />
                                    </div>



                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Orders