import React from 'react'
import { StudentType } from '../types'
import Student from './Student'


interface Props{
    students: StudentType[],
    deleteStudent: (studentId: number|undefined) => void
}

const StudentsList:React.FC<Props> = ({ students, deleteStudent }) =>{
    return (
    <div>
        {students.map((student, key) => <Student key={key} deleteStudent={deleteStudent} student={student}/>)}
    </div>)
}

export default StudentsList