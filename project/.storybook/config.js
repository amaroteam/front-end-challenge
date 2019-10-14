import { configure, addDecorator } from '@storybook/react';

import { ThemeDecorator } from './decorators';

addDecorator(ThemeDecorator);

configure(require.context('../src', true, /\.stories\.js$/), module);
