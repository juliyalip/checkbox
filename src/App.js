import React, {Component} from 'react';
import CheckBox from './component/Checkbox/Checkbox';
import OnlyOneChechbox from './component/OnlyOneChechbox/OnlyOneCheckBox';

import RadioBtn from './component/RadioBtn/RadioBtn';

export default class App extends Component{


  state = {
    react: '',
    html: '',
    css: ''

  }



  render() {
    return (
        <div>
    <h1>Пример нескольки вариантов</h1>
    <CheckBox />
    <CheckBox />
    <h2>Пример выбора только одного варианта</h2>
  
    <br>
    </br>
 <  OnlyOneChechbox />
    <hr>
        </hr>
        <OnlyOneChechbox />
    <h2>Радио кнопка одна из: </h2>
    <RadioBtn />
    <hr></hr>


  </div>
    )
  }
}