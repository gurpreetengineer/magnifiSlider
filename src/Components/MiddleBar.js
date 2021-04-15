import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function MiddleBar({ startPoint, endPoint, initial, max }) {
  startPoint = isNaN(startPoint) ? initial : startPoint;
  endPoint = isNaN(endPoint) ? max : endPoint;
  console.log("startPoint", startPoint)
  console.log("endPoint", endPoint) 
  console.log("&&&", initial) 
  return (
    <div>
      {/* First Slider */} 
      {/* I did 5/8 because, width was 50% and I have equally divide it by 80px.
      So to divide 80px into 50 equal parts. I did this.*/}
      {/* Simple sliders */}
      {startPoint < 80 && <StartSlider  
        style={{ left: `calc(${startPoint * (5/8) + 1}%)`, width: `calc(50% - ${startPoint * (5/8)}% + 1%)`}} 
      />}     
      {/* Second Sliders */}
      {endPoint > 80 && <StartSlider  
        style={{marginLeft: '50%', width:`calc(${endPoint/1.6}% - 50%)`}} 
      />}

      {/* Negative/ opposite sliders */}
      {<StartSlider  
        style={{ left: '49%', width: `calc(${startPoint * (5/8)}% - 49%)`}} 
      />}     
      {/* Second Sliders */}
      {endPoint < 80 && <StartSlider  
        style={{marginLeft: `calc(${endPoint * (5/8)}% + 1%)`, width:`calc(50% - ${endPoint * (5/8)}%)`}} 
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
  formatFn: propTypes.func
}

// MiddleBar.defaultProps ={
//   startPoint: "1", 
//   endPoint: "88"  
// }

export default MiddleBar;
