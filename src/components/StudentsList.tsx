import React, { useState } from 'react'
import { StudentType } from '../types'
import Student from './Student'


interface Props{
    students: StudentType[],
    deleteStudent: (studentId: number|undefined) => void,
    setStudentToUpdate: React.Dispatch<React.SetStateAction<StudentType | null>>,
}

const StudentsList:React.FC<Props> = ({ students, deleteStudent, setStudentToUpdate }) =>{

    

    return (
    <div className='students-list'>
        {students.map((student, key) => <Student setStudentToUpdate={setStudentToUpdate} key={key} deleteStudent={deleteStudent} student={student}/>)}
    </div>)
}

export default StudentsList