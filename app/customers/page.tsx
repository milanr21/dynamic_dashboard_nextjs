import React from 'react'

import { MdPerson2 } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Data } from '../data/data';




const Customers = () => {
    return (
        <div className='bg-gray-200 min-h-screen' >
            <div className='flex justify-between p-4' >
                <h2>Customers</h2>
                <h2>Welcome to the Customers Page</h2>



            </div>
            <div className='m-4' >
                <div className="bg-white w-full m-auto p-4 border border-black rounded-lg"  >

                    <div className=' p-2 my-2 flex-row bg-purple-400 rounded-lg uppercase
                    tracking-wider font-normal justify-between items-center
                    
                    grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2
                    
                    '   >
                        <span>Name</span>
                        <span className='text-right sm:text-left'  > Email</span>

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
                                            <MdPerson2 size={15} />
                                        </div>

                                        <p className='pl-4' > {item.name.firstName} {item.name.lastName}</p>
                                    </div>
                                    <p className='text-right sm:text-left'  >{item.status}</p>
                                    <p className='hidden sm:grid'  >{item.date}</p>


                                    <div className='hidden sm:flex flex-row justify-between items-center ' >
                                        <p className='hidden sm:grid'   >{item.method}</p>
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

export default Customers