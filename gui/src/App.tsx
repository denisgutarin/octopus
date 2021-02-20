import React from 'react';
import Proptype from 'prop-types';

type Props = {
  name?: string;
};

const App = (props: Props) => {
  return <h1>Application {props.name}</h1>;
};
App.propTypes = {
  name: Proptype.string,
};
export default App;
