import React, { useState } from "react";
import { StudentType } from "../types";

interface Props{
    addStudent: (student:StudentType) => void
}

const StudentForm:React.FC<Props> = ({ addStudent }) =>{
    const [newStudent, setNewStudent] = useState<StudentType>({ name: '', specialty:'', gpa:'' })

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
        <div className='form-field'>
            <label>Name</label>
            <input id='name' value={newStudent.name} onChange={handleChange}/>
        </div>
        
        <div className='form-field'>
            <label>Specialty</label>
            <input id='specialty' value={newStudent?.specialty} onChange={handleChange}/>
        </div>
        <div className='form-field'>
            <label>GPA</label>
            <input id='gpa' value={newStudent?.gpa} onChange={handleChange}/>
        </div>

        <div className='form-actions'>
            <button onClick={handleAddStudent}>Add student</button>
        </div>
        
    </form>)
}

export default StudentForm