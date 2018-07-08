import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducers from '../reducers';

const logger = createLogger();
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export default (initialState = {}) => (
    createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware, middleware, logger)
    )
);