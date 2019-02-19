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
      <h2>Discover their stories and food</h2>
      <div className="CardGroup">
        <Link to="/page-2/">
          <Card 
          title ="Yet Tuh" 
          subtitle="Sanghoon Oh"
          text="Yet Tuh is one of most popular Korean restaurants in Atlanta. Why is this place special?" 
          image={require('../images/yet_tuh1.jpg')}          
          />
        </Link>
        <Card 
        title ="Yet Tuh" 
        subtitle="Sanghoon Oh"
        text="Yet Tuh is one of most popular Korean restaurants in Atlanta. Why is this place special?" 
        image={require('../images/yet_tuh1.jpg')}  
        />
      </div>
    </div>
  </div>

  
)

export default IndexPage
