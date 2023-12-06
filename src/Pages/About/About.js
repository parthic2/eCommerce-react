import React from 'react';
import Header from '../../Components/Home1/Header/Header';
import Footer from '../../Components/Home1/Footer/Footer';
import Breadcrumb from '../../Common/Breadcrumb';
import Service from './Service';
import ChooseUs from './ChooseUs';
import FAQ from './FAQ';
import Banner from '../../Common/Banner';

const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        home="home"
        ser="About us"
        title="About "
        title1="Company"
      />

      <Service />
      <ChooseUs />
      <FAQ />
      <Banner />
      <Footer />
    </>
  )
}

export default About;