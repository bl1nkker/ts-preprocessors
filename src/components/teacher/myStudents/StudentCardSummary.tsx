import React from 'react'
import { Link } from 'react-router-dom'
import { StudentType } from '../../../types'

interface Props {
    student: StudentType
}

export const StudentCardSummary:React.FC<Props> = ({ student }) => {
    return (
        <div className='student__card'>
            <section className='avatar'>
                <img src={student.avatar} alt='student-avatar'/>
            </section>

            <section className='info'>
                <h3 className='name'>{student.name}</h3>
                <p className='specialty'>{student.specialty}</p>
                <p className='gpa'>Current GPA: {student.gpa}</p>
            </section>

            <section className='actions'>
                <Link to={`/teacher/students/${student.id}`}><button className='btn-primary'>More</button></Link>
                <button className='btn-secondary'>Delete</button>
            </section>
        </div>
    )
}
