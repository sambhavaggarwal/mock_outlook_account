import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import routes from "./utils/routes";
import {connect} from 'react-redux'

// retrieves value of admin from redux store
function mapStateToProps(state) {
  return { isAdmin: state.isAdmin }
}

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="app">
          {backdrop}
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
