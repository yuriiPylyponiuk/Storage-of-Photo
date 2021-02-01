import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from "../pages/mainPage/mainPage";
import RandomPage from '../pages/randomPage/randomPage'
import Header from '../components/navigation/navComponent'
import CardPage from '../pages/cardPage/cardPage'


const RouterPages = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/random-photo/' component={RandomPage}/>
          <Route exact path='/cardPage/' component={CardPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterPages