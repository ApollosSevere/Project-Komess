import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import React, { useState } from 'react';
import './practice.css';
// import Products from './pages/Products/Products';
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
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="card">
        
      <div className="card-header bg-transparent borderbottom">
        <h5 className="mb-0">Filters</h5>
      </div>


    <div className="p-4">
      <h5 className="secText font-size-13 mb-2">Categories</h5>

      <div className="custom-accordion">
        <div className="filterHeader">
          <i onClick={handleClick} class="mdi mdi-chevron-up float-start accor-down-icon text-primary "></i>
          <div className="secText">Footwear</div>
        </div>

        <div className={click ? "collapse show" : "collapse"}>
          <div className="card mt-2 ">
            <ul className="mt-3 you">
              <li><a href="#"><i class="mdi mdi-circle-medium text-dark me-1"></i> Formal Shoes</a></li>
              <li class="active"><a href="#"><i class="mdi text-dark mdi-circle-medium me-1"></i> Sports Shoes</a></li>
              <li><i class="mdi mdi-circle-medium text-dark me-1"></i> casual Shoes</li>
              <li><a href="#"><i class="mdi text-dark mdi-circle-medium me-1"></i> Sandals</a></li>
              <li><a href="#"><i class="mdi text-dark mdi-circle-medium me-1"></i> Slippers</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

      </div>
    </div>
  )
}
const Product = () => {
  return (
    <div className="col-xl-4 col-sm-6">
      <div className="product-box">
        <div className="product-img pt-4 px-4">
          <div className="product-ribbin badge bg-warning">Trending</div>
        </div>
        
        <div class="product-wishlist float-end">
          <a href="#">
            <i class="mdi mdi-heart-outline"></i>
          </a>
        </div>

        <img src="public/assets/images/product/img-1.png" alt="" class="img-fluid mx-auto d-block"/>        
      </div>

      <div className="text-center product-content p-4">
        <h5 className="mb-1 text-dark">Nike NO12 Shoes</h5>
        <p className="text-muted font-size-13">Gray, Shoes</p>
      </div>
    </div>
  )
}
const ProductMain = () => {
  return (
    <div className="col-xl-9 col-lg-8">
      <div className="card p-3">
        
        <div className="row">

          <div className="col-6">
            <h5>Showing result for "Shoes"</h5>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Footwear</li>
              <li className="breadcrumb-item active">Shoes</li>
            </ol>
          </div>

          <div className="col-6">
            <div className="form-inline float-md-end">
              <div className="search-box ml-2">
                <div className="position-relative">
                <i className="mdi mdi-magnify search-icon"></i>
                  <input type="text" className="form-control bg-light border-light-rounded" 
                  placeholder="Search..." />
                <i className="uil-search"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
  {/* -------------------- Important Features To Learn ---------------------- */}
        <ul className="nav nav-tabs nav-tabs-custom mt-3 mb2">
        <li className="nav-item">
          <div className="nav-link disabled fw-medium">Sort by:</div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link active text-primary">Popularity</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark">Newest</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark">Discount</a>
        </li>
      </ul>

        <div className="row">
          <Product />
          {/* <Product />
          <Product /> */}
        </div>
      </div>
    </div>
  )
}
const Products = () => {
  return (
    <div>
      {/* Below will become a nice Breadcrum area !! */}
      <p>Products Page</p>
      {/* Uptop will become a nice Breadcrum area !! */}
      <div className="pMain">
        <Filters />
        <ProductMain />
      </div>
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