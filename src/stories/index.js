import React from 'react'
import '../reset.css'
import '../index.css'
import './styles.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import decorateWithProvider from 'stories/Provider'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('ConnectedComponent', module)
  .addDecorator(decorateWithProvider)
  .add('test', () => <Button>hoi</Button>)
