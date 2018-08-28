import React from 'react';
import PropTypes from 'prop-types';

// Counter component
// this component is placed inside of the Player component
// adds the increment/decrement buttons to change the score
// utilizes callback function passed as props to change the main app state vars
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={()=> {props.onChange(-1)}}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={()=> {props.onChange(1)}}> + </button>
    </div>
  );
};

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Counter;