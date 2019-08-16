import React from 'react';
import Styled from 'styled-components';
import Formulario from './components/Formulario/index';

function App() {
  return (
    <Wrapper className="App">
      <Formulario />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  width: 1354px;
  height: 1024px;
  background: #663399;
`;

export default App;
