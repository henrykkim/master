import React from 'react'
import styled from 'styled-components'

const TopBackground = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 20%,
    rgba(0,0,0,0.8)), url(${props => props.image});
    height: 700px;
    background-size: cover;
    background-position: center;
    position: relative;
`

const TopContent = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 150px 50px;
    text-align: center;
`

const TopTitle = styled.h1`
    margin: 0;
    color: white;
    font-size: 60px;
    line-height: 1.2;
    opacity: 0;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const TopText = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 26px;
    line-height: 1.5;
    animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    font-weight: 500;
`

const Top = props => (
    <TopBackground image={props.image}>
        <TopContent>
            <TopTitle>
                {props.title}
            </TopTitle>
            <TopText>
                {props.text}
            </TopText>
        </TopContent>
    </TopBackground>
)

export default Top