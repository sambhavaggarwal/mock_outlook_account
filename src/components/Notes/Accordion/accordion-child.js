import React from "react";
import "./styles.scss";

export default class AccordionChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">
        <li className="accordion__child">{this.props.children}</li>
      </a>
    );
  }
}
