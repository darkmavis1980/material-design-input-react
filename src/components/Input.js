import React from 'react';
import PropTypes from 'prop-types'; 

import './Input.css';

const Input = (props) => {
  return (
    <div className="input-wrapper">
      <input type={props.type} name={props.name} required />
      <label>{props.label}</label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input;