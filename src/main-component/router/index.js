import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import EventsPage from "../EventsPage";
import Gallery from "../Gallery";
import WeddingParty from "../WeddingParty";
import RSVP from "../RSVP";
import Homepage from '../HomePage'      

const AllRoute = () => { 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/wedding-party" component={WeddingParty} />
          <Route path="/rsvp" component={RSVP} />
        </Switch>
      </Router>
    </div>
  );
}

export default AllRoute;
