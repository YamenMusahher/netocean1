// app/page.tsx

import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServiceSection from './components/ServiceSection'; // Correct import for ServiceSection
import WebDevelopmentSection from './components/WebDevelopmentSection'; // Correct import for WebDevelopmentSection

const Page: React.FC = () => (
  <>
    <Navbar />
    <HomePage />
    <ServiceSection /> 
    <WebDevelopmentSection />
  </>
);

export default Page;
