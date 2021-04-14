import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function MiddleBar({ startPoint, endPoint }) {
  console.log("startPoint", startPoint)
  console.log("endPoint", endPoint)  
  return (
    <div> 
      <StartSlider  
        style={{marginLeft: `calc(${startPoint/1.6}%)`, width: `calc(${endPoint/1.6}% - ${startPoint}% )`}} 
      />
    </div>
  )
}

const StartSlider = styled.div`
  width: 100%;
  height: 5px;
  // left: 60px;
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
