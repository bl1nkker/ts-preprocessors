import React from 'react'
import { StudentCardSummary } from './StudentCardSummary'
import { StudentCardEmpty } from './StudentCardEmpty'
import { StudentType } from '../../../types'

interface Props {
    
}

const tempStudents:StudentType[] = [
    { name:'Edward', id: 1, gpa: 3.68, specialty:'Hotel Management', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/originals/b2/90/89/b290899f20be2d555e193ee134fd74ca.jpg'  },
    { name:'Mariya', id: 2, gpa: 2.68, specialty:'Software Engineering', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/736x/d4/79/23/d479233a82bd58e06359b8f770c4d3db.jpg' },
    { name:'Emilia', id: 3, gpa: 4.00, specialty:'Data Analysis', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/564x/da/6e/e1/da6ee1bf314131389b761dbfd2ca5363.jpg'  },
]

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
                    {tempStudents.map((student:StudentType, key:number) =><StudentCardSummary key={key} student={student}/>)}
                </div>
            </section>
        </div>
    )
}
