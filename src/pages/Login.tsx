import React from 'react'
import { ChooseCard } from '../components/backgrounds/login/ChooseCard'

interface Props {
    
}

export const Login = (props: Props) => {
    return (
        <div className='modal'>
            <div className='login__container'>
                <section className='title'>
                    <span>Who are you today?</span>
                </section>
                <section className='cards__container'>
                    <ChooseCard image='./imports/dog.png' 
                    description='Once you select a teacher, you can grade, add students, and do a lot of other cool stuff!'
                    buttonText='Yeah, I like that!'/>
                    <ChooseCard image='./imports/cat.png' 
                    description='Once you select a student, you can see your friends, grades and your teachers!'
                    buttonText='I think that is better!'/>
                </section>
            </div>
        </div>
    )
}
