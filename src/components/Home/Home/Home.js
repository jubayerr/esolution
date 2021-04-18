import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import Header from '../../Shared/Header/Header';
import Service from '../Service/Service';
import Team from '../Team/Team';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../../Contact/Contact';



const Home = () => {
    return (
        <section className="home">
            <Header />
            <Banner />
            <Service />
            <Team />
            <Reviews />
            <Contact />
            <Footer />
        </section>
    );
};

export default Home;