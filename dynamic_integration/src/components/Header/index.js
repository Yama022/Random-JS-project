import React from 'react';

import voieLactée from 'src/assets/images/Milky_Way.jpeg';

import './style.scss';

export default function Header() {

  const DailyButton = () => {
    console.log('Je clic sur le bouton Daily');
  }

  const NasaButton = () => {
    console.log('Je clic sur le bouton Nasa');
  }


  return (
    <div className='header'>
      <img src={voieLactée} alt="" />
      <div className='header__home'>
        <h1>Présentation d'images sur le thème de l'astro photographie ainsi que l'image du jour de la NASA.</h1>
        <div className='header__home__nav'>
          <button className='header__home__nav__button--home' onClick={event => window.location.href='/home'}><span>Accueil</span></button>
          <button className='header__home__nav__button--daily' onClick={event => window.location.href='/dailyImage'}><span>Image du jour</span></button>
          <button className='header__home__nav__button--myImages' onClick={event => window.location.href='/myImages'}><span>Mes images</span></button>
          <button className='header__home__nav__button--nasa' onClick={NasaButton}>
            <a href="https://www.nasa.gov/" target="_blank">
              <span>Nasa</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
