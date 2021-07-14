import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import React from 'react';
import './practice.css';
// import './App.css';



function Header() {
  return (
    <div className="header">
      <div className="top-nav">

      </div>

      <div className="container-fluid">
        <div className="navigation">
          <div className="row">
                  <div className="col">hey</div>
                  <div className="col">hey</div>
                  <div className="col">hey</div>
                  <div className="col">hey</div>
                  <div className="col">hey</div>
                  <div className="col">hey</div>
              </div>
          </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <h1 className="homeText">Home Page</h1>
      <p className="homeLink">Click link Below For First Page in Development!</p>

      <ul className="homeNav">
        <a href="/products">Products Page!</a>
      </ul>
    </>
  )
}

const Filters = () => {
  return (
    <div></div>
  )
}
const Products = () => {
  return (
    <div>
      <p>Products Page</p>
      <div className="card">Hey</div>
    </div>
  )
}

function MainPractice() {
  return (
    <div className="layout-wrapper">
      <Router>
        <Header/>

        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <Switch>

                <Route path="/" exact component={Home}/>
                <Route path="/products" component={Products}/>

              </Switch>
            </div>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default MainPractice;