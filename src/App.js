// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Slider from './Components/Slider'
import styled from 'styled-components'
// import Dummy from './Components/dummy'
function App() {
  return (
    <MainContainer>
      <Slider />
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
