import React from 'react'
import Categories from './filterComponents/Categories'
import Price from './filterComponents/Price'
import Sizes from './filterComponents/Sizes'
import Colors from './filterComponents/Colors'
import Discount from './filterComponents/Discount'
import CustomerRating from './filterComponents/CustomerRating'

function Filters() {
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="card">

                <div class="card-header bg-transparent border-bottom">
                    <h5 class="mb-0">Filters</h5>
                </div>

                <Categories />
                <Price />
                <div className="custom-accordion">
                    <Sizes />
                    <Colors />
                    <CustomerRating />
                    <Discount />
                </div>
                

            </div>
        </div>
    )
}

export default Filters
