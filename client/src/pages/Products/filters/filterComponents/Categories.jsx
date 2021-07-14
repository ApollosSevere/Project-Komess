import React from 'react'

function Categories() {
    return (
        <div class="p-4">
            <h5 class="font-size-14 mb-3">Categories</h5>
            <div class="custom-accordion">
                <a class="text-body fw-semibold pb-2 d-block" data-bs-toggle="collapse" href="#categories-collapse" role="button" aria-expanded="false" aria-controls="categories-collapse">
                    <i class="mdi mdi-chevron-up accor-down-icon text-primary me-1"></i> Footwear
                </a>
                <div class="collapse show" id="categories-collapse">
                    <div class="card p-2 border shadow-none">
                        <ul class="list-unstyled categories-list mb-0">
                            <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Formal Shoes</a></li>
                            <li class="active"><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Sports Shoes</a></li>
                            <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> casual Shoes</a></li>
                            <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Sandals</a></li>
                            <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Slippers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
// h

export default Categories
