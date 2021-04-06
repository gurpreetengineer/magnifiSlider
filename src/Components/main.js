import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const getPercentage = (current, max) => (100 * current) / max;

const getLeft = percentage => `calc(${percentage}% - 5px)`
// Because the slider's width is 5%. So, we'll subtract that from
// total percentage so to not overflow the 100% width.

function DateSlider({initial, max}) {
  const initialPercentage = getPercentage(initial, max);

  const containerRef = useRef(null);
  const startSliderRef = useRef();
  const fillSliderRef = useRef();
  const endSliderRef = useRef();

  const simpleRef = useRef();
  
  useEffect(() => {
    console.log("containerRef", containerRef)
  }, [])

  console.log("containerRef", useRef(null));
  const handleMouseMove = event => {
    console.log("*")
    let newX =
      event.clientX - simpleRef.current - containerRef.current.getBoundingClientRect().left;
    const endAxis = containerRef.current.offsetWidth - 
    startSliderRef.current.offsetWidth;
    
    const startAxis = 0;

    if(newX < startAxis){
      newX = 0;
    }
    if(newX > endAxis){
      newX = endAxis
    }
    const newPercentage = getPercentage(newX, endAxis);
    // getting the percentage by using new-axis and end axis.

    startSliderRef.current.style.left = getLeft(newPercentage);
    // We defined getLeft function upwards.
  }
  
  const handleMouseDown = () => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  return (
    <div>
      <Container ref={containerRef} >
        <StartSlider 
          ref={startSliderRef} 
          style={{left: getLeft(initialPercentage)}} 
          onMouseDown={handleMouseDown}
        />
        <FillSlider ref={fillSliderRef} />
        <EndSlider ref={endSliderRef} />
      </Container>
    </div>
  )
}

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;

const StartSlider = styled.div`
  width: 5px;
  height: 33px;
  left: 60px;
  border-radius: 3px;
  position: relative;
  top: -14px;
  opacity: 1;
  background: #55a9e8;
  cursor: pointer;
`;

const FillSlider = styled.div`
  width: 100px;
  height: 5px;
  left: 61px;
  border-radius: 3px;
  position: relative;
  top: -33px;
  opacity: 1;
  background: #55a9e8;
  cursor: pointer;
`;

const EndSlider = styled.div`
  width: 5px;
  height: 33px;
  left: 160px;
  border-radius: 3px;
  position: relative;
  top: -52px;
  opacity: 1;
  background: #55a9e8;
  cursor: pointer;
`;
DateSlider.propTypes = {}

DateSlider.defaultProps ={}


export default DateSlider;
