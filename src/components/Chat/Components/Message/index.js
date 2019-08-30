import React, { Component } from "react";
import moment from "moment";
import "./Message.css";
import { connect } from "react-redux";

// retrieves value of admin from redux store
function mapStateToProps(state) {
  return { isAdmin: state.isAdmin };
}

class Message extends Component {
  render() {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp,
      showName,
      currentAuthor
    } = this.props;

    const friendlyTimestamp = moment(data.timestamp).format("LLLL");
    return (
      <div
        className={[
          "message",
          `${isMine ? "mine" : ""}`,
          `${startsSequence ? "start" : ""}`,
          `${endsSequence ? "end" : ""}`
        ].join(" ")}
      >
        {showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}
        {this.props.isAdmin && data.id}

        {showName && (
          <div className="bubble-container">
            <div className="bubble-name">{currentAuthor}</div>
          </div>
        )}
        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            {data.message}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Message);
