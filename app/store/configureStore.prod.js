/**
 *
 * Preparing the current store state before sending to components [PROD]
 *
 */

import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState
	)
}