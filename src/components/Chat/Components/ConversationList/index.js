import React, { Component } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
// import axios from 'axios';

import './ConversationList.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [
        { 
          key: 0,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
        { 
          key: 1,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
        { 
          key: 2,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
        { 
          key: 3,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
        { 
          key: 4,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
        { 
          key: 5,
          name: "john smith",
          photo: "https://randomuser.me/api/portraits/men/91.jpg",
          text: "Junior Developer"
        },
      ]
    };
  }

  // componentDidMount() {
  //   this.getConversations();
  // }

  // getConversations = () => {
  //   axios.get('https://randomuser.me/api/?results=20').then(response => {
  //     this.setState(prevState => {
  //       let conversations = response.data.results.map(result => {
  //         return {
  //           photo: result.picture.large,
  //           name: `${result.name.first} ${result.name.last}`,
  //           text: 'Hello world! This is a long message that needs to be truncated.'
  //         };
  //       });
  //       // console.log(conversations)
  //       return { ...prevState, conversations };
  //     });
  //   });
  // }

  handleClick = (selected) => {
    this.props.onClick(selected);
  }

  render() {
    return (
      <div className="conversation-list">
        <ConversationSearch />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              onClick={this.handleClick}
              key={conversation.key}
              data={conversation}
              selected={this.props.selected_id === conversation.key ? true : false}
            />
          )
        }
      </div>
    );
  }
}