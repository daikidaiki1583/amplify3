import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Home from './component/pages/home'
import TrainingList from './component/templates/trainingList';
import ManageAuth from './component/templates/auth';

function App() {
  return (
    <>
      <Route path='/'>
          <Home/>
      </Route> 
      <Route path='trainglist'>
        <TrainingList/>
      </Route>
      

    </>
  );
}

export default App;
