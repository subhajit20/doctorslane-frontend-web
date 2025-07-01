import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
type Props = {}

function ModuleContainer({}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleMenuClick = (menu:any) => {
    setActiveMenu(menu);
  };
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <SideBar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <TopNavbar 
          toggleSidebar={toggleSidebar} 
          title={activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ModuleContainer