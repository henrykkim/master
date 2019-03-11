import React from 'react'
import './Info.css'
import styled from 'styled-components'

const Thumbnail = styled.img`

`

const Information = styled.div`

`
const Title = styled.h2`

`
const Address = styled.div`

`
const Phone = styled.div`

`
const Time = styled.p`
`

const Info = props => (
    
    <Information>
        <Thumbnail image={props.image} />
        <Title>
            {props.name}
        </Title>
        <Address>
        {props.address}
        </Address>
        <Phone>
            {props.phone}
        </Phone>
        <Time>
            {props.time}
        </Time>
    </Information>
    
)

export default Info