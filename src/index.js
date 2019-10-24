import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';

// if (module.hot) {
//   module.hot.accept('./App', () => {ReactDOM.render(document.getElementById('app'))})
// }

ReactDOM.render(<App/>, document.getElementById('app'));