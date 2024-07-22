import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
            <section className="py-20 sm:py-24 lg:py-32 bg-white-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                                Manage Your Contacts
                                <span className="block relative">
                                    <span className="absolute inset-x-0 bottom-0 border-b-8 border-orang-400"></span>
                                    <span className="relative text-black-600">Effortlessly</span>
                                </span>
                            </h1>
                            <p className="mt-8 text-xl text-gray-700 sm:text-2xl">
                                With ContactManager, keep all your contacts organized and easily accessible from anywhere. Enjoy seamless management and editing of your contact list.
                            </p>
                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <NavLink to="/dashboard" className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition duration-200">
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full rounded-lg shadow-lg" src="pic.png" alt=" Manager IllContactustration" />
                            <span className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-20 transform translate-x-12 -translate-y-12"></span>
                            <span className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full opacity-20 transform translate-x-6 translate-y-6"></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl lg:text-5xl">Key Features</h2>
                    <p className="mt-4 text-lg text-center text-gray-600 sm:text-xl lg:text-2xl">Discover the powerful features that make ContactManager the best tool for managing your contacts.</p>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m7 7l-7-7 7-7" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">Easy Import/Export</h3>
                            <p className="mt-2 text-base text-gray-600">Easily import and export your contacts with just a few clicks, making data management seamless.</p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">Secure Storage</h3>
                            <p className="mt-2 text-base text-gray-600">Keep your contacts safe and secure with our advanced encryption and security features.</p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10l3-3m-3 6l3 3H3m0-6h16v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">Customizable Fields</h3>
                            <p className="mt-2 text-base text-gray-600">Customize contact fields to suit your needs and manage your data more effectively.</p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15h6l6-6H9l-6 6z" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">Seamless Integration</h3>
                            <p className="mt-2 text-base text-gray-600">Integrate with other tools and services seamlessly to streamline your workflow.</p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8V4m0 0L8 8m4-4l4 4M4 12h16" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">Real-time Updates</h3>
                            <p className="mt-2 text-base text-gray-600">Get real-time updates and notifications to stay informed about changes in your contact list.</p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <svg className="w-12 h-12 mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-800">User-friendly Interface</h3>
                            <p className="mt-2 text-base text-gray-600">Enjoy a clean, intuitive interface that makes managing your contacts a breeze.</p>
                        </div>
                    </div>
                </div>
            </section>
           
            <Footer />
        </div>
        </div>
        
    );
};

export default HomePage;
