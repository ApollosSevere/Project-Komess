import React from 'react'

function CustomerRating() {
    return (
        <div className="p-4 border-top">
            <div className="crBody">
                <div  className='sectionHeader'>
                    <h5 className="font-size-45 mb-0">Customer Rating</h5>
                    <i class="mdi mdi-chevron-up float-end accor-down-icon text-primary "></i>
                </div>

                <div className="collapse show">
                   <div className="mt-4 crList">

                       <div className="form-check">
                           <input type="radio" name="productRating1" id="" className="form-check-input" />
                           <label htmlFor="productRating1" className="form-check-label"> 
                                <span>4</span>
                                <i className="mdi mdi-star text-warning"></i>
                                <span>& above</span>
                           </label>
                       </div>

                       <div className="form-check">
                           <input type="radio" name="productRating1" id="" className="form-check-input" />
                           <label htmlFor="productRating1" className="form-check-label"> 
                                <span>3</span>
                                <i className="mdi mdi-star text-warning"></i>
                                <span>& above</span>
                           </label>
                       </div>

                       <div className="form-check">
                           <input type="radio" name="productRating1" id="" className="form-check-input" />
                           <label htmlFor="productRating1" className="form-check-label"> 
                                <span>2</span>
                                <i className="mdi mdi-star text-warning"></i>
                                <span>& above</span>
                           </label>
                       </div>

                       <div className="form-check">
                           <input type="radio" name="productRating1" id="" className="form-check-input" />
                           <label htmlFor="productRating1" className="form-check-label"> 
                                <span>1</span>
                                <i className="mdi mdi-star text-warning"></i>
                                <span>& above</span>
                           </label>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerRating
