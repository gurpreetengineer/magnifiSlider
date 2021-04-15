import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

<<<<<<< HEAD
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
=======
function MiddleBar({ startPoint, endPoint }) {
  console.log("startPoint", startPoint)
  console.log("endPoint", endPoint)  
  return (
    <div> 
      <StartSlider  
        style={{marginLeft: `calc(${startPoint/1.6}%)`, width: `calc(${endPoint/1.6}% - ${startPoint}% )`}} 
      />
>>>>>>> bfb73ba0d7d62bfefb55036b7ed84eff8d01df23
    </div>
  )
}

const StartSlider = styled.div`
<<<<<<< HEAD
  // width: 100%;
  height: 5px;
=======
  width: 100%;
  height: 5px;
  // left: 60px;
>>>>>>> bfb73ba0d7d62bfefb55036b7ed84eff8d01df23
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
