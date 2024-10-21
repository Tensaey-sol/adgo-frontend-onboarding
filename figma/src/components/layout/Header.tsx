import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../../assets/Company Logo.svg'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-blue-950 px-8 py-6 text-white shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img
          loading="lazy"
          src= {CompanyLogo}
          className="object-contain w-32"
          alt="Company logo"
        />
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
