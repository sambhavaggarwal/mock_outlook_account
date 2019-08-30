import React, { Component } from "react";
import PropTypes from "prop-types";
// import Compose from '../Compose';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
import Message from "../Message";
import moment from "moment";

import "./MessageList.css";

const MY_USER_ID = "Linda";

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      people: props.people,
      selected_id: props.selected_id,
      date: new Date().getTime()
    };

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    this.getMessages();
    console.log(new Date().getTime());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected_id !== this.props.selected_id) {
      this.setState({ selected_id: this.props.selected_id }, () => {
        this.getMessages();
      });
    }
  }

  addDays(date, years, days, hours, minutes) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    result.setDate(result.getDate() + days);
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

  getMessages = () => {
    const selected_id = this.state.selected_id;
    const date = this.state.date;

    this.setState(prevState => {
      switch (selected_id) {
        default:
          return {
            messages: [
              {
                id: 1,
                author: "no-one",
                message: "You didn't write any messages",
                timestamp: date
              }
            ]
          };

        case 0:
          // console.log(new Date().getTime())
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message: "this is a modified message",
                timestamp: this.addDays(date, 0, -5, 0, 0)
              },
              {
                id: 2,
                author: "John",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: this.addDays(date, 0, 500, 0, 1)
              },
              {
                id: 3,
                author: "Sam",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: this.addDays(date, 0, 500, 2, 3)
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: this.addDays(date, 0, 500, 5, 6)
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "John",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "John",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "Sam",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };

        case 1:
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message:
                  "11111111. Hello people of TLE this is a demonstration to show you how the website is working :)",
                timestamp: new Date().getTime()
              },
              {
                id: 2,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 3,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };

        case 2:
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message:
                  "22222222. Hello people of TLE this is a demonstration to show you how the website is working :)",
                timestamp: new Date().getTime()
              },
              {
                id: 2,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 3,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };

        case 3:
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message:
                  "3333333. Hello people of TLE this is a demonstration to show you how the website is working :)",
                timestamp: new Date().getTime()
              },
              {
                id: 2,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 3,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };

        case 4:
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message:
                  "4444444. Hello people of TLE this is a demonstration to show you how the website is working :)",
                timestamp: new Date().getTime()
              },
              {
                id: 2,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 3,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };

        case 5:
          return {
            ...prevState,
            messages: [
              {
                id: 1,
                author: "Linda",
                message:
                  "555555. Hello people of TLE this is a demonstration to show you how the website is working :)",
                timestamp: new Date().getTime()
              },
              {
                id: 2,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 3,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 4,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 5,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 6,
                author: "Linda",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 7,
                author: "orange",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 8,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              },
              {
                id: 9,
                author: "Linda",
                message:
                  "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime()
              },
              {
                id: 10,
                author: "orange",
                message:
                  "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime()
              }
            ]
          };
      }
    });
  };

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;
      let showName = false;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as("hours") < 1) {
          startsSequence = false;
        }

        if (previousDuration.as("hours") < 1) {
          showTimestamp = false;
        }

        if (!prevBySameAuthor) {
          showName = true;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as("hours") < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
          showName={showName}
          currentAuthor={current.author}
        />
      );

      // Proceed to the next message.
      i += 1;
    }
    return messages;
  }

  render() {
    const messages = this.renderMessages();
    return (
      <div className="message-list">
        <div className="message-list-container">
          {messages}
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  id: PropTypes.string
};
