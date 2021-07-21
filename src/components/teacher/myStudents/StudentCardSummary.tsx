import React from 'react'
import { StudentType } from '../../../types'

interface Props {
    student?: StudentType
}

export const StudentCardSummary = (props: Props) => {
    return (
        <div className='student__card'>
            <section className='avatar'>
                <img src='https://i.pinimg.com/474x/52/fe/87/52fe873be054e7f8345c65281b02c63b.jpg' alt='student-avatar'/>
            </section>

            <section className='info'>
                <h3 className='name'>Edward</h3>
                <p className='specialty'>Software Engineering</p>
                <p className='gpa'>Current GPA: 3,68</p>
            </section>

            <section className='actions'>
                <button className='btn-primary'>More</button>
                <button className='btn-secondary'>Delete</button>
            </section>
        </div>
    )
}
