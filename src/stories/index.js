import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { storiesOf, action } from '@kadira/storybook';

import {withKnobs, text, boolean, number, select} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

// Knobs for React props
stories.addWithInfo('Bootstrap.Button', 'Demo bootstrap button' ,() => (
    <Button bsStyle={select('kind',{primary:'primary', danger: 'danger', default: 'default'}, 'default')}
            bsSize={select('size',{xs:'xs', sm: 'sm', lg: 'lg'}, 'sm')}
        disabled={boolean('Disabled', false)}
            onClick={action('clicked')}
    >
        {text('Label', 'Hello Button')}
    </Button>
))

// Knobs as dynamic variables.
stories.add('Dynamic variables', () => {
    const name = text('Name', 'Tengjiao Cai');
    const age = number('Age', 100);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
});