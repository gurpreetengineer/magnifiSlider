import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from './SingleBar'
import MiddleBar from './MiddleBar'
function Slider() {
  const containerRef = useRef(null);

  const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

  const middleSliderRef = useRef();
  const middleSimpleRef = useRef();

  const [finalDateFormat, setFinalDateFormat] = useState('');
  const [finalDateFormatBarTwo, setFinalDateFormatBarTwo] = useState('');

  const [middleBarStartPoint, setMiddleBarStartPoint] = useState();
  const [middleBarEndPoint, setMiddleBarEndPoint] = useState();
  
  
  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  } ;

  const DateManipulation = (initial) => {
    // const initial = 30;
    let monthName = `${months[parseInt(initial%12)]}`;
    let yearDependency = parseInt(initial/12);
    let year = 2008;
    year += yearDependency;
    let finalDate = monthName + " " + year;
    return finalDate;
  };

  return (
    <Parent>
      <Container ref={containerRef}>
        <SingleBar initial={1} max={160} onChange={
        value => {
          setMiddleBarStartPoint(value);
          setFinalDateFormat(DateManipulation(value))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>


        <MiddleBar initial={10} max={160}
        startPoint={parseInt(middleBarStartPoint)}
        endPoint={parseInt(middleBarEndPoint)}
        positionSliderRef={middleSliderRef}
        positionSimpleRef={middleSimpleRef} 
        containerRef={containerRef}/>
        

        <SingleBar initial={140} max={160} onChange={
        value => {
          setMiddleBarEndPoint(value)
          setFinalDateFormatBarTwo(DateManipulation(value))}} 
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
`;

const Container = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 5px;
`;

export default Slider
