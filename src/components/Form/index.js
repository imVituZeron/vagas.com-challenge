import React, { Component } from 'react';
import Styled from 'styled-components';

class Form extends Component {

   state = {
      number: 1,
      desc: '',
   }

   hanbleClickPositiveNum = () => {
      this.setState({
         number: this.state.number + 1
      });
   }

   hanbleClickNegativeNum = () => {
      this.setState({
         number: this.state.number - 1
      });
   }

   handleChangeDesc = event => {
      this.setState({
         desc: event.target.value
      });
   }

   render() {
      return (
         <FormPage>
            <form> 
               <div className="stickers  check-stickers">
                  <h2>Quais stickers</h2>
                  <input type='checkbox' id='react' value='React'/>
                     <label for='react'/> Vue
                  <input type='checkbox' id='vue' value='Vue'/>
                     <label for='vue'/> Vue
                  <input type='checkbox' id='angular' value='Angular'/>
                     <label for='angular'/> Angular
               </div>
               <div className="stickers  amount-stickers">
                  <h2>Quantos stickers de cada? </h2>
                  <button type='button' onClick={this.hanbleClickNegativeNum}>-</button>
                  <input type="text" value={this.state.number}/> 
                  <button type='button' onClick={this.hanbleClickPositiveNum}>+</button>
               </div>
               <div className="stickers  note-stickers">
                  <h2>Observação</h2>
                  <textarea type='text' onChange={this.handleChangeDesc}></textarea>
               </div>
               <div className="send  button-stickers">
                  <button type='submit' onChange={this.handleClick}>ENVIAR</button>
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
         color: #000;
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
      button:hover{
         background: #191847;
      }
   }

   div.note-stickers textarea{
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
