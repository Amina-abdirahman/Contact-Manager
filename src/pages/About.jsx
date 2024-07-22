import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function About() {
    return (
        <div>
            <Header />
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    About Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                                    Efficiently Manage Your Contacts with ContactManager
                                </h2>
                                <p className="mb-5 text-base text-body-color">
                                    Our Contact Manager helps you keep all your contacts in one place, accessible from anywhere. It allows you to efficiently manage, edit, and organize your contact list with intuitive features designed to enhance your productivity.
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                    Ensure a consistent brand image with a domain name that matches your business. Our Contact Manager makes it easy to maintain up-to-date contact information, ensuring you never miss an important connection.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 flex justify-center">
                            <div className="relative z-100 my-4 w-full max-w-md">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                                    alt="Contact Manager Illustration"
                                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                                    style={{ maxHeight: '500px', objectPosition: 'top' }}
                                />
                                <span className="absolute -right-7 -bottom-7 z-[-1]">
                                    <svg
                                        width="134"
                                        height="106"
                                        viewBox="0 0 134 106"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Add your SVG here */}
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
