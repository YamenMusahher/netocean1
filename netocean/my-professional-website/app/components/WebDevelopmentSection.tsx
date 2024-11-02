// components/WebDevelopmentSection.tsx

import React from 'react';

const WebDevelopmentSection: React.FC = () => {
    return (
        <section className="bg-gray-50 text-darkblue py-20 px-10 lg:px-40 flex flex-col lg:flex-row items-center lg:items-start text-left lg:text-left">
            {/* Text content */}
            <div className="lg:w-1/2 max-w-lg lg:pr-16">
                <h2 className="text-blue-600 font-bold text-lg mb-2">Webutvikling</h2>
                <h3 className="text-4xl font-extrabold mt-2 mb-4">Utvikling av web-systemer</h3>
                <p className="text-gray-700 mb-6">
                    Vi hjelper deg å ta riktig valg når det kommer til plattform og teknologi. Med over 20 års erfaring innen utvikling av web-systemer som CMS, backend, admin-systemer, progressive webapplikasjoner m.m., skal du kjenne deg trygg på oss som leverandør.
                </p>
                <ul className="text-gray-700 mb-8 space-y-2">
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Publiseringssystemer (CMS)
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Backendsystemer
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Admin-systemer / backoffice
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Integrasjoner
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Webutvikling (frontend/backend)
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-green-500">✔️</span> Progressive Web App (PWA)
                    </li>
                </ul>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    Book et møte
                </button>
            </div>

            {/* Image content */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
                <img src="/images.jpeg" alt="Web system mockup" className="w-full max-w-lg" />
            </div>
        </section>
    );
};

export default WebDevelopmentSection;
