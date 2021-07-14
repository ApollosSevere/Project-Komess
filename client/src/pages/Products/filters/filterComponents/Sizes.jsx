import React from 'react'

function Sizes() {
    /* With the onClick, we will use HOC inorder to add the clicking functionaily to this part Boi !! */ 

    return (
        <div className="p-4 border-top">
            <div  className='sectionHeader'>
                <h5 className="font-size-14 mb-0">sizes</h5>
                <i class="mdi mdi-chevron-up float-end accor-down-icon text-primary "></i>
            </div>

            <div className="collaspe show">
                <div className="mt-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-1">
                            <h5 className="font-size-15 mb-0">Select Sizes</h5>
                        </div>

                        <div className="w-xs">
                            <select className="form-select">
                                <option value="1">3</option>
                                <option value="2">4</option>
                                <option value="3">5</option>
                                <option value="4">6</option>
                                <option value="5" selected>7</option>
                                <option value="6">8</option>
                                <option value="7">9</option>
                                <option value="8">10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sizes
