import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const getPercentage = (current, max) => (100 * current) / max;

const getLeft = percentage => `calc(${percentage}% - 2px)`;

const getValue = (percentage, max) => (max / 100) * percentage;
// Because the slider's width is 5%. So, we'll subtract that from
// total percentage so to not overflow the 100% width.

function SingleBar({initial, max, onChange, positionSliderRef, positionSimpleRef, containerRef, DateSelected, formatFn = number => number.toFixed(0) 
}) {
  const initialPercentage = getPercentage(initial, max);

  const handleMouseMove = event => {
    // console.log("windw", window.pageXOffset)
    // console.log("windooow", window)
    let newX = event.clientX - positionSimpleRef.current - containerRef.current.getBoundingClientRect().left;
    const endAxis = containerRef.current.offsetWidth - 
    positionSliderRef.current.offsetWidth;
    
    const startAxis = 0;

    if(newX < startAxis){
      newX = 0;
    }
    if(newX > endAxis){
      newX = endAxis
    }
    const newPercentage = getPercentage(newX, endAxis);
    // getting the percentage by using new-axis and end axis.
    const newValue = getValue(newPercentage, max);
    // if there is any new coordinate change, the newValue will
    // get those coordinates, aka values, and will update
    // through onChange()

    positionSliderRef.current.style.left = getLeft(newPercentage);
    // We defined getLeft function upwards.
    onChange(newValue)
  }
  
  const handleMouseDown = event => {
    positionSimpleRef.current = event.clientX - positionSliderRef.current.getBoundingClientRect().left;
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  console.log("getLeft:::::::", getLeft(initialPercentage))
  return (
    <div> 
      {/* <Container ref={containerRef} > */}
      <StartSlider 
        ref={positionSliderRef} 
        style={{left: getLeft(initialPercentage)}} 
        onMouseDown={handleMouseDown}
      >
        <BarTitle>{DateSelected}</BarTitle>
      </StartSlider>
    </div>
  )
}

const BarTitle = styled.p`
  content: "";
  position: absolute;
  top: -87%;
  font-size: 8px;
  margin: 16px -18px 0px -12px;
  border-color: #555 transparent transparent transparent;
`;

const StartSlider = styled.div`
  width: 5px;
  height: 33px;
  left: 60px;
  border-radius: 3px;
  position: absolute;
  top: -14px;
  opacity: 1;
  background: #55a9e8;
  cursor: pointer;

`;

SingleBar.propTypes = {
  initial: propTypes.number, 
  max: propTypes.number, 
  onChange: propTypes.func, 
  formatFn: propTypes.func
}

SingleBar.defaultProps ={
  initial: 10, 
  max: 50, 
  onChange: () => {}, 
  formatFn: () => {}
}

export default SingleBar;
