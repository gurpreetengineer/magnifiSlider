import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from '../SingleBar'
import MiddleBar from '../MiddleBar'

function MinuteSlider() {
  const containerRef = useRef(null);

const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

  const [finalDateFormat, setFinalDateFormat] = useState('10 min');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('30 min');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();
 
  const MinutesManipulation = (initial) => {

    return `${initial} min`;
  };

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={10} max={60-1} onChange={
        value => {
          setMiddleBarStartPoint(value);
          setFinalDateFormat(MinutesManipulation(parseInt(value)))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>

        <MiddleBar initial={10} max={60/2}
        startPoint={middleBarStartPoint}
        endPoint={middleBarEndPoint} halfPixels={60/2} totalPixels={60/100} centToPixelRatio={50/(60/2)}
        dateAddCent={0} endPointHelper={1} timePixelManager={1.7} />

        <SingleBar initial={60/2} max={60-1} onChange={
        value => {
          setMiddleBarEndPoint(value)
          setFinalDateFormatBarTwo(MinutesManipulation(parseInt(value)))}} 
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

export default MinuteSlider
