import React, { useState } from 'react';
import MenuSidebar from '../components/MenuSidebar';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

const DashboardLayout = () => {
    const [navText, setNavText] = useState('Daftar Transaksi');

    const changeNavText = (text) => {
        setNavText(text);
    };

    return (
        <>
            <MenuSidebar handleChangeNavText={changeNavText} />

            <div className="sm:ml-64">
                <Header navText={navText} />
                <MainSection />
            </div>
        </>
    );
};

export default DashboardLayout;
