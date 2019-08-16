import React, { Component } from 'react';
import Styled from 'styled-components';

class Form extends Component {
   render() {
      return (
         <FormPage>
            <form>
               <div className="stickers  check-stickers">
                  <h2>Quais stickers</h2>
                  <input type='checkbox' id='react' value='React'/>
                     <labe for='react'/> Vue
                  <input type='checkbox' id='vue' value='Vue'/>
                     <labe for='vue'/> Vue
                  <input type='checkbox' id='angular' value='Angular'/>
                     <labe for='angular'/> Angular
               </div>
               <div className="stickers  amount-stickers">
                  <h2>Quantos stickers de cada? </h2>
                  <button type='button'>-</button>
                  <input type="text" value='0'/>
                  <button type='button'>+</button>
               </div>
               <div className="stickers  note-stickers">
                  <h2>Observação</h2>
                  <input type='text'/>
               </div>
               <div className="send  button-stickers">
                  <button type='submit'>ENVIAR</button>
               </div>
            </form>
         </FormPage>
      );
   }
}
const FormPage = Styled.div`

   font-family: Arial;
   color: #071723;

   div.stickers {
      margin-left: 32px;
      height: 181px;
      padding: 10px;
   }

   div.check-stickers input{
      background: #2F3676;
      width: 24px;
      height: 24px;
   }
   
   div.amount-stickers {
      height: 90px;

      input{
         width: 60px;
         height: 42px;
         background: #DDE3E9;
         border: 1px solid #2F3676;
         border-radius: 4px;
      }

      button{
         background: #2F3676;
         width: 42px;
         height: 42px;
         border-radius: 7px;
         font-size: 18px;
      }
   }

   div.note-stickers input{
      width: 496px;
      height: 141px;
      background: #DDE3E9;
      border: 1px solid #2F3676;
      border-radius: 4px;
      color: #000;
   }

   div.send {
      border-radius: 0 0 8px 8px;
      height: 100px;
      background: #DDE3E9;
   }

   div.send button{
      margin-left: 395px;
      margin-top: 32px;
      background: #2F3676;
      border-radius: 7px;
      width: 133px;
      height: 37px;
      font-size: 18px;
      color: #FFFFFF;
   }

`;

export default Form;
