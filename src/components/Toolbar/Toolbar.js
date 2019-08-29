import React from "react";
import logo from "../../TLE_assets/linda-icon.png";
import admin_logo from "../../TLE_assets/admin_logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import Button from "react-bootstrap/Button";
import Modal from "./LoginModal/index.jsx";

class toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false
    };
  }

  clickUser = () => {
    this.setState({ showLoginModal: true });
  };

  closeLoginModal = () => {
    this.setState({ showLoginModal: false });
  };

  handleChangeUsername = () => {
    console.log("changed username!")
  };

  render() {
    const showLoginModal = this.state.showLoginModal;

    let loginModal;
    if (showLoginModal) {
      loginModal = (
        <Modal open={showLoginModal} closeModal={this.closeLoginModal} />
      );
    } else {
      loginModal = null;
    }

    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__menu-logo">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
              <Button onClick={this.props.drawerClickHandler}>Dashboard</Button>
            </div>
          </div>
          <div className="toolbar__navigation-items">
            <a className="toolbar__avatar" href="/">
              <img
                className="toolbar__avatar-img"
                src={this.props.isAdmin ? admin_logo : logo}
                alt="account-user img"
              />
            </a>
            <Button className="user_button" onClick={this.clickUser}>
              {this.props.isAdmin ? "Admin" : "Linda"}
            </Button>
            {loginModal}
          </div>
        </nav>
      </header>
    );
  }
}

export default toolbar;
