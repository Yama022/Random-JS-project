import React from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';

import Daily from '/src/components/Content/daily';

import './style.scss';

export default function Header() {

  const getRequest = async () => {
    try {
      axios({
        method: 'GET',
        url: 'https://api.nasa.gov/planetary/apod?api_key=fAO4IDBQgrW9YFcqYjfWASh8UwH4bbbPFDDUWoqx',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Key': 'fAO4IDBQgrW9YFcqYjfWASh8UwH4bbbPFDDUWoqx',
        }
      }
      ).then(response => {
        const { url } = response.data;
        console.log(url, 'Je passe ici');
        const elem = document.querySelector('.content');
        let element = document.createElement('img');
        element.classList.add('content__dailyImage');
        element.src = url;
        elem.appendChild(element);

      }
      )
    } catch (error) {
      console.log(error);
    }
  };

  
  

  const HomeButton = () => {
    console.log('Je clic sur le bouton Home');
  }

  const DailyButton = () => {
    console.log('Je clic sur le bouton Daily');
    getRequest();
    <Link to='dailyImage'><Daily /></Link>
  }

  const NasaButton = () => {
    console.log('Je clic sur le bouton Nasa');
  }

  // const DailyImage = () => {
  // }

  return (
    <div className='header'>
      <div className='header__home'>
        <h1>Bienvenu sur cette page présentant différentes images de la Nasa et autres.</h1>
        <h2>Vous pourrez y trouver l'image du jour de la Nasa, différentes images de la Nasa et bien d'autres.</h2>
        <div className='header__home__nav'>
          <button className='header__home__nav__button--home' onClick={HomeButton}><span>Accueil</span></button>
          <button className='header__home__nav__button--daily' onClick={DailyButton}><span>Image du jour</span></button>
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
