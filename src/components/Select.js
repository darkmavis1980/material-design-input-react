import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

const Select = (props) => {
  return (
    <div className="input-wrapper">
      <select name={props.name}>
        {props.options.length > 0 ? props.options.map((option, index) => {
          return (
            <option key={index} value={option.value}>{option.name}</option>
          )
        }) : null}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

Select.defaultProps = {
  options: []
}

export default Select;