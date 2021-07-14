import React from 'react'
import ShowColor from '../util/ShowColor'

function Colors() {
    return (
        <div className="p-4 border-top">
            <div className="colorsBody">
                {/* <SectionHeader title="Colors"/> */}
                <div  className='sectionHeader'>
                    <h5 className="font-size-45 mb-0">colors</h5>
                    <i class="mdi mdi-chevron-up float-end accor-down-icon text-primary "></i>
                </div>

                <div className="collapse show">
                    <div className="mt-4 ">
                        <ShowColor color="text-dark" title="Black"/>
                        <ShowColor color="text-light" title="White"/>
                        <ShowColor color="text-secondary" title="Gray"/>
                        <ShowColor color="text-primary" title="Blue"/>
                        <ShowColor color="text-success" title="Green"/>
                        <ShowColor color="text-danger" title="Red"/>
                        <ShowColor color="text-warning" title="Yellow"/>
                        <ShowColor color="#553C7B" title="Purple"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colors

/* The className="p-4" --> is a nice litte way to add padding to all four
    sides of an element you are working on boi!! Remember this + border-top
*/ 