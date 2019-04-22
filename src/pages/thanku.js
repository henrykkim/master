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

const Thanku = () => (
    <div className="content">
        <Top 
            title="Thank U Chicken"
            text="Thank U Chicken is another specialized korean restaurant. It’s quite common to see fried chicken restaurants as you walk on a street in South Korea, and this place offers genuine Korean-style fried chicken in a southern scene. I got a chance to meet the owner to hear her story on how she adventurously decided to open this very specific Korean restaurant."
            image={require('../images/thanku/3.jpg')}  
        />
      <Heading>
            <h2>For her son's education</h2>
      </Heading>
      <ContentDetail>
        <p>Minhee Jung, the owner of Thank U Chicken for two years, moved to America for her son’s education”just like any Korean parents.” “Our family started going back and forth between America and South Korea. 6 months in South Korea and the other half in America.” she added, “When my son started going to 2nd year of elementary school, he had hard time adjusting in Korea because of cultural difference. Hence, we decided to move to America completely in 2003.“</p>
      </ContentDetail>
      <Heading>
        <h2>Moving to Georgia, a year after</h2>
      </Heading>
      <ContentDetail>
        <p>Her family only lived in New York for one year before moving to Georgia 11 years ago. “House was cheap here. And I think it’s generally easier to live in here.” She was also surprised how clean the city was when she visited her relative in Atlanta. While she liked New York as a tourist, she didn’t enjoy living there. “It was dirty and buildings were too old and outdated. I think people in Atlanta are much nicer, too.” </p>
        <p className="quote">“(New York) was dirty and buildings were too old and outdated. I think people in Atlanta are much nicer, too.”</p>
        <p>When compared her life in Georgia to in Korea, she mentioned “appearance” foremost. “I think when I was in South Korea, I was more focused on my appearance which can be uncomfortable. In here, I don’t have to worry about my look or makeup unless I’m going to Korean-related events.”</p>
        <p className="quote">"I think when I was in South Korea, I was more focused on my appearance which can be uncomfortable."</p>
      </ContentDetail>
      <Heading>
        <h2>Opening a specialized Korean restaurant</h2>
      </Heading>
      <ContentDetail>
        <p className="quote">"It’s rare to find a Korean restaurant with a specific theme like mine. Most serve rice, stew, and basic and most common dishes."</p> 
        <p>Before opening Thank U Chicken, she ran a Korean street food restaurant. “At that time, I never considered Americans as my customer because I was Korean cooking Korean food.” But as she got more American customers, she started shifting her focus. “It’s rare to find a Korean restaurant with a specific theme like mine. Most serve rice, stew, and basic and most common dishes. I had to let some customers to go other restaurants because we didn’t serve tofu-stew, which is the most common dish.” She and her husband, who’s a chef, wanted to focus more on ingredient quality instead.</p> 
        <p className="quote">“I realized there was no Korean chicken special restaurant so I chose open one after closing the first one.”</p>
        <p>When asked what the theme for the restaurant is, she said delivering Korean fried chicken experience to American customers. “For the first time, I created a full english menu and hired staffs who could speak english fluently. And while South is famous for fried chicken, I wanted to show off Korean style fried chicken as well.” Thanks to her effort, she said about 60% of customers are American. While she and her husband think about American customers’ palette, they still use genuine recipes. “He also creates his own recipe which cannot be found in South Korea.”</p>
      </ContentDetail>
      <div className="centoring">
        <img src={require('../images/thanku/2.jpg')} width="60%"/>
      </div>
      <ContentDetail>
        <p>When asked one dish to recommend, she picked Sweet chili chicken.</p>
      </ContentDetail>
      <div className="restaurant">
            <img src={require('../images/thanku/th.jpg')} />
            <Info 
                name="Thank U Chicken"
                address="3473 Old Norcross Rd, Duluth, GA 30096"
                phone="(470) 875-9000"
                time="Saturday 12PM–11PM"
            />
        </div>
    </div>
)

export default Thanku