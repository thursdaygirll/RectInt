import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Section from '../components/Section';
import VenueCards from '../components/VenueCards';
import Footer from '../components/Footer';

// Import the images directly to ensure proper resolution
import cateringImage from '../assets/images/aniket-narula-5_mQ5qhfCE4-unsplash.jpg';
import mobiliarioImage from '../assets/images/nick-fewings-yzqR-1tZVKI-unsplash-2.jpg';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      
      {/* Section for Catering */}
      <Section
        title="Catering"
        description="Encuentra a tu proveedor ideal en nuestra amplia selección. Ofrecemos una variedad de opciones de catering, incluyendo opciones veganas y tomando en cuenta las restricciones de tus invitados."
        image={cateringImage}  // Use imported image
        link="/catering"
        buttonText="Descubre más"
      />
      
      {/* Section for Mobiliario */}
      <Section
        title="Mobiliario"
        description="Encuentra el estilo perfecto para tu evento. Nuestra colección de mobiliario incluye sillas y mesas elegantes para darle armonía a tu evento."
        image={mobiliarioImage}  // Use imported image
        link="/mobiliario"
        buttonText="Descubre más"
      />
      
      <VenueCards />
      <Footer />
    </div>
  );
};

export default Home;