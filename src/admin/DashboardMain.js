// src/App.js
import React from 'react';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import MainContent from './MainContent';
import { useState } from 'react';
import Dashbord from './Dashboard/Dashbord';
import AddCategory from './Category/addCategory';
import CategoryList from './Category/categoryList';



function DashboardMain() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex max-w-8xl mx-auto">
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
