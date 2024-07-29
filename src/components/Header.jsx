import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="">
            <div class="px-4 mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 lg:h-20">
                    <div class="flex-shrink-0">
                        <a href="#" title="" class="flex">
                            <img class="w-auto h-20" src="Logoo.jpeg" alt="logo" />
                        </a> 
                    </div>
                    
                    <button type="button" class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
    
                        <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
    
                    <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <Link to="/Home" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
    
                        <Link to="/About" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About </Link>
    
                        <Link to="/dashboard" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact-Mnager </Link>
    
                        <Link to="/ContactUs" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact </Link>
    
                        <div class="w-px h-5 bg-black/20">     </div>
    
                       
                    </div>
                </div>
               
            </div>
        </header>
    );
};

export default Header;