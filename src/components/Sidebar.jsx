
import { useState } from 'react';
import { Home, PenLine, Users, Gift, User, LogOut, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigationItems = [
    { icon: Home, alt: 'Home', href: '#' },
    { icon: PenLine, alt: 'Write', href: '#' },
    { icon: Users, alt: 'Community', href: '#' },
    { icon: Gift, alt: 'Rewards', href: '#' },
    { icon: User, alt: 'Profile', href: '#' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed z-50 md:hidden bg-calmblue rounded-full p-2 text-white top-4 left-4 shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-20 bg-calmblue flex flex-col items-center py-8 transition-transform duration-300 shadow-xl z-40
                   ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="mb-16">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <span className="text-calmblue font-bold text-sm">LOGO</span>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex-1 flex flex-col items-center space-y-10">
          {navigationItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
              title={item.alt}
            >
              <item.icon size={24} />
            </a>
          ))}
        </div>

        {/* Logout Button */}
        <a 
          href="#" 
          className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 mt-10"
          title="Logout"
        >
          <LogOut size={24} />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
