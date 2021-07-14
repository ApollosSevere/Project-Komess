import React from 'react'
import Product from './merchComponents/Product'

function Merchendise() {
    return (
        <div className='col-xl-9 col-lg-8'>
            <div className="card">
                <div className="card-body">
                    <div>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <h5>Showing result for "Shoes"</h5>
                                    <ol class="breadcrumb p-0 bg-transparent mb-2">
                                        <li class="breadcrumb-item"><a href="#">Footwear</a></li>
                                        <li class="breadcrumb-item active">Shoes</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-inline float-md-end">
                                    <div class="search-box ml-2">
                                        <div class="position-relative">
                                            <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..."/>
                                            <i class="mdi mdi-magnify search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="nav nav-tabs mt-3 mb-2">
                            <li class="nav-item">
                                <a class="nav-link disabled fw-medium" 
                                    href="#" tabindex="-1" 
                                    aria-disabled="true">Sort by:</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Popularity</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Newest</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Discount</a>
                            </li>
                        </ul>

                        {/* <ul className="nav nav-tabs mt-3 mb-2">
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                            </li>
                        </ul> */}


                        <div className="row mt-4">
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchendise
