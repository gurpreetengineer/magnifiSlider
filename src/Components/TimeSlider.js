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

  const [finalDateFormat, setFinalDateFormat] = useState('0 : 0 : 0 : 0');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('12 : 0 : 0 : 0');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();
 
  const finalContainerPixels = 8640000; // 24 * 60 * 60 * 100;

  const DayManipulation = (initial) => {
    // for every 360000 times, an hour should increment by 1
    let currentHour =  Math.floor(initial / 360000)

    // for every 6000, a minute should increment
    var currentMinutes = Math.floor(initial / 6000);
    
    // for every 100, a second should increment
    var currentSeconds = ((initial % 60000) / 1000).toFixed(0);
    
    // for every 1 millisecond
    var currentMilliSeconds = parseInt(initial).toString().substr(-2);

    // if 60 seconds, return 0 sec and add 1 to minutes
    currentMinutes = currentSeconds === 60 ? currentMinutes + 1 : currentMinutes; 

    // if minutes are > 60, then divide them by 60 and re-assign the remainder
    currentMinutes = currentMinutes > 60 ? currentMinutes % 60 : currentMinutes;

    // if minutes are > 60. then divide them with 60 and increase the hour by quotient
    currentHour = currentMinutes > 60 ? (currentHour + (currentMinutes/60)) : currentHour;

    //if it's done:
    if(currentHour === 23 && currentMinutes === 59 && currentSeconds === "60"){
      return '24 hour';
    }


    return `${currentHour} : ${currentMinutes} : ${currentSeconds} : ${currentMilliSeconds}`;
  };

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={1} max={finalContainerPixels-1} onChange={
        value => {
          setMiddleBarStartPoint(value);
          setFinalDateFormat(DayManipulation(parseInt(value)))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>

        <MiddleBar initial={3} max={finalContainerPixels/2}
        startPoint={middleBarStartPoint}
        endPoint={middleBarEndPoint} halfPixels={finalContainerPixels/2} totalPixels={finalContainerPixels/100} centToPixelRatio={50/(finalContainerPixels/2)}
        dateAddCent={0} endPointHelper={1}/>

        <SingleBar initial={finalContainerPixels/2} max={finalContainerPixels-1} onChange={
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
  margin-top: 5%;
`;

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;

export default TimeSlider
