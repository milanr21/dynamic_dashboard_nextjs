import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between px-4 py-2  rounded-lg  mt-3 mx-4' >
            <h2 className=' p-2 font-semibold text-xl md:text-2xl tracking-widest '  >Dashboard</h2>
            <h2 className='bg-red-300 p-2 flex items-center justify-center  rounded-lg text-white tracking-widest  font-bold text-lg'  >Welcome Back, Client</h2>

        </div>
    )
}

export default Header