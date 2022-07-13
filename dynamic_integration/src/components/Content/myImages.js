import React from 'react';

import m51 from 'src/assets/images/whirlpool.jpeg';
import m13 from 'src/assets/images/m13.jpeg';
import m42 from 'src/assets/images/m42.jpeg';
import ic434 from 'src/assets/images/ic434.jpeg';

import './style.scss';

export default function myImages() {
  return (
    <div className='myImages'>
      <div className='myImages__title'>
        <h1>Voici mes images personnelles en astro photographie</h1>
      </div>

      <div className='myImages__container'>
        <div className='myImages__container__image'>
          <h2>Galaxie du Tourbillon - M 51</h2>
          <a href="https://www.astrobin.com/3ef7xh/" target="_blank">
            <img src={m51} alt="m51" />
          </a>
        </div>

        <div className='myImages__container__image'>
          <h2>Grand Amas d'Hercule - M 13</h2>
          <a href="https://www.astrobin.com/c5oxmq/" target="_blank">
            <img src={m13} alt="m13" />
          </a>
        </div>

        <div className='myImages__container__image'>
          <h2>Nébuleuse d'Orion - M 42</h2>
          <a href="https://www.astrobin.com/bfolfh/" target="_blank">
            <img src={m42} alt="m42" />
          </a>
        </div>

        <div className='myImages__container__image'>
          <h2>Nébuleuse de la tête de cheval - IC 434</h2>
          <a href="https://www.astrobin.com/2kcjmf/D/" target="_blank">
            <img src={ic434} alt="ic434" />
          </a>
        </div>

      </div>
    </div>
  );
}
