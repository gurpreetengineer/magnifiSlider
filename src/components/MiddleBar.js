import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function MiddleBar({ startPoint, endPoint, initial, max, halfPixels, totalPixels, centToPixelRatio, timePixelManager = 0, endPointHelper, dayPixelManager = 0, dateAddCent}) {
  startPoint = isNaN(startPoint) ? initial : startPoint;
  endPoint = isNaN(endPoint) ? max : endPoint;
  
  return (
    <div>
      {/* First Slider */} 
      {/* CentToPixelRatio is:
      Cent could be either 100% or 50%.
      Pixels could be the number of days, hours, years, minutes, seconds and more.
      So, I decided to divide the container equally by dividing percentage by pixels.*/}
      
      {/* Simple sliders */}
      { <StartSlider  
        style={{ left: `calc(${startPoint * centToPixelRatio + dateAddCent}%)`, width: `calc(${endPoint * centToPixelRatio}% - ${startPoint * centToPixelRatio}% + 1% + ${dateAddCent}%)`}} 
      />}   
       
      {/* Negative/ opposite sliders */}
      {<StartSlider  
        style={{ left: `calc(${endPoint * centToPixelRatio}% + 1%)`, width: `calc(${startPoint * centToPixelRatio}% - calc(${endPoint * centToPixelRatio}% + 1%) + ${timePixelManager}% + ${dayPixelManager}%)`}} 
      />}      
    </div>
  )
}

const StartSlider = styled.div`
  // width: 100%;
  height: 5px;
  border-radius: 3px;
  position: absolute;
  top: 0px;
  opacity: 1;
  background: #55a9e8;
  cursor: pointer;

`;

MiddleBar.propTypes = {
  startPoint: propTypes.number, 
  endPoint: propTypes.number, 
  max: propTypes.number, 
  onChange: propTypes.func, 
  formatFn: propTypes.func,
  dateAddCent: propTypes.number
}

MiddleBar.defaultProps ={
  dateAddCent: 0

}

export default MiddleBar;
