import React, { Component } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
import "./Messenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: 0,
      showMessages: "notShowMessages"
    };

    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = selected => {
    this.setState({
      selected_id: selected,
      showMessages:
        this.state.showMessages === "showMessages"
          ? "notShowMessages"
          : "showMessages"
    });
    // console.log("hello")
  };

  render() {
    const selected_id = this.state.selected_id;
    const showMessages = this.state.showMessages;

    return (
      <div className="messenger">
        <div className={["scrollable", "sidebar", showMessages].join(" ")}>
          <ConversationList onClick={this.handleClick} selected_id={selected_id}/>
        </div>

        <div className={`scrollable content ${showMessages}`}>
          <FontAwesomeIcon
            className="back_button_arrow circle-icon"
            icon={faArrowLeft}
            onClick={this.handleClick}
          />
          <MessageList selected_id={selected_id} />
        </div>
      </div>
    );
  }
}
