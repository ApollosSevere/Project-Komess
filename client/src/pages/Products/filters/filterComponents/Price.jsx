import React from 'react'
import IonRangeSlider from 'react-ion-slider'
function Price() {
    return (
        <div class="p-4 border-top">
            <div>
                <h5 class="font-size-14 mb-4">Price</h5>

                <IonRangeSlider type="double" skin="round" gird={true} min={0} max={1000}
                    from={200} to={800} prefix="$"
                />
            </div>
        </div>
    )
}

export default Price
