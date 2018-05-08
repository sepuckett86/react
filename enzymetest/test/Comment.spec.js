import React from 'react';
import Comment from '../src/components/Comment';


// Example of a passing test
describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});


describe('Comment item', () => {
  const wrapper = shallow(<Comment />);

  it('should be a list item', () => {
    expect(wrapper.type()).to.eql('li');
  });

  // Checking for .props in text area
  it('renders the custom comment text', () => {
    wrapper.setProps({ comment: 'sympathetic ink' });
    expect(wrapper.contains('sympathetic ink')).to.equal(true);
  });

  // Checking for class names
  it('has a class name of "comment-item"', () => {
    expect(wrapper.find('.comment-item')).to.have.length(1);
});
});
