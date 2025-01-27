import React from 'react';
import { HashRouter, Switch, Route, Link, NavLink as RouterNavlink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
//import firebase from 'firebase';

import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faCarSide, faSpinner, faCheck, faCheckCircle, faTimesCircle, faEdit, faTrashAlt, faTimes, faListAlt, faSave, faBan } from '@fortawesome/free-solid-svg-icons';

//import { attachFirebaseToComponent } from '../helpers/helperFunctions.js';

import Administration from './components/Administration';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Results from './components/Results';
import CarPage from './components/CarPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { openNav: false };
    faLibrary.add(faPlusCircle);
    faLibrary.add(faCarSide);
    faLibrary.add(faSpinner);
    faLibrary.add(faCheck);
    faLibrary.add(faCheckCircle);
    faLibrary.add(faTimesCircle);
    faLibrary.add(faEdit);
    faLibrary.add(faTrashAlt);
    faLibrary.add(faTimes);
    faLibrary.add(faListAlt);
    faLibrary.add(faSave);
    faLibrary.add(faBan);
  }

  toggleNav() {
    this.setState({ openNav: !this.state.openNav });
  }

  render() {

    //const AdministrationPage = attachFirebaseToComponent(Administration, firebase);

    return (
      <HashRouter>
        <React.Fragment>
          <Navbar expand="sm" tag="header">
            <NavbarBrand tag={RouterNavlink} to="/">
              <FontAwesomeIcon icon="car-side" size="2x" />
              Car Rental
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggleNav()} />
            <Collapse isOpen={this.state.openNav} navbar tag="nav">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RouterNavlink} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavlink} to="/about">About us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavlink} to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavlink} to="/administration">Administration</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="custom-container">
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path='/administration' component={Administration} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/car/:carId" component={CarPage} />
            </Switch>
          </div>
          <footer className="app-footer">
            <div>© 2018 Copyright: Car Rental Group</div>
            <nav>
              <Link to="/">Home</Link>
              <span> | </span>
              <Link to="/about">About us</Link>
              <span> | </span>
              <Link to="/contact">Contact</Link>
              <span> | </span>
              <Link to="/administration">Administration</Link>
            </nav>
          </footer>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;