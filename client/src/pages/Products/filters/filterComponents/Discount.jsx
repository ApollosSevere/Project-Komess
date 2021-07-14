import React from 'react'

function Discount() {
    return (
        <div className="p-4 border-top">
            <div className="discountBody">
                <div  className='sectionHeader'>
                    <h5 className="font-size-45 mb-0">Discount</h5>
                    <i class="mdi mdi-chevron-up float-end accor-down-icon text-primary "></i>
                </div>
                
                {/* Always name this section "collapse becasue this is where it goes in an out" */}
                <div className="collapse show">
                    <div className="mt-4">
                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>50% or more</span>
                        </div>

                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>40% or more</span>
                        </div>

                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>30% or more</span>
                        </div>


                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>20% or more</span>
                        </div>

                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>10% or more</span>
                        </div>

                        <div className="dis">
                            <input type="radio" name="discountQuery" id="" />
                            <span>Less than 10%</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Discount
