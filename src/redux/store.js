import { createStore } from 'redux';

import countReducer from './count/countReducer';

const store = createStore(countReducer);

export default store; 