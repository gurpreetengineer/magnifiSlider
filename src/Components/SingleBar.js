import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const getPercentage = (current, max) => (100 * current) / max;

const getLeft = percentage => `calc(${percentage}% - 2px)`;

const getValue = (percentage, max) => (max / 100) * percentage;
// Because the slider's width is 5%. So, we'll subtract that from
// total percentage so to not overflow the 100% width.

function SingleBar({initial, max, onChange, positionSliderRef, positionCurrentRef, positionSimpleRef, containerRef, formatFn = number => number.toFixed(0) 
}) {
  const initialPercentage = getPercentage(initial, max);

  // const containerRef = useRef(null);

  // const fillSliderRef = useRef();

  // const diff = React.useRef();
  // const endSliderRef = useRef();

  // const positionSimpleRef = useRef();
  
  useEffect(() => {
    // console.log("positionSliderRef", positionSliderRef)
    // console.log("positionCurrentRef", positionCurrentRef)
    // positionSliderRef.current.onmousemove = handleMouseMove();  
  }, [])

  console.log("containerRef", useRef(null));

  const handleMouseMove = event => {
    console.log("*", event.clientX)
    // console.log("windw", window.pageXOffset)
    // console.log("windooow", window)
    let newX = event.clientX - positionSimpleRef.current - containerRef.current.getBoundingClientRect().left;
    const endAxis = containerRef.current.offsetWidth - 
    positionSliderRef.current.offsetWidth;
    console.log("*ggg", newX)
    
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
    positionCurrentRef.current.textContent = formatFn(newValue);
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

  return (
    <div> 
      <strong ref={positionCurrentRef}>{formatFn(initial)}</strong> <br />
      <strong>{formatFn(max)}</strong>
      {/* <Container ref={containerRef} > */}
      <span  style={{left: getLeft(initialPercentage)}}>hello</span  >
      <StartSlider 
        ref={positionSliderRef} 
        style={{left: getLeft(initialPercentage)}} 
        onMouseDown={handleMouseDown}
      >
        <BarTitle>Hello</BarTitle>
      </StartSlider>
        {/* <FillSlider ref={fillSliderRef} /> */}
        {/* <EndSlider ref={endSliderRef} /> */}
      {/* </Container> */}
    </div>
  )
}

// const Container = styled.div`
//   position: relative;
//   border-radius: 3px;
//   background: #dddddd;
//   height: 5px;
// `;

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

const BarTitle = styled.p`
padding-bottom: 10px;
`;
// const FillSlider = styled.div`
//   width: 100px;
//   height: 5px;
//   left: 61px;
//   border-radius: 3px;
//   position: relative;
//   top: -33px;
//   opacity: 1;
//   background: #55a9e8;
//   cursor: pointer;
// `;

// const EndSlider = styled.div`
//   width: 5px;
//   height: 33px;
//   left: 160px;
//   border-radius: 3px;
//   position: relative;
//   top: -52px;
//   opacity: 1;
//   background: #55a9e8;
//   cursor: pointer;
// `;

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
