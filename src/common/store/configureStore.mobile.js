/**
 * Created by Andrey on 05.07.2016.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {AsyncStorage} from 'react-native';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

export default function configureStore(onComplete) {

  let engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine);
  let store = createStore(storage.reducer(reducers), applyMiddleware(thunk, storeMiddleware));


  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));

  return store;
}