import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props;

  }

  render() {

    return       <div className='app' style={{height: '100%'}} >
      {this.props.children}
    </div>
  }
}



export default connect()(App)
