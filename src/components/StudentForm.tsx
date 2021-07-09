import React, { useState } from "react";
import { IStudent } from "../interfaces";

interface Props{
    addStudent: (student:IStudent) => void
}

const StudentForm:React.FC<Props> = ({ addStudent }) =>{
    const [newStudent, setNewStudent] = useState<IStudent>({ name: '', specialty:'', gpa:'' })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setNewStudent({...newStudent, [event.target.id]: event.target.value})
    }

    const handleAddStudent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault()
        addStudent({...newStudent, id: new Date().getTime()})
        setNewStudent({ name:'', specialty:'', gpa:''})
    }
    return (
    <form>
        <label>Name</label>
        <input id='name' value={newStudent.name} onChange={handleChange}/>
        <label>Specialty</label>
        <input id='specialty' value={newStudent?.specialty} onChange={handleChange}/>
        <label>GPA</label>
        <input id='gpa' value={newStudent?.gpa} onChange={handleChange}/>
        <button onClick={handleAddStudent}>Add student</button>
    </form>)
}

export default StudentForm