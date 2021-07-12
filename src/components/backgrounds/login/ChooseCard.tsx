import React from 'react'

interface Props {
    image: string,
    description: string,
    buttonText: string
}

export const ChooseCard:React.FC<Props> = ({ image, description, buttonText }) => {
    return (
        <div className='card'>
            <section className='card-image'>
                <img src={image} alt='choose-card'/>
            </section>
            <section className='card-info'>
                <p>{description}</p>
            </section>
            <section className='card-actions'>
                <button>{buttonText}</button>
            </section>
        </div>
    )
}
