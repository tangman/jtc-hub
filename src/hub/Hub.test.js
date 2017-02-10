import React from 'react';
import ReactDOM from 'react-dom';
import Hub from './Hub';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hub />, div);
});
