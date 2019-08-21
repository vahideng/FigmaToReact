import React from 'react';
import './App.css';
import TextBox from './components/formElements/textField/Input';
const App: React.FC = () => {
  return (
    <div className="App">
      <TextBox labelName="First Name" type="text" placeHolder="Enter name" />
      <TextBox
        labelName="First Name"
        type="text"
        placeHolder="Enter name"
        style="Active"
      />
      <TextBox labelName="First Name" type="text" style="Disabled" />
      <TextBox
        labelName="First Name"
        type="text"
        style="Error"
        errorMessage="Please enter your first name"
      />
    </div>
  );
};

export default App;
