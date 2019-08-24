import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import { addReadme } from 'storybook-readme';
import AlephButton from '../src/components/Cats/Button/Button';
import TextBox from '../src/components/formElements/textField';
import ButtonRedme from './alephButtonRedme.md';
import readme from './bbredme.md';

const storiesOfTextFields = storiesOf('Forms Elements/Text Field', module);
storiesOfTextFields.addDecorator(withKnobs);
storiesOfTextFields.addDecorator(addReadme);

storiesOfTextFields.addParameters({
  readme: {
    // Show readme before story
    content: readme,
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace'

    // Show readme at the addons panel
  }
});
storiesOfTextFields.add('Text Field', () => {
  const labelName = text('Label Name', ' First Name');
  const errorMessage = text(
    'Error Message',
    'Please enter  First first name'
  );
  const value = text('Value', 'Catherine Lam');

  return( 
  <WithFigma
    url={'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=0%3A1'}
  >
    <>
        <br />
        <p style={{ paddingLeft: '10px' }}>Default TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          placeHolder="Enter name"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Active TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          placeHolder="Enter name"
          status="Active"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Disabled TextField</p>
        <TextBox
          disabled={boolean('Disabled', true)}
          labelName={`${labelName}`}
          type="text"
          status="Disabled"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Error TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          disabled={boolean('Disabled', true)}
          status="Error"
          errorMessage={`${errorMessage}`}
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Filled TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          status="Filled"
          value={`${value}`}
        />
      </>
  </WithFigma>


   
  )
  }
)



const storiesOfButton = storiesOf('Forms Elements/Text Field', module);
storiesOfButton.addDecorator(withKnobs);
storiesOfButton.addDecorator(addReadme);

storiesOfButton.addParameters({
  readme: {
    // Show readme before story
    content: ButtonRedme,
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace'

    // Show readme at the addons panel
  }
});
storiesOfButton.add(
  ' Primary Button',

  () => {
    const labelName = text('Label Name', ' First Name');

    const value = text('Value', 'Catherine Lam');
    return (
      <WithFigma
      url={'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=0%3A1'}
    >
      <>
        <br />
        <p style={{ paddingLeft: '10px' }}>Primary Button</p>
        <AlephButton type="primary" title="Find my event" />
        <AlephButton type="primaryWhiteBackground" title="Learn More About INSEAD" />

        <br />
        <p style={{ paddingLeft: '10px' }}>Primary Disabled</p>
        <AlephButton type="PrimaryDisabled" title="Find my event" />
        <AlephButton type="PrimaryDisabledNoBackgroud" title="Filter" />

        <br />
        <p style={{ paddingLeft: '10px' }}>Primary AutoFill</p>
        <AlephButton type="PrimaryAutoFill" title="AutoFill with" />
        <br />
      </>
        </WithFigma>
    );
  }
);
