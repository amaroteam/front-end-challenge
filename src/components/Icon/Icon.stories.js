import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { iconsLibrary } from '.';

const stories = storiesOf('Icon', module);

Object.keys(iconsLibrary).map(item =>
  stories.add(`${item}`, () => (
    <div style={{ margin: 50 }}>
      <Icon name={item} size='3em' />
    </div>
  ))
);
