import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Top">
      <div className="TopGroup">
        <h1>Korean Food, <br />Korean People</h1>
        <p>Atlanta has one of the biggest Korean immigrant population in the U.S. Here are interviews of five Korean immigrants who own Korean restaurants in Atlanta. </p>
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
        <Card 
        title ="Design System" 
        text="10 Sections" 
        image={require('../images/yet_tuh1.jpg')}  
        />
      </div>
    </div>
  </div>

  
)

export default IndexPage
