import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import React from 'react'
import Filters from './filters/Filters'
import Merchendise from './merchendise/Merchendise'

function Products() {
    return (
        <div>
            <div className="productBreadcrumb">
                <Breadcrumb 
                    pageName="Products" 
                    pageType="Ecommerce" 
                    title="Products"
                />
            </div>
            
            <div className="main">
                <Filters />
                <Merchendise />
            </div>
        </div>
    )
}

export default Products
