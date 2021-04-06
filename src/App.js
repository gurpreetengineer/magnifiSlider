import DateSlider from './Components/main'
import styled from 'styled-components'

function App() {
  return (
    <MainContainer>
      <DateSlider initial={10} max={25} />
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
