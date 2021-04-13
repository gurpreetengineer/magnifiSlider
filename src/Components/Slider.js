import React, { useRef } from 'react'
import styled from 'styled-components';
import SingleBar from './SingleBar'
function Slider() {
  const containerRef = useRef(null);

  const startSliderRef = useRef();
  const startCurrentRef = useRef();
  
  const startSimpleRef = useRef();
  
  // console.log("startSimpleRef",startSimpleRef)

  const endSliderRef = useRef();
  const endCurrentRef = useRef();
  const endSimpleRef = useRef();
  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={15} max={25} onChange={
        value => console.log("value", value)} 
        positionSliderRef={startSliderRef}
        positionCurrentRef={startCurrentRef} 
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>
        <SingleBar initial={10} max={25} onChange={
        value => console.log("value", value)} 
        positionSliderRef={endSliderRef}
        positionCurrentRef={endCurrentRef} 
        positionSimpleRef={endSimpleRef} 
        containerRef={containerRef}/>
      </Container>
    </Parent>
  )
}

const Parent = styled.div`
  padding: 10px;
`;

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;


export default Slider
