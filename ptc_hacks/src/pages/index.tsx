import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Challenge from '../sections/Challenge';
import Sponsorship from '../sections/Sponsorship';
import Faq from '../sections/Faq';
import Schedule from '../sections/Schedule';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Challenge />
    <Sponsorship />
    <Faq />
    <Schedule />
  </Layout>
);

export default IndexPage;
