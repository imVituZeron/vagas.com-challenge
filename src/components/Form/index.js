import React, { Component } from 'react';
import Styled from 'styled-components';

class Form extends Component {
   state = {
      number: 1,
      desc: '',
      escolhaR: false,
      escolhaV: false,
      escolhaA: false,
      escolha: [],
   }

   hanbleClickPositiveNum = () => {
      this.setState({
         number: this.state.number + 1
      });
   }

   hanbleClickNegativeNum = () => {
      if (this.state.number > 0){
         this.setState({
            number: this.state.number - 1
         });
      }
   }

   handleChangeDesc = event => {
      this.setState({
         desc: event.target.value
      });
   }

   handleClickSend = () => {
      alert('Formulario enviado com sucesso!');

      this.setState({
         number: 1,
         desc: '',
         escolhaR: false,
         escolhaV: false,
         escolhaA: false,
         escolha: []
      })

      console.log(`
         O numero de stickers: ${this.state.number}
         A descrição: ${this.state.desc}
         A escolha: ${this.state.escolha}
      `)
   }

   handleChangeAll = event => {
      if (event.target.value === 'React'){
         this.setState({
            escolhaR: event.target.checked,
            escolha: [].concat(this.state.escolha, event.target.value)
         });
      } else if (event.target.value === 'Vue') {
         this.setState({
            escolhaV: event.target.checked,
            escolha: [].concat(this.state.escolha, event.target.value)
         });
      } else {
         this.setState({
            escolhaA: event.target.checked,
            escolha: [].concat(this.state.escolha, event.target.value)
         });
      }
   }

   render() {
      return (
         <FormPage>
            <form> 
               <div className="stickers  check-stickers">
                  <h2>Quais stickers?</h2>
                  <div className='check-escolhas'>
                     <input 
                        className='escolhas' type='checkbox'
                        value='React'id='react' checked={this.state.escolhaR}
                        onChange={this.handleChangeAll}
                     />  
                        <label for='react'>React</label>
                     <input 
                        className='escolhas' type='checkbox'
                        value='Vue' id='vue' checked={this.state.escolhaV}
                        onChange={this.handleChangeAll}
                     />
                        <label for='vue'>Vue</label>
                     <input 
                        className='escolhas' type='checkbox'
                        value='Angular' id='angular' checked={this.state.escolhaA}
                        onChange={this.handleChangeAll}
                     />
                        <label for='angular'>Angular</label>
                  </div> 
               </div>
               <div className="stickers  amount-stickers">
                  <h2>Quantos stickers de cada? </h2>
                  <div className='contador'>
                     <button type='button' value='menos' onClick={this.hanbleClickNegativeNum}>-</button>
                     <input type="text" value={this.state.number}/> 
                     <button type='button' value='mais' onClick={this.hanbleClickPositiveNum}>+</button>
                  </div>
               </div>
               <div className="stickers  note-stickers">
                  <h2>Observação:</h2>
                  <textarea type='text' value={this.state.desc} onChange={this.handleChangeDesc}></textarea>
               </div>
               <div className="send  button-stickers">
                  <button type='button' onClick={this.handleClickSend} 
                     onChange={this.handleClick}>ENVIAR
                  </button>
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

   div.check-stickers {

      div.check-escolhas{
         padding: 10px;
      }

      input.escolhas{
         display: none;
      }

      input.escolhas+label{
         padding: 7px;
         font-size: 24px;
         line-height: 24px;
         cursor: pointer;
      }

      input.escolhas+label:before{
         content: '';
         display: inline-block;
         border-radius: 4px;
         background: #b2bec3;
         border: 2px solid #2F3676;
         width: 24px;
         height: 24px;

         input.escolhas+label:before:hover{
            background: #636e72;
         }
      }
      input.escolhas:checked + label:before{
         background: #2F3676;
      }
   }
   
   div.amount-stickers {
      height: 90px;

      input{
         font-size: 15pt;
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
      div.contador {
         padding: 10px;
      }
   }

   div.note-stickers textarea{
      font-size: 13pt;
      padding: 8px;
      width: 482px;
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
