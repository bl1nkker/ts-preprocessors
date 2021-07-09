import React from 'react'
import { IStudent } from '../interfaces'
import Student from './Student'


interface Props{
    students: IStudent[],
    deleteStudent: (studentId: number|undefined) => void
}

const StudentsList:React.FC<Props> = ({ students, deleteStudent }) =>{
    return (
    <div>
        {students.map((student, key) => <Student key={key} deleteStudent={deleteStudent} student={student}/>)}
    </div>)
}

export default StudentsList