import React from 'react';
import Image from '../utils/logo.png'

function Home() {
    return (
        <div className="h-screen flex">
            <div className="h-screen">

            <div className="bg-gray-800 w-full h-full flex flex-col justify-center items-center">
            
            <div className="m-auto text-center">
            <h1 className=" text-gray-800 m-auto text-3xl w-full">Viva México</h1>
            <div className="w-3/4 m-auto  p-8 rounded-full">
            <img className="w-full text-gray-100" src={Image} alt="logo"
            />
            </div>
            <h1 className=" text-gray-800 m-auto text-2xl   w-full">Cabrones!</h1>
            </div>
            </div>
            </div>

           
            
        </div>
    )
}

export default Home
