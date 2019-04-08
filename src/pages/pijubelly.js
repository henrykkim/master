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

const Pijubelly = () => (
    <div className="content">
        <Top 
            title="Piju Belly"
            text="Piju Belly is a weird restaurant. It serves Korean, Chinese, Japanese, and American food in one place. Some food feels quite authentic while others are not. When I got a chance to meet the owner, Lenny Shou, to learn about his life and restaurant, the diversity of food made so much sense."
            image={require('../images/piju/1.jpg')}  
        />
        <Heading>
            <h2>Chinese Born in South Korea</h2>
        </Heading>
        <ContentDetail>
            <p>Lenny, who I had assumed as a Chinese immigrant, was more complex than that; he was born and raised in Seoul, South Korea, just like I did. “Both my mom and dad are Chinese. I believe my dad was 60 years old when his family migrated to South Korea. My mom's family did the same way, but my mom was born in South Korea.” He also told me there was a huge Chinese community in 60’s and 70’s. Roughly 350,000 to 400,000 Chinese Koreans living in South Korea at that time. It was a big shock because I never learned about this.</p>
        </ContentDetail>
        <Heading><h2>Background history on Chinese Korean</h2></Heading>
        <ContentDetail>
            <p>I also got curious why so many Chinese people chose to move to South Korea at that time. He said his family did to avoid Japanese-Chinese war. “At that time, Korea was colonized by Japan so there was no war. Therefore, my grandfather decided to move for safety.” For his mom’s family, they moved before World War 2 to own a land as a farm owner. “Labor was cheap a that time. He owned the land in Gaesung(which is part of North Korea now) and did well until Korean War.”</p>
            <p>When asked where Chinese Koreans are now, he said they are everywhere now. “We were kind of like almost like a breed that started to go away. Some of my friends that I grew up with as elementary school kids, they're everywhere in California. Some are in Taiwan, others married Korean people and got Korean citizenship.” </p>
            <p className="quote">"We were kind of like almost like a breed that started to go away."</p>
        </ContentDetail>
        <Heading>
            <h2>Pressure from Korean government</h2>
        </Heading>
        <ContentDetail>
            <p>I wondered why many Chinese people, including Lenny’s family, decided to move. He said there was an immigration boom because of the Korean government’s pressure on Chinese immigrants. “A president, at that time, thought Chinese people held too much power and wealth in Korea so he came out with many political restrictions such as not letting us buy a commercial space. We also paid much higher taxes. Couldn’t raise the food price while ingredient got more expensive. Ultimately, our opportunity was reduced significantly.” That’s when the family seeked the opportunity in the land of opportunity.</p>
            <p className="quote">“A president, at that time, thought Chinese people held too much power and wealth in Korea so he came out with many political restrictions such as not letting us buy a commercial space. We also paid much higher taxes. Couldn’t raise the food price while ingredient got more expensive. Ultimately, our opportunity was reduced significantly.”</p>
        </ContentDetail>
        <div className="centoring">
            <a href="https://www.scmp.com/week-asia/society/article/3004369/why-are-ethnic-chinese-leaving-south-korea-their-thousands">
                <img src={require('../images/piju/3.jpg')} width="800px" />
                <p className="sideMargin">To learn more about Chinese Korean's history: "Why are ethnic Chinese leaving South Korea in their thousands?"</p>
            </a>
        </div>
        <Heading>
            <h2>Struggle in America</h2>
        </Heading>
        <ContentDetail>
            <p>In Korea, the family owned a Chinese restaurant business. Therefore, when they moved in June 20th, 1981 to California, his father started a new restaurant business with another Chinese Korean partner. “It didn’t go well initially.” He was 14 and started attending an ESL school which he struggled. He lived in California until 18. “I graduated high school, and my dad had an opportunity to open a second restaurant in Indiana which went quite well.” That’s when the family moved to Indiana and lived there for 6 years. Eventually, his family decided to move to Atlanta because they saw the opportunity after the city was chosen to host ‘96 Olympics. “We put everything we had into a bandwagon, and moved to Atlanta in 1993.”</p>
        </ContentDetail>
        <div className="centoring">
            <a href="https://www.bizjournals.com/atlanta/stories/1998/06/15/focus17.html">
                <img src={require('../images/piju/4.png')} width="800px" />
                <p className="sideMargin">"1996 Olympics: A defining moment in Atlanta's history" by Elizabeth Vaeth at Atlanta Business Chronicle</p>
            </a>
        </div>
        <Heading>
            <h2>Family Restaurant in Atlanta</h2>
        </Heading>
        <ContentDetail>
            <p>As they moved to Atlanta, they opened the first restaurant, “Jade of China,” which doesn’t exist anymore. “It was truly a family-owned business,” he said, “our family, mom, older sister who quitted her CPA job, older brother, and younger brother who passed away ran the restaurant along with one chef.” In 1999, he went to New York for sightseeing with his girlfriend, and found a noodle shop called “Republic.” </p>
            <p>“It was nice, young, and hip, and my light bulb went off.” Hence, he went back in Atlanta, closed the restaurant, and opened a new one called “Noodle” which went very well and had three branches. </p>
        </ContentDetail>
        <Heading>
            <h2>Opening Piju Belly</h2>
        </Heading>
        <ContentDetail>
            <p>While the family business went well, he also struggle as well. “Paying rent on other restaurants was difficult. Therefore, I wanted to own a restaurant including a land.” that’s why he was “kind of forced” to open a new restaurant, Piju Belly. “Furthermore, my background is Korean Chinese. I’m able to cook Korean food and Chinese food so I wanted to put these in one place.“</p>
            <p className="quote">“My dream is to have a party of a people of Korean students, Americans, Chinese kids or one Indian who order different type of food and share together such as Korean fried chicken, Japanese ramen, pork bao, and veggie burger. I kind of wanted to do all the combined, all of that together, close to Georgia Tech.“</p>
            <p>In order to fulfill his dream, he had to work on recipes. “Some Chinese food use heavy sauce. I have changed the sauce to be more mild or even light I also believe in a simple recipe so I made food light in general. Less spice on spicy food as well.” </p>
            <p>For the last question, I asked him to pick one dish a first-timer should try.</p>
            <img src={require('../images/piju/2.jpg')} width="100%" />
            <p>"Yangmeom Chicken(Korean spicy fried chicken)"</p>
        </ContentDetail>
        <div className="restaurant">
            <img src={require('../images/th_piju.jpg')} />
            <Info 
                name="Piju Belly"
                address="678 10th St NW, Atlanta, GA 30318"
                phone="(404) 343-6828"
                time="Monday 11AM–3PM 5–10PM"
            />
        </div>
    </div>
)

export default Pijubelly