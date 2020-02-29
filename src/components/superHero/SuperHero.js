import React from 'react';
import { Link } from 'react-router-dom';
// import defaultImage from '../../images/captainamerica.jpg';

import './SuperHero.css';

const SuperHero = (props) => {
  const { name, images } = props.info;
  return (
    <article className="superhero">
      <div className="img-container">
        <img src={images[0].url} alt="superhero" />
        <Link to={`/`} className="btn-primary superhero-link">
          See More
        </Link>
      </div>
      <p className="superhero-info">{name}</p>
    </article>
  );
};

export default SuperHero;
