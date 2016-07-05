/**
 * Created by Andrey on 05.07.2016.
 */


import React from 'react';
import {Link} from 'react-router';

const SignIn = ()=> {
  return (<div>
    This is Sign page
    <Link to="/welcome">
      <button>Go to welcome in page</button>
    </Link>
  </div>)
}

export default SignIn