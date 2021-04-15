import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from './SingleBar'
import MiddleBar from './MiddleBar'

function DateSlider() {
  const containerRef = useRef(null);

  const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

  const [finalDateFormat, setFinalDateFormat] = useState('');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();
  const days = Array.from([...Array(31+1).keys()].slice(1))

  const DayManipulation = (initial) => {
    // const initial = 30;
    let dayName = days[parseInt(initial)];

    let finalDate = "Day " + dayName;
    return finalDate;
  };

  console.log("finalDateFormat", finalDateFormat)

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={3} max={days.length-1} onChange={
        value => {
          console.log("DAYYYYYYYYYY", value)
          setMiddleBarStartPoint(value);
          setFinalDateFormat(DayManipulation(parseInt(value)))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>

        <MiddleBar initial={3} max={27}
        startPoint={middleBarStartPoint}
        endPoint={middleBarEndPoint} halfPixels={days.length/2} totalPixels={3} centToPixelRatio={5/1.55}
        dateAddCent={1} endPointHelper={10}/>

        <SingleBar initial={27} max={days.length-1} onChange={
        value => {
          setMiddleBarEndPoint(value)
          setFinalDateFormatBarTwo(DayManipulation(parseInt(value)))}} 
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
  margin-top: 10%;
`;

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;

export default DateSlider
