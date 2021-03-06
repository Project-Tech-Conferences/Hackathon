import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Footer from '../components/Footer';
import Schedule from '../sections/Schedule';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Challenge />
    <Schedule />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
