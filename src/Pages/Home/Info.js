import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/clock.jpg';
import location from '../../assets/location.png';
import contact from '../../assets/contact.jpg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-3'>

            <InfoCard cardTitle="Opening Hours"  img={clock}></InfoCard>

            <InfoCard cardTitle="Our Locations" img={location}></InfoCard>

            <InfoCard cardTitle="Contact Us" img={contact}></InfoCard>
        </div>
    );
};

export default Info;