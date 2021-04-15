// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import styled from 'styled-components'
import MonthYearSlider from './Components/MonthYearSlider'
import DateSlider from './Components/DateSlider'
import TimeSlider from './Components/TimeSlider'
// import Dummy from './Components/dummy'
function App() {
  return (
    <MainContainer>
      <MonthYearSlider />
      <DateSlider />
      <TimeSlider />
      {/* <Dummy />
      <Router>
        <Switch>
          <Route exact path="/" component={Dummy}/> 
        </Switch>
      </Router> */}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 30px;
  width: 50%;
  // display: flex;  
  // align-items: center;
`;


export default App;
