import React from 'react';
import './Hero-banner.css';

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="col-3 left-banner"></div>
            <div className="text col-6 ">
                <h1>SFQ AC STORE</h1>
                <p>Selamat Datang Di Toko AC Kami.</p>
            </div>
            <div className="col-3 right-banner"></div>
        </div>
    );

}

export default HeroBanner;
