import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

export { reactotron };
