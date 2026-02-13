import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      <Sidebar />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 lg:pl-24">
        <Hero />
        <About />
        <Services />
        <Work />
        <Team />
        <Footer />
      </main>
      <ContactModal />
    </div>
  );
};

export default App;