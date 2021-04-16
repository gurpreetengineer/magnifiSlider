import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from '../SingleBar'
import MiddleBar from '../MiddleBar'

function HourSlider() {
  const containerRef = useRef(null);

const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

  const [finalDateFormat, setFinalDateFormat] = useState('1 hour');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('17 hour');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();

  const HourManipulation = (initial) => {
    return `${initial} hour`;
  };

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={1} max={24-1} onChange={
        value => {
          setMiddleBarStartPoint(value);
          setFinalDateFormat(HourManipulation(parseInt(value)))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>

        <MiddleBar initial={1} max={18}
        startPoint={middleBarStartPoint}
        endPoint={middleBarEndPoint} halfPixels={24/2} totalPixels={24/100} centToPixelRatio={50/(24/2)}
        dateAddCent={1} endPointHelper={1} timePixelManager={3.2} />

        <SingleBar initial={18} max={24-1} onChange={
        value => {
          setMiddleBarEndPoint(value)
          setFinalDateFormatBarTwo(HourManipulation(parseInt(value)))}} 
        DateSelected={finalDateFormatBarTwo}   
        positionSliderRef={endSliderRef} 
        positionSimpleRef={endSimpleRef} 
        containerRef={containerRef}/>
      </Container>
    </Parent>
  )
}

const Parent = styled.div`
  padding: 10px;
  margin-top: 5%;
`;

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;

export default HourSlider
