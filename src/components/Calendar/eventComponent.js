import React from "react";

export default class EventComponent extends React.Component {

  handleEventClick () {
    // this.props.handleEventClick();
  }

  render() {
    return <span onClick={this.handleEventClick}><strong> {this.props.event.title} </strong></span>
  }
}
