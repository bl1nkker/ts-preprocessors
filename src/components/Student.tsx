import React from "react";
import { StudentType } from "../types";

interface Props{
    student: StudentType,
    deleteStudent: (studentId:number | undefined) => void
}

const Student:React.FC<Props> = ({ student, deleteStudent }) =>{
    const handleDeleteStudent = () =>{
        deleteStudent(student.id)
    }
    return (
    <div className='student-card'>
        <div className='student-card-title'>
            <h3 className='student-card-name'>{student.name}</h3>
        </div>
        <div className='student-card-info'>
            <span className='student-card-specialty'>{student.specialty}</span>
            <span className='student-card-gpa'>{student.gpa}</span>
        </div>
        <div className='student-card-actions'>
            <button className='delete-button' onClick={handleDeleteStudent}>Delete student</button>
        </div>
    </div>)
}

export default Student