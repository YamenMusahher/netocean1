// components/ServiceSection.tsx

import React from 'react';

const ServiceSection: React.FC = () => {
    return (
        <section className="bg-gray-100 text-darkblue py-20 px-10 text-center">
            <h2 className="text-blue-600 font-bold text-lg">Nettside</h2>
            <h3 className="text-3xl font-extrabold mt-2">En solid plattform for utvikling av nettsider</h3>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Med vårt profesjonelle team kan vi utvikle nettsider av høy kvalitet til en rimelig pris. Vi tilbyr et bredt spekter av moduler og integrasjonsmuligheter for å skape en brukervennlig og effektiv digital plattform for din bedrift.
            </p>
            <ul className="text-left mt-6 space-y-2 max-w-md mx-auto">
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> CMS-system for publisering
                </li>
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> Tekst, bilder, video og lyd
                </li>
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> Målrettede push-varsler
                </li>
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> Medlemsskap / Abonnement
                </li>
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> Booking
                </li>
                <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span> Planlegging og organisering
                </li>
            </ul>
            <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full">
                Book et møte
            </button>
        </section>
    );
};

export default ServiceSection;
