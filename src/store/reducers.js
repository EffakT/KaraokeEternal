import { combineReducers } from 'redux'
import { optimistic } from 'redux-optimistic-ui'
import { createResponsiveStateReducer } from 'redux-responsive'

// reducers
import artists from 'routes/Library/modules/artists'
import library from 'routes/Library/modules/library'
import location from './modules/location'
import prefs from './modules/prefs'
import queue from 'routes/Queue/modules/queue'
import rooms from './modules/rooms'
import songs from 'routes/Library/modules/songs'
import status from './modules/status'
import ui from './modules/ui'
import user from './modules/user'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    artists,
    browser: createResponsiveStateReducer(),
    library,
    location,
    prefs,
    queue: optimistic(queue),
    rooms,
    songs,
    status,
    ui,
    user,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
