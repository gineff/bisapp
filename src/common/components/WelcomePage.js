/**
 * Created by Andrey on 05.07.2016.
 */
import React from 'react';
import {Link} from 'react-router';

const WelcomePage = ()=> {
  return (<div>
    This is Welcome page
    <Link to="/signin">
      <button>Go to sign in page </button>
    </Link>
  </div>)
}

export default WelcomePage