import React from 'react';
import DefaultPage from './tutrial/DefaultPage'


import { BrowserRouter, Route } from "react-router-dom";
import AdmissionFeeCalculator from './tutrial/Tutrial'

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={DefaultPage}/>
        <Route exact path='/tutrial' component={AdmissionFeeCalculator}/>
    </BrowserRouter>
  );
}

export default App;
