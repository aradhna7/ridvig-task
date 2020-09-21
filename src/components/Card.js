import React from 'react'

const Card = ({cardData}) => {

    const {name, image, text, teams, success, budget}= cardData;
    return (
        <div class="col-12 col-md-6 col-lg-4">
        <div class="profile-card card col-12 mt-3">
                <div class="card-header">
                <div class="card-heading">{name}</div>
                    <img class="profile-image" src={image}/>
                    <div class="profile-name" style={{color:"orange"}}>02d:15h:54m</div>
                    <div class="profile-role">{text}</div>
                   
                </div>
                <div class="card-body ">
                    <div class="col-4" style={{ display: "inline-block", padding:"0"}}>
                        <p class="card-lower" style={{color:"black"}}>
                            {teams}
                        </p>
                        <p class="card-lower">
                            teams
                        </p>
                    </div>
                    <div class="col-4" style={{ display: "inline-block", padding:"0"}}>
                        <p class="card-lower" style={{color:"black"}}>
                            {budget}
                        </p>
                        <p class="card-lower">
                           Budget
                        </p>
                    </div>
                    <div class="col-4" style={{ display: "inline-block", padding:"0"}}>
                        <p class="card-lower" style={{color:"black"}}>
                         {success}
                        </p>
                        <p class="card-lower">
                           Success
                        </p>
                        
                        
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card
