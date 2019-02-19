import React from 'react'
import Link from 'gatsby-link'
import Top from '../components/Top';
import styled from 'styled-components'
import IdealImage from 'react-ideal-image'

const ContentDetail = styled.div`
  margin: 60px 60px; 
  line-height: 1.3;
`

const ImgSet = styled.div`

`

const SecondPage = () => (
  <div className="content">
    <Top
      title="Yet Tuh"
      text="Yet Tuh is one of the most popular Korean restaurants in Atlanta that got much media coverage, yet this place is very hard to find if you are a first-timer. I met with the owner to hear how he chose to move to Atlanta and made the restaurant popular"
      image={require('../images/yet_tuh1.jpg')}  
    />
    <ContentDetail>
      <ImgSet>
        <img src={require('../images/yettuh/1.jpg')} width="800" />
      </ImgSet>

      <p>Henry Kim (HK): Please introduce yourself.</p>

      <p>Sanghoon Oh(SO): Hello. My name is Sanghoon Oh and I’m the owner of Yet Tuh.</p>

      <p>HK: When did you first moved to the United States?</p>

      <p>SO: I moved here in 1998.</p>

      <p>HK: How did you decide to come to America? </p>

      <p>SO: I used to work at Hyundai Motors when I was in South Korea. But in 1998, IMF hit a lot of workers and I have to quit my job. At the time, my younger brother was running a cleaner business in America so I chose to come here. </p>

      <p>HK: Did your brother live in Atlanta at the time? </p>

      <p>SO: Yes so I moved to Atlanta and have been living here. This state is my hometown. </p>

      <p>HK: Just out of curiosity, how did your brother moved here?</p>

      <p>SO: She got married with a American and move to Atlanta. Since he was running a cleaner business I chose to come here and see the environment, and I really love the atmosphere so I chose to move over here as well. </p>

      <p>HK: Which part of environment did you like?</p>

      <p>SO: Just a nature in general. Compared to Seoul, South Korea, where I lived, Atlanta has so many trees, clean air, and wildlife which are hard to find in urban environment in South Korea.</p>

      <p>HK: How was Atlanta at that time compared to now?</p>

      <p>SO: The region we are in, Doraville, was the initial Koreatown. Now it got pushed to Duluth. There were a lot of business here. </p>
      <ImgSet>
        <img src={require('../images/yettuh/2.jpg')} width="800" />
      </ImgSet>
      <p>HK: Do you know how it got pushed farther?</p>

      <p>SO: As Atlanta grew, housing got more expensive, and Korean immigrants moved to further Northeast to find a cheaper location. </p>

      <p>HK: Can you compare your life in Atlanta to your Korea life?</p>

      <p>SO: I think, for the first five years, it was really difficult, and I saw a lot of immigrants like me fail to adjust and then moved back to South Korea. after this initial period, I definitely enjoyed a lot more in Atlanta and I just occasionally visit Seoul, South Korea. I think merchandises are cheaper and the environment in general is so much better. Most importantly, I feel more relaxed here. </p>
      <ImgSet>
        <img src={require('../images/yettuh/3.jpg')} width="800" />
      </ImgSet>
      <p>HK: What made your first five years difficult?</p>

      <p>SO: First, language. Even installing a phone required help from others, and not being able to solve problems by myself was very difficult. I am now used to it. And general interaction was also hard. Since my English was bad, ordering a sandwich at subway was very challenging. Thankfully time solved this struggle.</p>

      <p>HK: You told me you ran a cleaner business. How did you decide to open this restaurant?</p>

      <p>SO: I ran a cleaner for 15 years because I got help from my brother. Since he was in this business, I learned it to open mine. I took over this restaurant 4 years ago while it has been here for 8 years. I was a frequent customer to this restaurant, and I heard the owner wanted to sell this restaurant. I told him to teach me to take over the ownership. That’s how I started running Yet Tuh.</p>

      <p>HK: What is the theme for the restaurant?</p>
      <ImgSet>
        <img src={require('../images/yettuh/4.jpg')} width="800" />
      </ImgSet>

      <p>SO: We have some unique menus. For instance, 안동찜닭. It’s not too spicy so American people enjoy it. Bibimbap, Galbi, and our scallion pie is the most popular. 묵밥, etc. We serve unique and hard-to-find korean food.</p>

      <p>HK: What’s the ratio of American and Asian people?</p>

      <p>SO: On weekend, 70% are Americans. On weekdays, Korean people are about 50% from workers around the area. </p>
      <ImgSet>
        <img src={require('../images/yettuh/5.jpg')} width="800" />
      </ImgSet>
      <p>HK: Have you changed any authentic recipe to fit American palette?</p>

      <p>SO: No. We only do the authentic recipe. Our Korean food is very authentic. </p>

      <p>HK: Which dish would you recommend to a stranger?</p>
      <ImgSet>
        <img src={require('../images/yettuh/6.jpg')} width="800" />
      </ImgSet>

      <p>SO: There are many options, but 안동찜닭 is very unique and everyone enjoys it. Nobody can find this flavor anywhere else in Atlanta. Try it.</p>
    </ContentDetail>
  </div>

)

export default SecondPage
