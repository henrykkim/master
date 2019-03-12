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
`

const Heading = styled.h2`
  margin-top: 100px;
  margin-left: 150px;
  font-family: 'Raleway', sans-serif;
`

const SecondPage = () => (
    <div className="content">
    <Top
      title="Yet Tuh"
      text="Yet Tuh is one of the most popular Korean restaurants in Atlanta that got much media coverage, yet this place is very hard to find if you are a first-timer. I met with the owner to hear how he chose to move to Atlanta and made the restaurant popular"
      image={require('../images/yet_tuh1.jpg')}  
    />
    <img src={require('../images/yettuh/1.jpg')} width="100%" />
    <ContentDetail>
      <p className="marginn">Yet Tuh is probably one of the most popular Korean restaurants in Atlanta for Americans. Despite of its popularity, when I first attempted to visit, the place was so hidden that I got lost. When found, I could see the restaurant was not shy about its exposure through media by showing news articles about the restaurant at the entrance. Seeing this made me wonder; how is this well-hidden restaurant so popular? I wanted to meet the owner and hear his story about him and the restaurant.</p>
    </ContentDetail> 
    <div className="darkTheme">
      <Heading>
        <h1 className="darken">Coming to America</h1>  
      </Heading>
      <div className="justCenter">
        <div className="galleryGrid">
            <div className="first-img">
                <img src={require('../images/yettuh/imf_1.jpg')} />
            </div>

            <div className="second-img">
               <img src={require('../images/yettuh/imf_2.jpg')} />
            </div>

            <div className="third-img">
               <img src={require('../images/yettuh/imf_3.jpg')} /> 
            </div>

        </div>
      </div>
      <p className="darken quote">“In 1998, IMF hit a lot of workers and I have to quit my job. At the time, my younger brother was running a cleaner business in America so I chose to come here.”</p>
      <p className="darken sideMargin">Sanghoon Oh, the owner of Yet Tuh, told me how he decided to move to the United States. Thanks to his brother, who married to an American woman and ran a cleaner business at that time, he moved to Atlanta, Georgia in 1998 and has lived here since. He first just wanted to visit, but he loved the atmosphere so much that he decided to settle in. </p>
      <p className="darken sideMargin">“Compared to Seoul, South Korea, where I lived, Atlanta has so many trees, clean air, and wildlife which are hard to find in urban environment in South Korea.” He also told me Doraville, where Yet Tuh is located, was originally a Korean town. It has moved to Duluth now because of economic growth and housing price. </p>
      // The living in Atlanta part
      <p className="darken quote">“I think merchandises are cheaper and the environment in general is so much better. Most importantly, I feel more relaxed here.”</p>
      <p className="darken sideMargin">When I asked how his first five-year was in Atlanta, he cringed. “I think, for the first five years, it was really difficult, and I saw a lot of immigrants like me fail to adjust and then moved back to South Korea.” When asked the reason for the pain, he said language. “Even installing a phone required help from others, and not being able to solve problems by myself was very difficult.” While he’s English isn’t dramatically improved since, he said he’s used to it and at least he can order sandwich by himself.</p>
    </div>  
      
        <div className="centoring">
            <a href="https://nextshark.com/korean-dry-cleaner-laundromat-america/">
                <img src={require('../images/yettuh/cleaner.jpg')} width="800px" />
                <p>Why So Many Koreans Own Dry Cleaners in America</p>
            </a>
        </div>

        <p className="sideMargin">As he arrived in Atlanta, he started a clear business with his brother’s support. I was curious how he ended up owning Yet Tuh. “Actually, I was a frequent customer to this restaurant, and I heard the owner wanted to sell this restaurant. I told him to teach me to take over the ownership. That’s how I started running Yet Tuh.” After 15 years of cleaner business, he’s been running the restaurant for 4 years. 
  </p>

        <ImgSet>
        <img src={require('../images/yettuh/4.jpg')} width="100%" />
        <img src={require('../images/yettuh/5.jpg')} width="100%" />
        </ImgSet>
        <p className="sideMargin">During the interview, I went through the menu and was surprised how diverse dishes were; there were many region-specific food in Korea that I haven’t gotten a chance to try. He also said “unlikeness” is what makes this restaurant so different. “For instance, Andong-style Braised Spicy Chicken with Vegetables. It’s not too spicy so American people enjoy it. Bibimbap, Galbi, and our scallion pie is the most popular. Rice and Acorn Jelly, etc. We serve unique and hard-to-find korean food.” Despite of its unique dishes, he said 70% of customers are Americans. He also uses authentic recipes. Most importantly, he is very proud of serving authentic Korean food to American customers. 
  </p>
        <p className="sideMargin">I asked, “what is one dish you would recommend to a new customer?”
  </p>
        <ImgSet>
        <img src={require('../images/yettuh/6.jpg')} width="100%" />
        </ImgSet>
        <p className="sideMargin">“There are many options, but Andong-style Braised Spicy Chicken with Vegetables is very unique and everyone enjoys it. Nobody can find this flavor anywhere else in Atlanta. Try it.”</p>
        <div className="restaurant">
      <img src={require('../images/th_yet_tuh.jpg')} />
      <Info 
        name="Yet Tuh"
        address="3042 Oakcliff Rd, Doraville, GA 30340"
        phone="(770) 454-9292"
        time="Sunday 11AM–9:30PM"
      />
    </div>
    </div>

)

export default SecondPage
