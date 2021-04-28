import React from 'react';
import './Banner.css';
import BannerImg from '../../../images/banner-image.jpg'
// import ButterflyImg from '../../../images/butterfly.png'


const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h1 className="hero-text">We offer modern <br /> solutions for <br /> growing your <br /> business</h1>
                        <p className="lead py-2">We are team of talented designers <br /> making websites with React</p>
                        <button>See More</button>
                    </div>
                    <div className="col-md-6">

                        <img src={BannerImg} className="img-fluid" alt="Banner Image" />
                        {/* <img src={ButterflyImg} className="img-fluid butterfly" alt="Banner Image" /> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;