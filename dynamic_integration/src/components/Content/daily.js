import React from 'react';
import axios from 'axios';
import { BsHandThumbsUpFill } from 'react-icons/bs';

import './style.scss';

export default function Daily() {

  let counterVal = 0;

  const upValue = () => {
    console.log("Je passe ici");
    updateCounter(++counterVal);
  }

  const updateCounter = (val) => {
    document.querySelector('.counter').innerHTML = val;
  }

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
        const elem = document.querySelector('.daily');
        let element = document.createElement('img');
        element.classList.add('daily__image');
        element.src = url;
        elem.appendChild(element);

      }
      )
    } catch (error) {
      console.log(error);
    }
  };

  getRequest();
  return (
    <div className='daily'>
      <div className='daily__text'>
        <h3>Tu aimes cette image ? Si oui, mets un pouce <span><BsHandThumbsUpFill/></span> </h3>
        <button onClick={upValue}><BsHandThumbsUpFill /></button>
        <h4>Nombres de Like pour cette image : <span className='counter'>0</span></h4>
      </div>
    </div>
  );
}
