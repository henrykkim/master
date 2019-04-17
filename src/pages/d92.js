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

const D92 = () => (
    <div className="content">
        <Top 
            title="D92 Korean BBQ"
            text="Korean BBQ is one of the most iconic dishs. While there are many Korean BBQ spots in Duluth, there’s one called “D92 Korean BBQ” in Decatur which is a bit more accessible from Georgia Tech. Offering All-You-Can-Eat Korean BBQ, I thought this place would be perfect for both Korean students and American customers who want to dive into Korean BBQ."
            image={require('../images/d92/1.jpg')}  
        />
      <Heading>
            <h2>Born in South Korea, raised in America</h2>
      </Heading>
      <ContentDetail>
        <p>When I met the owner, Justin Lee, he was a lot different than other restaurant owners I’ve met; he was young and spoke English natively. He first came to California when he was 4, and “became fully americanized when I was 8.” Because he came to America when he was young, he had forgotten how to speak Korean. “But when I started working at the Korean company at 17, I learned how to speak light and medium Korean.”</p>
        <p>Growing up in LA Koreantown, moving to Georgia was a smooth transition. “My parents started the construction business. I came here to do the construction as well.” “By the time I moved to Duluth I was already americanized.” </p>
      </ContentDetail>
      <Heading>
        <h2>Opening a restaurant in Duluth</h2>
      </Heading>
      <div className="centoring">
        <img src={require('../images/d92/2.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>Since he has been living in Duluth, I was curious why he chose to open a restaurant in Decatur. Apparently he has a partner who already has a few Korean BBQ restaurants in Duluth area. “This city is my go-to spot to experience southern hospitality,” he added. “You get the best service down here, waiters are very well-informed. There are bartenders who worked at the same restaurant for 12 years. So they know everything around here and give you the feeling of warmth and security.” That’s why he wanted to open a restaurant in Decatur. </p>
      </ContentDetail>
      <div className="centoring">
        <img src={require('../images/d92/3.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>While D92 Korean BBQ offers a genuine Korean BBQ experience, “we want to incorporate a full bar with cocktail menus which cannot be found in other Korean BBQ restaurants.” Most Korean restaurants generally serve soju, a traditional and the most popular drink in South Korea, and beer. Having drink options more than these two is definitely great. Especially when they “have crafted cocktails with asian twist.” </p>
      </ContentDetail>
      <div className="centoring">
        <img src={require('../images/d92/4.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>Because of the location, most customers are American. He occasionally see a few Korean students. Furthermore, he doesn’t change much on the recipe. “Both Korean and American customers are fixed at the taste.” While offering different sweetness for different meat, he also offers wide spectrum of sauces.</p>
      </ContentDetail>
      <div className="centoring">
        <img src={require('../images/d92/6.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>For food, he recommended the all-you-can-eat option. "It's a perfect way to learn different meat parts and immerse yourself into Korean BBQ." There are two options: $25 and $30 with additional beef brisket. "It's really up to you on what you want to try," he added. If you aren't sure which meat you most enjoy, trying every single meat from the menu would be a great start.</p>
      </ContentDetail>
      <div className="restaurant">
            <img src={require('../images/d92/th.jpg')} />
            <Info 
                name="D92 Korean BBQ"
                address="225 E Trinity Pl, Decatur, GA 30030"
                phone="(678) 973-2454"
                time="Wednesday 11:30AM–11PM"
            />
        </div>
    </div>
)

export default D92