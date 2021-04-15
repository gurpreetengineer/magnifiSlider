import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import SingleBar from './SingleBar'
import MiddleBar from './MiddleBar'
function MonthYearSlider() {
  const containerRef = useRef(null);

  const startSliderRef = useRef();  
  const startSimpleRef = useRef();
  
  const endSliderRef = useRef();
  const endSimpleRef = useRef();

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
        <SingleBar initial={1} max={159} onChange={
        value => {
          setMiddleBarStartPoint(value);
          setFinalDateFormat(DateManipulation(value))}} 
        DateSelected={finalDateFormat} 
        positionSliderRef={startSliderRef}
        positionSimpleRef={startSimpleRef} 
        containerRef={containerRef}/>


        <MiddleBar initial={0} max={140}
        startPoint={parseInt(middleBarStartPoint)}
        endPoint={parseInt(middleBarEndPoint)}
        halfPixels={80} totalPixels={160/100} centToPixelRatio={5/8}
        endPointHelper={1}
        />
        {/* <MiddleBar initial={80} max={80}
        startPoint={parseInt(middleBarStartPoint)}
        endPoint={parseInt(middleBarEndPoint)} 
        halfPixels={80} totalPixels={160/100} centToPixelRatio={5/8}/> */}

        <SingleBar initial={140} max={159} onChange={
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

export default MonthYearSlider
