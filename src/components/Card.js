import React from 'react'
import './Card.css'

const Card = props => (
    <div className = "Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.text}</p>
    </div>
)

export default Card