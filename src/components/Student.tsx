import React from "react";
import { IStudent } from "../interfaces";

interface Props{
    student: IStudent,
    deleteStudent: (studentId:number | undefined) => void
}

const Student:React.FC<Props> = ({ student, deleteStudent }) =>{
    const handleDeleteStudent = () =>{
        deleteStudent(student.id)
    }
    return (
    <div>
        <h3>{student.name}</h3>
        <span>{student.specialty}</span>
        <span>{student.gpa}</span>
        <button onClick={handleDeleteStudent}>Delete student</button>
    </div>)
}

export default Student