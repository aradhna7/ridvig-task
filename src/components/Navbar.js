import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Best Tenders</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
               
                </ul>
                <div class="form-inline my-2 my-lg-0">
                <svg width="30" height="30">
                <circle cx="15" cy="15" r="10" fill="#f7422d" />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="10px" font-family="Arial" dy=".3em">1</text>
                Sorry, your browser does not support inline SVG.
                </svg>
                <a href="#"><span class="fa fa-bell mr-3" style={{color:"grey"}}></span></a>{' '}
                <i class="icon fa fa-search search-icon"></i>
                
                <input type="text" placeholder="Search.."   style={{borderRadius: "25px",paddingLeft: "39px",borderColor:"transparent", height:"38px",margin:"14px", marginLeft: "-35px"}}/>

                <img src="data:image/jpeg;base64,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" height="25" width="25"></img>{' '}<p class="user">David</p>
                
            
                </div>
            </div>
        </nav>
    )
}

export default Navbar