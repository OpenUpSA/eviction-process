import React from 'react'

import BaseLayout from '../components/BaseLayout';
import Hero from '../components/Hero';
// import SectionsList from '../components/SectionsList';
import Footer from '../components/Footer';

const notFound = () => (
  <BaseLayout>
    <Hero
      title='This resource is still being developed'
      main = {{
        content: 'Check back soon',
        class: 'largeText404'
      }}
      buttonContent = {{
        text: 'Visit the homepage',
        url: '/',
        target: '_self'
      }}
      paragraph = 'We are currently working hard to develop and publish this resource! Please check back soon or join our mailing list to receive updates about this guide.'
    />
    {/* <SectionsList /> */}
    <Footer />
  </BaseLayout>
);


export default notFound;