import React from 'react'
import { StudentCard } from './StudentCard'

interface Props {
    
}

export const TeacherStudents = (props: Props) => {
    return (
        <div className='teacher__container'>
            <section className='page__title'>
                <h3>My Students</h3>
            </section>

            <section className='page__content'>
                <div className='teacher__students__title'>
                    <span className='yellow__text'>Your mini army is full! <span className='green__text'>Keep it  <span className="blue__text">UP!</span></span></span>
                </div>

                <div className='teacher__students__list'>
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </div>
            </section>
        </div>
    )
}
