import React from 'react'
import Link from 'gatsby-link'
import Top from '../components/Top';
import styled from 'styled-components'
import IdealImage from 'react-ideal-image'
import Info from '../components/Info'

const ContentDetail = styled.div`
  margin: 60px 150px; 
  line-height: 1.5;
`

const ImgSet = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const Heading = styled.h2`
  margin-top: 100px;
  margin-left: 150px;
  font-family: 'Raleway', sans-serif;
`

const Jokga = () => (
    <div className="content">
        <Top 
            title="Jok Ga A Dong Chim"
            text="Jok Ga A Dong Chim serves one of the most iconic Korean dishes: jokbal which is pig’s feet. While it’s really popular in Korea, it’s hard to find a good restaurant because many who are not Korean or Asian in general are afraid of this particular part. Thankfully, in Duluth, I found my go-to Jokbal place and got a chance to hear how an owner started running this restaurant."
            image={require('../images/jokga/1.jpg')}  
        />
      <Heading>
            <h2>Starting as an international student</h2>
      </Heading>
      <ContentDetail>
        <p>So Young Kim, the owner of Jok Ga A Dong Chim, first came to America 27 years ago as an international student in Hawaii. She moved to Georgia 5 years ago because of her husband’s job relocation. “While there are some Korean immigrants in Hawaii, Georgia has much bigger population so I think it’s more active.”</p>
      </ContentDetail>
      <Heading>
        <h2>Opening a "Jokbal" restaurant</h2>
      </Heading>
      <div className="centoring">
        <img src={require('../images/jokga/2.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>When I asked how she chose to open the restaurant, she said it was sort of family business. While the restaurant chain, which is based in South Korea, is not run by a family, her younger sister’s husband introduced the opportunity and she decided to run the first foreign branch. </p>
        <p className="quote">“Compared to traditional jokbal, we boil the meat everyday so our food is very fresh. Many other stores generally freeze to keep the meat longer. We don’t.”</p>
        <p>While she’s been only running this restaurant for a year, the business was going great when I visited during dinner time. “Compared to traditional jokbal, we boil the meat everyday so our food is very fresh. Many other stores generally freeze to keep the meat longer. We don’t.” The freshness of jokbal matters significantly because it will have distinctive pork smell that’s quite unpleasant. She’s definitely holding a full control of it.</p>
        <p>Unsurprisingly, 90% of customers are Korean. “I rarely see American people in the restaurant. Sometimes Chinese or Vietnamese.” When asked why, she thinks the perception of pig’s feet is hard to break. Furthermore, the price isn’t cheap. Hence, instead of changing recipes to satisfy American customers, she offers dishes that are easier to approach such as bulgogi.</p>
      </ContentDetail>
      <div className="centoring">
        <img src={require('../images/jokga/3.jpg')} width="60%"/>
      </div>
      <div className="centoring">
        <img src={require('../images/jokga/4.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>While she understands the fear of trying pig’s feet, she still wants American customers to give it a shot. Her recommend menu, Jokbal & Bossam, contains both pig’s feet and pork belly. </p>
      </ContentDetail>


      <div className="BottomGrid">
        <div className="restaurant">
                <img src={require('../images/jokga/th.jpg')} />
                <Info 
                    name="Jok Ga A Dong Chim"
                    address="3751 Satellite Blvd #600, Duluth, GA 30096"
                    phone="(470) 299-6150"
                    time="Saturday 3PM–12AM"
                />
          </div>
        <div className="FooterMenuContainer">
        <h1 className="FooterMenuTitle">Korean Food Menu</h1>
        <a href="/jokga">
        <img src={require('../images/jokga/3.jpg')} width="100%" className="FooterMenuImg" /></a>
        <div className="FooterFoodName">
        <a href="/jokga">
          <h2>Jokbal and Bossam(Pig's Feet and Steamed Pork Belly)</h2>
          </a>
        </div>
        <a href="/thanku">
        <img src={require('../images/thanku/2.jpg')} width="100%" className="FooterMenuImg" /></a>
        <div className="FooterFoodName">
        <a href="/thanku"><h2>Fried and Spicy & Sweet Marinated Chicken</h2></a>
        </div>
        <a href="/yettuh">
        <img src={require('../images/yettuh/6.jpg')} width="100%" className="FooterMenuImg" /></a>
        <div className="FooterFoodName">
        <a href="/yettuh"><h2>Andong jjimdak(Spivy Boiled Chicken with Vegetables)</h2></a>
        </div>
        <a href="/d92">
        <img src={require('../images/d92/6.jpg')} width="100%" className="FooterMenuImg" /></a>
        <div className="FooterFoodName">
        <a href="/d92">
          <h2>All-You-Can-Eat Korean BBQ</h2></a>
        </div>
        <a href="/pijubelly">
        <img src={require('../images/piju/2.jpg')} width="100%" className="FooterMenuImg" /></a>
        <div className="FooterFoodName">
        <a href="/pijubelly">
          <h2>Marinated Korean Fried Chicken</h2></a>
        </div>
      </div>
        
      </div>
    </div>
)

export default Jokga