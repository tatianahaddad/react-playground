import React, { Component } from 'react'

export class Accordion extends Component {
  static defaultProps = {sections: [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]}

  state= {
    currentSectionIndex : null
  }

  handleClick = (index) => {
    this.setState({currentSectionIndex: index})
  }

  renderButton(section, index, currentSectionIndex) {
    return(
      <li key= {index}>
        <button 
        type='button'
        onClick={() => this.handleClick(index)}>
          {section.title}
        </button>
        {(currentSectionIndex === index) && <p>{section.content}</p>}
      </li>
    );
  }
  render() {
    const { currentSectionIndex }= this.state
    return (
      <div>
        <ul>
          {this.props.sections.map((section, index) => 
            this.renderButton(section, index, currentSectionIndex)
          )}
        </ul>
      </div>
    )
  }
}

export default Accordion
