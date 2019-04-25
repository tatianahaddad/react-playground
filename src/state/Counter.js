import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { count: 0 }
  }

  handleButtonClicked = () => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({ count: this.state.count + 1})
  }
  
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick= {this.handleButtonClicked}>
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter;