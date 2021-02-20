'use sctrict';

import React from 'react';
import Proptype from 'prop-types';

const App = (props) => {
  return <h1>Application {props.name}</h1>;
};
App.propTypes = {
  name: Proptype.string,
};
export default App;
