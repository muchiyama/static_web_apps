import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Header } from './shared/Header'
import DefaultPage from './tutrial/DefaultPage'
import Search from './pages/Search'
import AdmissionFeeCalculator from './tutrial/Tutrial'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container>
        <Route exact path='/' component={DefaultPage}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/tutrial' component={AdmissionFeeCalculator}/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
