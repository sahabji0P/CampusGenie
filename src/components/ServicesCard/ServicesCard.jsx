import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import './ServicesCard.css'; // Importing the custom CSS file

const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const ServicesCard = ({ service }) => {
    const { image, title, description } = service;

    return (
      // <Tilt options={defaultOptions} className="services-card">
      //     <div className='w-full'>
      //         <img src={image} alt={title} className='service-image' />
      //     </div>
      //     <div className='content'>
      //         <h5 className="service-title">{title}</h5>
      //         <p className="service-description">{description}</p>
      //     </div>
      // </Tilt>

      <Tilt options={defaultOptions} className="services-card">
        <div>
          <img src={image} alt={title} className="service-image" />
        </div>
        <div className="content">
          <h5 className="service-title">{title}</h5>
          <p className="service-description">{description}</p>
        </div>
      </Tilt>
    );
}

ServicesCard.propTypes = {
    service: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ServicesCard;
