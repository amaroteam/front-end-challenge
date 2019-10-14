import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { iconsLibrary } from '.';

const stories = storiesOf('Icon', module);

Object.keys(iconsLibrary).map(item =>
  stories.add(`${item}`, () => <Icon name={item} />)
);
