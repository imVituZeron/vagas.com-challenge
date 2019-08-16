import React, { Component } from 'react';
import Header from '../Header/index';
import Form from '../Form/index';

import Styled from 'styled-components';

class Formulario extends Component {
   render() {
      return (
         <Page>
            <Header />
            <Form/>
         </Page>
      );
   }
}

const Page = Styled.div`
   margin-left: 30%;
   width: 560px;
   height: 794px;
   background: #F2F2F2;
   border: 1px solid #979797;
   border-radius: 8px;
`;

export default Formulario;