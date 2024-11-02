import React from 'react';

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center px-10 py-5">
    {/* Company Name with Color Accent */}
    <div className="text-2xl font-bold">
      Net<span className="text-blue-500">Ocean</span> {/* Add accent color to "Ocean" */}
    </div>

    {/* Menu Items and CTA Button */}
    <div className="flex items-center space-x-6">
      <a href="#services" className="hover:text-gray-300">Tjenester</a>
      <a href="#projects" className="hover:text-gray-300">Prosjekter</a>
      <a href="#about" className="hover:text-gray-300">Om oss</a>
      <a href="#contact" className="hover:text-gray-300">Kontakt oss</a>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
        Book et møte
      </button>
    </div>
  </nav>
);

export default Navbar;
