import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SensoryProvider from './context/SensoryContext'
import { BrowserRouter } from 'react-router-dom';


function Root(){
  return(
    <SensoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SensoryProvider>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,

  document.getElementById('root')
);
