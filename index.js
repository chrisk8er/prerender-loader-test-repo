import React from 'react';
import { render } from 'react-dom';
const App = () => (
  <div>
    <div>Index</div>
    <div>
      <a href="/show.html">Go Show</a>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
export default () => {
  render(<App />, document.getElementById('root'));
};
