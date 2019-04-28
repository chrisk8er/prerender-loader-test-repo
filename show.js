import React from 'react';
import { render } from 'react-dom';
const App = () => (
  <div>
    <div>Show</div>
    <div>
      <a href="/">Go Index</a>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
export default () => {
  render(<App />, document.getElementById('root'));
};
