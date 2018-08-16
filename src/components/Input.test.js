import React from 'react';
import Input from './Input';

const inputName = 'test';
const inputLabel = 'label';
const wrapper = shallow(<Input type="text" name={inputName} label={inputLabel} />);

describe('(Component) Input', () => {
  it('should render the element', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
});