import React, { Component } from 'react'

export class HelloWorld extends Component {
  constructor(props) {
    console.log('props in constructor', props);
    super(props)
    this.state = { 
      who : 'world'
    };
  }
  handleWordClick = () => {
    console.log('handles word clicked')
    this.setState({ who: 'world' })
  }

  handleFriendClick = () => {
    console.log('handles friend clicked')
    this.setState({ who: 'friend' })
  }

  handleReactClick = () => {
    console.log('handles react clicked')
    this.setState({ who: 'React' })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick= {this.handleWordClick} >
          Word
        </button>
        <button onClick= {this.handleFriendClick}>
          Friend
        </button>
        <button onClick= {this.handleReactClick}>
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld
