import React from 'react';

const HomePage: React.FC = () => (
  <div>
    {/* Fullscreen Dark Blue Section */}
    <section className="h-screen bg-darkblue text-white text-center flex flex-col justify-center items-center px-10 relative">
      <h1 className="text-5xl font-bold mb-4">Vi lager profesjonelle nettsider og nettbutikker.</h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Vårt webutviklingsteam hjelper bedrifter med å etablere en robust og innbydende digital plattform, som vil støtte og fremme deres forretningsmål.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-darkblue transition-all">
          Se våre tjenester
        </button>
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-darkblue transition-all">
          Se priser
        </button>
      </div>
      {/* Mockup image section */}
      <div className="mt-8">
        <img src="/image.png" alt="Mockup phones" className="mx-auto w-3/4 lg:w-1/2"/>
      </div>
    </section>

    {/* Wave divider */}
    <div className="bg-darkblue relative">
      <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E3F2FD" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192V320H0Z"/>
      </svg>
    </div>

    {/* Light Blue Section */}
    <section className="bg-lightblue text-darkblue text-center py-20 px-10">
      <h2 className="text-4xl font-bold mb-4">Nettsider og nettbutikker som driver bedriften fremover.</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Vi tilbyr en rekke tjenester relatert til nettsider og nettbutikker, for å hjelpe bedrifter med å etablere en effektiv og brukervennlig digital tilstedeværelse.
      </p>
    </section>
  </div>
);

export default HomePage;
