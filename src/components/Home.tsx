import React from 'react';
import Hero from './Hero';
import QualitySection from './Qualitysection';
import ServicesOverview from './Servicessection';
import WhyChooseUs from './ChooseUssection';
import BeforeAfterGallery from './AfterGallerysection';
import MeetTheTeam from './MeetTeamsection';
import ContactUs from './Contactus';

const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <QualitySection />
      </section>
      <section id="services">
        <ServicesOverview />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="gallery">
        <BeforeAfterGallery />
      </section>
      <section id="team">
        <MeetTheTeam />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default HomePage;