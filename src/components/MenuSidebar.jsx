import React from 'react';
import { logo } from '../assets/index';
import { NavLink } from 'react-router-dom';

const MenuSidebar = ({ handleChangeNavText }) => {
    return (
        <div>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-6 py-5 overflow-y-auto bg-white border-r border-solid border-[#E7E8EC]">
                    <a href="" class="flex justify-center items-center h-[65px] -mt-5 -mx-6 mb-6">
                        <img src={logo} alt="" />
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-200"
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? '#F2F2F2' : '#fff',
                                    };
                                }}
                                onClick={() => handleChangeNavText('Dashboard')}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/input_transaction"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? '#F2F2F2' : '#fff',
                                    };
                                }}
                                onClick={() => handleChangeNavText('Input Transaction')}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Input Transaksi</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul class="block sm:hidden absolute bottom-0 pt-4 mb-4 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default MenuSidebar;
