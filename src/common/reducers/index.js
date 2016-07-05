/**
 * Created by Andrey on 05.07.2016.
 */
import {combineReducers} from 'redux';
import invoices from './invoices';

const root = combineReducers({invoices});

export default root;


