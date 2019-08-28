import React from 'react';
import './App.css';
import AlephButton from './components/Cats/Button/Button';
import Checkbox from './components/Cats/checkbox/checkbox';
import LinkRight from './components/Cats/links/link';
import AutoCOmplete from './components/formElements/autoComplete/autoComplete';
import DateFields from './components/formElements/dateFields';
import TextBox from './components/formElements/textField';
import {MasterAlephFrame} from './figmaComponents'
class App extends React.Component<{}> {
  onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  render() {
    return (
      <div className="App">
        <MasterAlephFrame />
        {/* <div className="TextFieldsContainer">
        <TextBox labelName="First Name" type="text" placeHolder="Enter name" />
        <TextBox
          labelName="First Name"
          type="text"
          placeHolder="Enter name"
          status="Active"
        />
        <TextBox labelName="First Name" type="text" status="Disabled" />
        <TextBox
          labelName="First Name"
          type="text"
          status="Error"
          errorMessage="Please enter your first name"
        />
        </div>
      

        <div className="ButtonsContainer">
        
        <AlephButton type="primary"  title ="Find my event"/>
        <AlephButton type="primaryWhiteBackground"  title ="Find my event"/>
        <AlephButton type="PrimaryDisabled"  title ="Find my event"/>
        <AlephButton type="PrimaryDisabledNoBackgroud"  title ="Find my event"/>
        <AlephButton type="PrimaryAutoFill"  title ="  AutoFill with"/>
        </div>
        <DateFields  onChangehandler={this.onChangehandler} />
       
        <LinkRight />
        <AutoCOmplete />
        <Checkbox /> */}
      
      </div>
      
    );
  }
}

export default App;
