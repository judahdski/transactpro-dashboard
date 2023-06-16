import React from 'react';
import MainDashboard from '../pages/MainDashboard';
import InputTransaction from '../pages/InputTransaction';
import { Route, Routes } from 'react-router-dom';

const MainSection = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route path='/' element={<MainDashboard />} />
                <Route path='/input_transaction' element={<InputTransaction />} />
            </Routes>
        </div>
    );
};

export default MainSection;
