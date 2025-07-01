import React, { useState } from 'react';

const TopNavbar = ({ toggleSidebar, title }: any) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  const notifications = [
    { id: 1, message: "New appointment request from John Doe", time: "5 minutes ago", isRead: false },
    { id: 2, message: "Dr. Smith updated a prescription", time: "1 hour ago", isRead: false },
    { id: 3, message: "Reminder: Staff meeting at 3 PM", time: "2 hours ago", isRead: true },
    { id: 4, message: "New patient registration: Jane Smith", time: "Yesterday", isRead: true }
  ];
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  // Format the title for display
  const formatTitle = (title: any) => {
    if (!title) return 'Pharmacy Dashboard';
    
    // Capitalize first letter and add "Dashboard" if it's just the section name
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    
    if (formattedTitle === 'Dashboard') {
      return 'Pharmacy Dashboard';
    }
    
    return formattedTitle;
  };
  
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-4 text-gray-500 md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">{formatTitle(title)}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* WhatsApp Notification Status */}
          <div className="hidden md:flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span>WhatsApp Connected</span>
          </div>
          
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                if (isProfileOpen) setIsProfileOpen(false);
              }}
              className="relative p-1 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-3 text-sm text-gray-500">No notifications</div>
                    ) : (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 ${notification.isRead ? '' : 'bg-blue-50'}`}
                        >
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="border-t border-gray-200 px-4 py-2">
                    <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">Mark all as read</a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View all notifications</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* User Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                if (isNotificationsOpen) setIsNotificationsOpen(false);
              }}
              className="flex items-center text-gray-700 focus:outline-none"
            >
              <span className="mr-2 text-sm hidden md:block">Admin</span>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                A
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Billing</a>
                  <div className="border-t border-gray-100"></div>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;