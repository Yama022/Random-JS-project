// == Import
import React from 'react';
import {
  BrowerRouter as Router, Link, Redirect, Route, Switch
} from 'react-router-dom';

import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
export default function App() {
  return (
      <div className="app">
        <Link to="/home">
          <Header />
          <Content />
          <Footer />
        </Link>



        {/* <Header />
        <Content />
        <Footer /> */}
      </div>

  )
};

// == Export
