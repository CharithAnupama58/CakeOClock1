import React from 'react';
import image7 from '../images/image 7.png'
import image8 from '../images/_ (1).png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='flex bg-black items-center'>
            <div className='h-full w-1/2'>
                <img src={image7} className='object-cover'></img>

                <div className="absolute top-36 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-5xl font-bold">"Indulge in the</h1>
                    <h1 className='text-5xl font-bold'>extraordinary at Cake O’</h1>
                    <h1 className='text-5xl font-bold'>Clock.”</h1>

                    <div className='absolute top-64 left-12'>
                        <span className="block text-2xl mt-5">"Our cakes are more than desserts; they're</span>
                        <span className="block text-2xl">crafted experiences. From classic recipes to</span>
                        <span className="block text-2xl">innovative designs, we take pride in creating</span>
                        <span className="block text-2xl">confections that elevate your celebrations to</span>
                        <span className="block text-2xl">new heights."</span>
                    </div> 
                </div>
            </div>

            <div className='h-96 w-1/4 flex ml-52 justify-center bg-white rounded-xl border border-gray-300'>
                <div>
                    <Link to='/'><a href='/home'>
                        <img src={image8} alt='Icon'></img>
                    </a></Link>
                    <h2 className="text-4xl font-bold mt-7 ml-36">Login</h2>
                    <input className='mt-12 w-80 ml-8 border-4 focus:border-black rounded-xl' type='text' placeholder='User Name'/>
                    <input className='mt-8 w-80 ml-8 border-4 focus:border-black rounded-xl' type='text' placeholder='Password'/>

                    <button  className='mt-20 w-32 ml-32 border-solid border-white-800 border-4 rounded-xl hover:bg-slate-500 font-semibold'>Login</button>
                </div>
            </div>

        </section>
    );
};

export default Login;
