import React from 'react';
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
// @ts-ignore
import Resume from '../sections/Resume';
// import Writing from '../sections/Writing';
import Footer from '../components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Resume />
    {/* <Writing /> */}
    <Footer />
  </Layout>
);

export default Home;
