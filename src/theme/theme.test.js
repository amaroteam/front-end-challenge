import colors from './colors';
import breakpoints from './breakpoints';

describe('theme', () => {
  it('should return correctly', () => {
    expect(colors).toMatchSnapshot({});
    expect(breakpoints).toMatchSnapshot({});
  });
});
