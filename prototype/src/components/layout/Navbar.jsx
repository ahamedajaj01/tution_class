import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To detect which page is active

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Programs", href: "/programs" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f4fafa] shadow-sm px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo Link */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 md:h-12 w-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95" 
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name} className="relative group">
                <Link 
                  to={link.href}
                  className={`
                    block transition-all duration-300 ease-in-out hover:scale-105
                    ${isActive ? 'text-[#2ecc71] font-bold' : 'hover:text-[#004047]'}
                  `}
                >
                  {link.name}
                </Link>
                {/* Underline effect - shows on hover or if active */}
                <span className={`
                  absolute left-0 bottom-[-4px] h-[2px] bg-[#2ecc71] transition-all duration-300
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to="/book-now">
            <button className="bg-[#004047] text-white px-6 py-2 rounded-sm flex flex-col items-center leading-tight transition-all duration-300 hover:bg-[#002f35] hover:shadow-lg active:scale-95">
              <span className="text-lg font-semibold">Free Trail</span>
              <span className="text-[10px] uppercase tracking-tighter">Book Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden p-2 text-slate-700 transition-colors hover:text-[#004047]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl z-50`}>
        <ul className="flex flex-col p-6 space-y-4 font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name}
                to={link.href}
                className={`${isActive ? 'text-[#2ecc71]' : 'hover:pl-2'} border-b border-slate-100 pb-2 transition-all duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/book-now" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#004047] text-white py-4 rounded-sm font-bold active:bg-[#002f35] transition-colors">
              BOOK A FREE TRAIL
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;