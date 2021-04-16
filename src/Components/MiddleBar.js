import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function MiddleBar({ startPoint, endPoint, initial, max, halfPixels, totalPixels, centToPixelRatio, timePixelManager = 0, endPointHelper, dayPixelManager = 0, dateAddCent}) {
  startPoint = isNaN(startPoint) ? initial : startPoint;
  endPoint = isNaN(endPoint) ? max : endPoint;
  console.log("startPoint", startPoint)
  console.log("endPoint", endPoint) 
  console.log("&&&", endPointHelper) 
  console.log("halfPixels", halfPixels) 
  console.log("totalPixels", totalPixels) 
  console.log("centToPixelRatio", centToPixelRatio) 
  console.log("endPoint * endPointHelper", endPoint * endPointHelper)
  console.log("timePixelManager", timePixelManager)

  return (
    <div>
      {/* First Slider */} 
      {/* I did 5/1.55 because, width was 50% and I have equally divide it by 1.55px.
      (31 days divided into half = 15.5. Why half? because I have divided single container into two equal parts [50% each])
      So to divide 80px into 50 equal parts. I did this.*/}
      {/* Simple sliders */}
      {startPoint < halfPixels && <StartSlider  
        style={{ left: `calc(${startPoint * centToPixelRatio + dateAddCent}%)`, width: `calc(50% - ${startPoint * centToPixelRatio}% + 1%)`}} 
      />}     
      {/* Second Slider */}
      { <StartSlider  
        style={{marginLeft
          : '50%', width:`calc(${(endPoint * endPointHelper)/totalPixels}% - 50% + ${timePixelManager}%)`}} 
      />}

      {/* Negative/ opposite sliders */}
      {<StartSlider  
        style={{ left: '49%', width: `calc(${startPoint * centToPixelRatio}% - 49% + ${timePixelManager}% + ${dayPixelManager}%)`}} 
      />}     
      {/* Second Slider */}
      {endPoint < halfPixels && <StartSlider  
        style={{marginLeft: `calc(${endPoint * centToPixelRatio}% + 1%)`, width:`calc(50% - ${endPoint * centToPixelRatio}%)`}} 
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
