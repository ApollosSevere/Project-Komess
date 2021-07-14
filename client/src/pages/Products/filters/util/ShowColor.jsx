import React from 'react'

function ShowColor({ color, title }) {
    return (
        <div class="colorsUl">
            <input type="checkbox" class="form-check-input"/>
            <div class="colorLabel">
                <i className={`mdi mdi-circle ${color} mx-1`} ></i>
                <div className="colorTitle">{title}</div>
            </div>
        </div>
    )
}

export default ShowColor
