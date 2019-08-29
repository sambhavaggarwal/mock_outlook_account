import React, { Component } from "react";
import "./styles.scss";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidUpdate (prevProps) {
    if(this.props.parent_showing !== prevProps.parent_showing) {
        if(this.props.parent_showing === false) {
            this.setState({show: false});
        }
    }
  }

  handleClick = e => {
    const show = this.state.show;
    this.setState({ show: !show });
    // this.props.onClick();
  };

  render() {
    const show = this.state.show;

    const childrenWithProps = React.Children.map(this.props.children, child =>
        React.cloneElement(child, { parent_showing: this.state.show })
      );

    return (
      <div className="accordion">
        <a
          className="toggle accordion__title"
          href="#"
          onClick={e => {
            this.handleClick(e);
          }}
        >
          {this.props.name}
        </a>
        <ul
          className={
            "accordion__children toggle__inner " +
            (show ? "toggle__inner--show" : "toggle__inner--hide")
          }
        >
          {childrenWithProps}
        </ul>
      </div>
    );
  }
}

