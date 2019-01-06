import React from 'react';
import ReactDom from 'react-dom';

import 'index.scss'

let HelloWorld = () => {
  return <h1>Hello World </h1>
}

ReactDom.render(
  <HelloWorld></HelloWorld>,
  document.getElementById('root')
)