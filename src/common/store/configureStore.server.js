/**
 * Created by Andrey on 05.07.2016.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'


export default function configureStore(onComplete) {

  let store = createStore(reducers, applyMiddleware(thunk));



  return store;
}