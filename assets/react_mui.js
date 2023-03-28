import './styles/react_mui.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
//import Hello from './components/mui/Hello';
//import BasicTable from './components/mui/BasicTable';
//import BookDataGrid from './components/mui/BookDataGrid';
import TestForm from "./components/mui/complex/TestForm";

console.log('run react_mui.js');
const root = ReactDOM.createRoot(document.getElementById("react-mui"));
root.render(<><TestForm/></>);

