import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe ('Messages components', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  
    it('renders the UI as expected for 0', () => {
      const treeTwo = renderer
        .create(<Messages name="Messages" unread={0}/>)
        .toJSON();
      expect(treeTwo).toMatchSnapshot();  
  });
})


