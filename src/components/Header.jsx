import React from 'react';

const Header = ({ navText }) => {
    return (
        <div className="h-[65px] sm:pl-8 px-4 sm:pr-[72px] border-b border-solid border-[#E7E8EC] flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <button
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
                <h3 className="text-xl font-medium">{navText}</h3>
            </div>
            <div className="p-[3px] pl-[4px] border border-[#E7E8EC] hidden sm:flex items-center gap-1 rounded-full cursor-pointer">
                <div className="w-7 aspect-square rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="w-7 aspect-square rounded-full bg-slate-500"></div>
            </div>
        </div>
    );
};

export default Header;
