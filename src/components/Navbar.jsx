import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`fixed left-0 top-0 h-full z-50 bg-neutral-900 text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 border-r border-neutral-700/80`}>
      <div className="flex flex-col justify-between h-full px-4 py-4">
        {/* Top Section: Logo and Toggle Button */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
              <img className={`h-10 w-10 ${isCollapsed ? '' : 'mr-2'}`} src={logo} alt="Logo" />
              {!isCollapsed && <span className="text-xl tracking-tight">VirtualR</span>}
            </div>
            <button onClick={toggleSidebar} className="lg:hidden">
              {isCollapsed ? <Menu /> : <X />}
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className={`flex items-center space-x-2 hover:text-pink-500`}>
                  {item.icon && <item.icon className="h-6 w-6" />}
                  {!isCollapsed && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section: Sign In and Create Account */}
        <div className="flex flex-col items-center">
          <a href="#" className="block py-2 px-3 mb-4 border rounded-md w-full text-center hover:bg-gray-700">
            Sign In
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded-md bg-gradient-to-r from-pink-500 to-pink-800 w-full text-center hover:from-pink-600"
          >
            Create an account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
