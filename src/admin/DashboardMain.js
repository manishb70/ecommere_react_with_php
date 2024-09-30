// src/App.js
import React from 'react';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import MainContent from './MainContent';
import { useState } from 'react';

function DashboardMain() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Section */}
            <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`}>
                {/* Topbar */}
                <Topbar toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <MainContent />
            </div>
        </div>
    );
}

export default DashboardMain;
