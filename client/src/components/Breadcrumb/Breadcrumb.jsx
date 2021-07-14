import React from 'react'

function Breadcrumb({ title, pageName, pageType }) {
    return (
        <div className="row">
            <div className="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">{ title }</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">{ pageName }</a></li>
                            <li class="breadcrumb-item active">{ pageType }</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
