/**
 * Created by Andrey on 05.07.2016.
 */


//import {dbUrl, host} from '../../../config';
const dbUrl = 'http://127.0.0.0:3000/db';
export function getInvoice(data) {
  return {
    type: 'INVOICE_GET',
    data: data
  }
}

export function fetchInvoices(password) {
  return dispatch => {

    fetch(`${dbUrl}/invoice/`)
      .then(res => res.json())
      .then(json => {
        if(json.error) throw new Error(json.error.message);
        else dispatch(getInvoice(json));})
      .catch(err => {console.log(err, err.message)});

  };
}