import React from "react";
import Modal from "react-responsive-modal";
import "./styles.scss";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { login, logout } from "../../../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.props.isAdmin &&
      this.state.email === "admin@gmail.com" &&
      this.state.password === "admin"
    ) {
      this.props.login();
      this.props.closeModal();
    } else if (this.props.isAdmin) {
      this.props.logout();
      this.props.closeModal();
    }
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.props.closeModal();
  };

  render() {
    const open = this.state.open;

    let form;
    if (!this.props.isAdmin) {
      form = (
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      );
    } else {
      form = (
        <form onSubmit={this.handleSubmit} className="logoutForm">
          <Button
            block
            bssize="large"
            type="submit"
          >
            Logout as Admin
          </Button>
        </form>
      );
    }

    return (
      <div className="overlay">
        <Modal className="modal" open={open} onClose={this.onCloseModal} little>
          {form}
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
