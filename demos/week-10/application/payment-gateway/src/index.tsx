import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const rootEl = document.getElementById( 'root' ) as HTMLElement;

const root = ReactDOM.createRoot( rootEl );
root.render( <App></App> );