/**
 * Created by Andrey on 05.07.2016.
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchInvoices} from '../actions/invoicesActions'

const InvoiceItem = ({item})=> {
  return <li>
    item.description
  </li>
};

const Invoices = ({items, fetchInvoices})=> {
  return (
    <ul>
      {items.map((item)=> <InvoiceItem key={item._id} item={item}/>)}
    </ul>
  )
};

function  mapStateToProps(state) {
  return {
    items: state.invoices
  }
}

function  mapDispatchToProps(dispatch) {
  return {
    fetchInvoices: dispatch(fetchInvoices())
  }
}

export default connect(mapStateToProps)(Invoices)