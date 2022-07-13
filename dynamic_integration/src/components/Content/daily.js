import React from 'react';
import axios from 'axios';

import './style.scss';

export default function Daily() {
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
        element.classList.add('daily__dailyImage');
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
    <div className='daily'>Daily</div>
  );
}
