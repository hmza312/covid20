import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import CustomLayout from './container/layout';

function App() {
  return (
    <div >
        <Router> 
          <CustomLayout>
            <BaseRouter/> 
          </CustomLayout>
         </Router>
    </div>
  );
}

export default App;
