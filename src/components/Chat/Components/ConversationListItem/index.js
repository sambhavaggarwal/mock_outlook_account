import React, { Component } from "react";
import shave from "shave";

import "./ConversationListItem.css";

export default class ConversationListItem extends Component {
  componentDidMount() {
    shave(".conversation-snippet", 20);
  }

  handleClick = () => {
    var selected = this.props.data.key;
    this.props.onClick(selected);
  }

  render() {
    const { photo, name, text } = this.props.data;
    const selected = this.props.selected;

    return (
      <div onClick={this.handleClick} className="conversation-link">
      <div className={"conversation-list-item " + (selected ? "selected" : "")}>
          <img className="conversation-photo" src={photo} alt="conversation" />
          <div className="conversation-info">
            <h1 className="conversation-title">{name}</h1>
            <p className="conversation-snippet">{text}</p>
          </div>
      </div>
      </div>
    );
  }
}
