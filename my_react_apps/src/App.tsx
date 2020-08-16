import React from 'react';
import Default from './tutrial/Default'

import { BrowserRouter, Route } from "react-router-dom";
import AdmissionFeeCalculator from './tutrial/Tutrial'

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Default}/>
        <Route exact path='/tutrial' component={AdmissionFeeCalculator}/>
    </BrowserRouter>
  );
}

export default App;
