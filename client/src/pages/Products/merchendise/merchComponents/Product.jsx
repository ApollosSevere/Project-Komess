import React from 'react'

function Product() {
    return (
        <div class="col-xl-4 col-sm-6">
            <div class="product-box">
                <div class="product-img pt-4 px-4">
                    <div class="product-ribbon badge bg-warning">
                        Trending
                    </div>
                    <div class="product-wishlist">
                        <a href="#">
                            <i class="mdi mdi-heart-outline"></i>
                        </a>
                    </div>
                    <img src="public/assets/images/product/img-1.png" alt="" class="img-fluid mx-auto d-block"/>
                </div>
                
                <div class="text-center product-content p-4">
                    
                    <h5 class="mb-1"><a href="#" class="text-dark">Nike N012 Shoes</a></h5>
                    <p class="text-muted font-size-13">Gray, Shoes</p>

                    <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$280</del></span> $260</h5>
                    
                    <ul class="list-inline mb-0 text-muted product-color">
                        <li class="list-inline-item">
                            Colors :
                        </li>
                        <li class="list-inline-item">
                            <i class="mdi mdi-circle text-dark"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="mdi mdi-circle text-light"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="mdi mdi-circle text-primary"></i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Product
