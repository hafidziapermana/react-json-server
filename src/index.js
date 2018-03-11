import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: sans-serif;
    color: #1d1d1d;
  }
`

render(<App />, document.getElementById('root'));