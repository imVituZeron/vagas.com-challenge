import React, { Component } from 'react';
import Styled from 'styled-components';

class Form extends Component {
   render() {
      return (
         <FormPage>
            <form>
               <div className="stickers  check-stickers">
                  <h2>Quais stickers</h2>
                  <input type='checkbox'/>React
                  <input type='checkbox'/>Vue
                  <input type='checkbox'/>Angular
               </div>
               <div className="stickers  amount-stickers">
                  <h2>Quantos stickers de cada? </h2>
                  <button type='button'>-</button>
                  <input type="text" value='0'/>
                  <button type='button'>+</button>
               </div>
               <div className="stickers  note-stickers">
                  <h2>Observação</h2>

               </div>
               <div className="send  button-stickers">
                  <button type='submit'>Enviar</button>
               </div>
            </form>
         </FormPage>
      );
   }
}
const FormPage = Styled.div`

   font-family: Arial;

   div.stickers {
      height: 181px;
   }
   div.send {
      border-radius: 8px
      height: 80px;
      background: #DDE3E9;
   }

`;

export default Form;
