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
    <div className="MenuContainer">
      <h1 className="MenuTitle">Discover Korean Food and Immigrants' Stories Around Atlanta</h1>
      <a href="/jokga">
      <img src={require('../images/jokga/3.jpg')} width="100%" className="MenuImg" /></a>
      <div className="FoodName">
      <a href="/jokga">
        <h2>Jokbal and Bossam(Pig's Feet and Steamed Pork Belly)</h2>
        </a>
      </div>
      <div className="FoodDescription">
      <a href="/jokga">
        <p>Jokbal is a Korean dish consisting of pig's trotters cooked with soy sauce and spices. Bossam is a pork dish in Korean cuisine. It usually consists of belly pork that is boiled in spices and thinly sliced. You can find this combo deal at Jok Ga A Dong Chim.</p></a>
      </div>
      <a href="/thanku">
      <img src={require('../images/thanku/2.jpg')} width="100%" className="MenuImg" /></a>
      <div className="FoodName">
      <a href="/thanku"><h2>Fried and Spicy & Sweet Marinated Chicken</h2></a>
      </div>
      <div className="FoodDescription">
      <a href="/thanku">
        <p>Fried and Spicy & Sweet Marinated Chicken are the most classic fried chicken in South Korea. Original Fried Chicken has crunch batter with enough salt that it's delicious by itself. If you want more sweet and spicy flavor, a marinated version will make you lick your finger. These two are available as a combo deal at Thank U Chicken.</p></a>
      </div>
      <a href="/yettuh">
      <img src={require('../images/yettuh/6.jpg')} width="100%" className="MenuImg" /></a>
      <div className="FoodName">
      <a href="/yettuh"><h2>Andong jjimdak(Spivy Boiled Chicken with Vegetables)</h2></a>
      </div>
      <div className="FoodDescription">
      <a href="/yettuh">
        <p>Andong jjimdak, which originated from the city of Andong, is a spicy braised chicken dish that has become enormously popular since the late 1990’s. Braised in a sweet and savory braising liquid, the dish gets its nicely clean spicy kick from dried whole red chili peppers and fresh hot chili peppers. This unique dish can be found at one of the most popular Korean restaurants in Atlanta, Yet Tuh.</p></a>
      </div>
      <a href="/d92">
      <img src={require('../images/d92/6.jpg')} width="100%" className="MenuImg" /></a>
      <div className="FoodName">
      <a href="/d92">
        <h2>All-You-Can-Eat Korean BBQ</h2></a>
      </div>
      <div className="FoodDescription">
      <a href="/d92">
        <p>D92 Korean BBQ, located in Decatur, offers AYCE Korean BBQ for lunch and dinner. For a starting price of $30, you can try Pork Belly, the most popular meat for Korean BBQ, Marinated Pork Belly, Marinated Pork Neck, Chicken, and Bulgogi. If you don't know Korean BBQ and want to get to know different meat parts, this deal is going to be more than sufficient.</p></a>
      </div>
      <a href="/pijubelly">
      <img src={require('../images/piju/2.jpg')} width="100%" className="MenuImg" /></a>
      <div className="FoodName">
      <a href="/pijubelly">
        <h2>Marinated Korean Fried Chicken</h2></a>
      </div>
      <div className="FoodDescription">
      <a href="/pijubelly">
        <p>Piju Belly, close to Georgia Tech, offers comfort food for Asian students, and this dish is definitely the most popular for Korean students. Compared to Thank U Chicken, this is much sweeter yet still crunchy. </p></a>
      </div>
    </div>
  </div>

  
)

export default IndexPage
