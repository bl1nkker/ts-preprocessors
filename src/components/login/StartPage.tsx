import React from 'react'
import { ChooseCard } from './ChooseCard'

interface Props {
    setIsLoggedIn: (b:boolean) => void
}

export const StartPage:React.FC<Props> = ({ setIsLoggedIn }) => {
    return (
            <div className='login__container'>
                <section className='title'>
                    <span>Who are you today?</span>
                </section>
                <section className='cards__container'>
                    <ChooseCard image='./imports/dog.png' 
                    description='Once you select a teacher, you can grade, add students, and do a lot of other cool stuff!'
                    buttonText='Yeah, I like that!'
                    cardTitle='Teacher'
                    setIsLoggedIn={setIsLoggedIn}/>
                    <ChooseCard image='./imports/cat.png' 
                    description='Once you select a student, you can see your friends, grades and your teachers!'
                    buttonText='I think that is better!'
                    cardTitle='Student'
                    setIsLoggedIn={setIsLoggedIn}/>
                </section>
            </div>
    )
}
