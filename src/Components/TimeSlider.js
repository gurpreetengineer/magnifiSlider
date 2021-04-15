import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from './SingleBar'
import MiddleBar from './MiddleBar'

function TimeSlider() {
  const containerRef = useRef(null);

const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

  const [finalDateFormat, setFinalDateFormat] = useState('');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();
  const hours = Array.from([...Array(24+1).keys()].slice(1))
  const minutes = Array.from([...Array(60+1).keys()].slice(1))
  const seconds = Array.from([...Array(60+1).keys()].slice(1))
  const milliSeconds = Array.from([...Array(100+1).keys()].slice(1))

  const finalContainerPixels = 8640000; // 24 * 60 * 60 * 100;

  const DayManipulation = (initial) => {
    // for every 360000 times, an hour should increment by 1
    let currentHour =  Math.floor(initial / 360000)

    // for every 6000, a minute should increment
    var currentMinutes = Math.floor(initial / 60000);
    
    // for every 100, a second should increment
    var currentSeconds = ((initial % 60000) / 1000).toFixed(0);
    
    // if 60 seconds, return 0 sec and add 1 to minutes
    currentMinutes = currentSeconds === 60 ? currentMinutes + 1 : currentMinutes; 

    // if minutes are > 60, then divide them by 60 and re-assign the remainder
    currentMinutes = currentMinutes > 60 ? currentMinutes % 60 : currentMinutes;

    // if minutes are > 60. then divide them with 60 and increase the hour by quotient
    currentHour = currentMinutes > 60 ? currentHour + (currentMinutes/60) : currentHour;

    console.log("------------------------")
    console.log("initial", initial)
    console.log("currentHour", currentHour)
    console.log("currentMinutes", currentMinutes)
    console.log("currentSeconds", currentSeconds)

    // return finalDate;
  };

  console.log("finalDateFormat", finalDateFormat)

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={1} max={finalContainerPixels-1} onChange={
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
        endPoint={middleBarEndPoint} halfPixels={finalContainerPixels/2} totalPixels={3} centToPixelRatio={5/1.55}
        dateAddCent={1} endPointHelper={10}/>

        <SingleBar initial={27000} max={finalContainerPixels-1} onChange={
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

export default TimeSlider
