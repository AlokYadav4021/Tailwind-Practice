import React, {useState} from 'react';

function Tailwind1(){
    return(
        <div className='flex items-center justify-between h-12 bg-gray-800 text-white px-4'>
            <div className='font-bold'>Login</div>
            <div className='flex gap-2'>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default Tailwind1