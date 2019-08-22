import React from 'react';
import './App.css';
import DateFields from './components/formElements/dateFields';
import TextBox from './components/formElements/textField';

class App extends React.Component<{}> {
  onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  render() {
    return (
      <div className="App">
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
        <DateFields  onChangehandler={this.onChangehandler} />
      </div>
    );
  }
}

export default App;
