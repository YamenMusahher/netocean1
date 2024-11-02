import React from 'react';

const Footer: React.FC = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    <p>© {new Date().getFullYear()} NetOcean. All rights reserved.</p>
  </footer>
);

export default Footer;
