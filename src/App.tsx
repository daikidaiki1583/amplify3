import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router';

import Header from './component/templates/header';
import Home from './component/pages/home';
import ManageAuth from './component/templates/auth';
import TrainingList from './component/templates/trainingList';

function App() {
  return (
   <>
   <Header/>
   <Switch>
      <Route exact path='/'>
          <Home/>
      </Route> 
      <Route path='/auth'>
          <ManageAuth/>
      </Route>
      <Route path='/trainglist'>
          <TrainingList/>
      </Route>
   </Switch> 
   </>   
  );
}

export default App;
