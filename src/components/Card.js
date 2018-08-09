import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({color, description}) => (
    <div className={`dificuldade ${color}`}>
        <Link to={`/challenge/${description}`}>
            <p>{description}</p>
        </Link>
    </div>
)

export default Card