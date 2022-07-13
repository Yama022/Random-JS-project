import React from 'react';

import { useHistory } from "react-router-dom";

import Daily from '/src/components/Content/daily';

import './style.scss';

export default function Header() {

  // const HomeButton = () => {
  //   let path = `/home`;
  //   let history = useHistory();
  //   history.push(path);
  // }

  const DailyButton = () => {
    console.log('Je clic sur le bouton Daily');
  }

  const NasaButton = () => {
    console.log('Je clic sur le bouton Nasa');
  }


  return (
    <div className='header'>
      <div className='header__home'>
        <h1>Bienvenu sur cette page présentant différentes images de la Nasa et autres.</h1>
        <h2>Vous pourrez y trouver l'image du jour de la Nasa, différentes images de la Nasa et bien d'autres.</h2>
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
