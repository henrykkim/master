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
        <Link to="/yet-tuh/">
          <Card 
          title ="Yet Tuh" 
          subtitle="Sanghoon Oh"
          text="Yet Tuh is one of most popular Korean restaurants in Atlanta. Why is this place special?" 
          image={require('../images/yet_tuh1.jpg')}          
          />
        </Link>
        <Link  to="/pijubelly/">
          <Card 
          title ="Piju Belly" 
          subtitle="Lenny Shao"
          text="Yet Tuh is one of most popular Korean restaurants in Atlanta. Why is this place special?" 
          image={require('../images/piju/1.jpg')}  
          />
        </Link>
        <Link  to="/d92/">
          <Card 
          title ="D92 Korean BBQ" 
          subtitle="Justin Lee"
          text="Yet Tuh is one of most popular Korean restaurants in Atlanta. Why is this place special?" 
          image={require('../images/d92/1.jpg')}  
          />
        </Link>
        
      </div>
    </div>
  </div>

  
)

export default IndexPage
