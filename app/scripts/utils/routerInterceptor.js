import scroll from 'scroll';
import scrollDoc from 'scroll-doc';
import ease from 'ease-component';

const page = scrollDoc();

export function scrollBefore(nextState, transition, callback) {
  scroll.top(page, 0, { ease: ease.inBounce }, () => {
    callback();
  });
}
