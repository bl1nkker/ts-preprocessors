import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    image: string,
    description: string,
    buttonText: string,
    cardTitle: string,
    setIsLoggedIn: (b:boolean) => void
}

export const ChooseCard:React.FC<Props> = ({ image, description, buttonText, cardTitle, setIsLoggedIn }) => {
    return (
        <div className='card'>
            <section className='card-image'>
                <img src={image} alt='choose-card'/>
            </section>
            <section className='card-info'>
                <h3>{cardTitle}</h3>
                <p>{description}</p>
            </section>
            <section className='card-actions'>
                <Link to='/teacher'><button onClick={() => setIsLoggedIn(true)}>{buttonText}</button></Link>
            </section>
        </div>
    )
}
