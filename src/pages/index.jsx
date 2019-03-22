import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Homepage = () => (
  <BaseLayout>
    <Hero
      image
      title='Guide to'
      main={{
        content: 'the eviction process',
        class: 'largeText'
      }}
      buttonContent={{
        text: '',
        url_pdf: '/Guide-to-the-eviction-process-online.pdf',
        url_form: 'https://docs.google.com/forms/d/e/1FAIpQLSf_ON6GV5xOnZCaIBJQh-oWY6cAxph2UCYFL6NqMQtMVWOn9g/viewform?usp=sf_link',
        target: '_blank'
      }}
    />
    {/* <SectionsList /> */}
    <Footer />
  </BaseLayout>
);

export default Homepage;