import React, { Component } from 'react';
import './Board.css'

function ResetButton(props){
    return(
      <button className="resetButton" onClick={props.reset}>Reset</button>
    );
  }

export default ResetButton;
