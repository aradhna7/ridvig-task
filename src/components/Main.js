import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import {cardsData} from '../shared/cardsData'

const Main = () => {
    console.log(cardsData);
    return (
        <div id="content" class="p-4 p-md-5 pt-5">
            <Navbar/>
            <div className="container">
                <div className="row">
                {cardsData.map(cardData=> <Card cardData={cardData}/>)}
                </div>
           
            </div>
            
           
        </div>
    )
}

export default Main
