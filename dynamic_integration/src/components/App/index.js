// == Import
import React from 'react';
import {
  Link, Redirect, Route, Switch
} from 'react-router-dom';

import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Daily from 'src/components/Content/daily';
import MyImages from 'src/components/Content/myImages';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
export default function App() {
  return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Header />
            <Content />
            <Footer />
          </Route>

          <Route path="/dailyImage">
            <Header />
            <Daily />
            <Footer />
          </Route>

          <Route path="/myImages">
            <Header />
            <MyImages />
            <Footer />
          </Route>

        </Switch>



        {/* <Header />
        <Content />
        <Footer /> */}
      </div>

  )
};

// == Export
