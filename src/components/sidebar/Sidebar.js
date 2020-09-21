import React,{ useCallback, useState} from 'react'

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    // const toggleSidebar = useCallback(() => setShowSidebar(value => !value));

    return (
        <div>
            
        {/* {showSidebar ? */}
        
        <nav id="sidebar">
  
 			 {/* <div class="custom-menu">
				<button type="button" onClick={()=> setShowSidebar(!showSidebar)} class="btn btn-primary">
	          <i class="fa fa-bars"></i>
	          <span class="sr-only">Toggle Menu</span>
	        </button>
       		 </div> */}
			<div class="p-4">
		  		<h1><a href="index.html" class="logo">Tenderfarm</a></h1>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
	            <a href="#"><span class="fa fa-home mr-3"></span> COMPANY</a>
	          </li>
	          <li>
	              <a href="#"><span class="fa fa-search mr-3"></span> EXPLORE</a>
	          </li>
	          <li>
              <a href="#"><span class="fa fa-briefcase mr-3" style={{color:"#239ec8"}}></span> LATEST TENDERS</a>
	          </li>
	          <li>
              <a href="#"><span class="fa fa-briefcase mr-3" style={{color:"#239ec8"}}></span>  TEAM SERACH</a>
	          </li>
	          <li>
              <a href="#"><span class="fas fa-comment-dots mr-3"></span> NOTIFICATION{' '}
			  <svg width="30" height="30">
                <circle cx="15" cy="15" r="10" fill="orange" />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="10px" font-family="Arial" dy=".3em">1</text>
                Sorry, your browser does not support inline SVG.
                </svg></a>
	          </li>
	          
	        </ul>

        

	        <div class="mb-5">

            <div class="card apple-card">
            <div class="card-body">
                <h5 class="card-title">
                    <span class="fab fa-apple mr-3"></span>Apple Inc.<br></br><span class="endingsoon">Ending soon</span>
                </h5>
                <p class="card-text">Hey, don't forget, there's still time to get that tender.</p>
             
            </div>
            </div>
			
						
			</div>

            <ul class="list-unstyled components mb-5">
	          <li class="active">
	            <a href="#"><span class="fa fa-envelope mr-3"></span> MESSAGES</a>
	          </li>
	          <li>
	              <a href="#"><span class="fa fa-user mr-3"></span> PROFILE</a>
	          </li>
	      
	          
	        </ul>

	        <div class="footer col-12">
	        	<div class="col-6" style={{display:"inline-block"}}>
				
					<h5 class="card apple-card">
						<span class="fas fa-cog lowericons"></span>
					</h5>
					
				
		
				</div>
				<div class="col-6" style={{display:"inline-block"}}>
				<h5 class="card apple-card">
						<span class="fas fa-users lowericons"></span>
				</h5>
				</div>
				
	        </div>
		
</div>

    	</nav> 
         {/* :
         <div class="custom-menu">
         <button type="button" onClick={()=> setShowSidebar(!showSidebar)} class="btn btn-primary">
      <i class="fa fa-bars"></i>
       <span class="sr-only">Toggle Menu</span>
    </button>
 </div>


         } */}
        </div>
    )
}

export default Sidebar
