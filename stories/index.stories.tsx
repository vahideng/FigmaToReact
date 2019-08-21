import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TextBox from '../src/components/formElements/textField/Input';

const stories = storiesOf('Forms Elements/Text Field', module);
stories.addDecorator(withKnobs);

stories.add(
  ' Default Text Field',

  () => {
    const labelName = text('Label Name', ' First Name');

    return (
      <TextBox
        labelName={`${labelName}`}
        type="text"
        placeHolder="Enter name"
      />
    );
  }
);
stories.add(
  'Active Text Field',

  () => {
    const labelName = text('Label Name', ' First Name');

    return (
      <TextBox
        labelName={`${labelName}`}
        type="text"
        placeHolder="Enter name"
        style="Active"
      />
    );
  }
);
stories.add(
  'Disabled Text Field',

  () => {
    const labelName = text('Label Name', ' First Name');

    return (
      <TextBox
        disabled={boolean('Disabled', true)}
        labelName={`${labelName}`}
        type="text"
        style="Disabled"
      />
    );
  }
);

stories.add(
  'Error Text Field',

  () => {
    const labelName = text('Label Name', ' First Name');
    const errorMessage = text(
      'Error Message',
      'Please enter  First first name'
    );

    return (
      <TextBox
        labelName={`${labelName}`}
        type="text"
        disabled={boolean('Disabled', true)}
        style="Error"
        errorMessage={`${errorMessage}`}
      />
    );
  }
);

stories.add(
  'Filled',

  () => {
    const labelName = text('Label Name', 'First Name');
    const value = text('Value', 'Catherine Lam');

    return (
      <TextBox
        labelName={`${labelName}`}
        type="text"
        style="Filled"
        value={`${value}`}
      />
    );
  }
);
