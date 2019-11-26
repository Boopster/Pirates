import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import PirateList from '../components/pirates/PirateList';
import Request from '../helpers/request';
import PirateContainer from './Pirates/PirateContainer';
import ShipContainer from './Ships/ShipContainer';

class MainContainer extends Component {


  render(){
    return (
      <div>
      <Router>
      <React.Fragment>
      <NavBar/>
      <Switch>
      {/* GET ALL PIRATES */}
      <Route path="/pirates" render={(props) =>{
        return <PirateContainer/>
      }}/>
      {/* GET ALL SHIPS */}
      <Route path="/ships" render={(props) =>{
        return <ShipContainer/>
      }}/>
      </Switch>


      </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
