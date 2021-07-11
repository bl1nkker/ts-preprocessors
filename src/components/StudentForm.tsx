import React, { useEffect, useState } from "react";
import { StudentType } from "../types";

interface Props{
    updateStudent: (updatedStudent: StudentType) => void,
    setStudentToUpdate: React.Dispatch<React.SetStateAction<StudentType | null>>,
    addStudent: (student:StudentType) => void,
    studentToUpdate: StudentType | null
}

const StudentForm:React.FC<Props> = ({ addStudent, studentToUpdate, updateStudent, setStudentToUpdate }) =>{
    const [formData, setFormData] = useState<StudentType>({ name: '', specialty:'', gpa:'' })

    useEffect(() =>{
        if (studentToUpdate !== null) setFormData(studentToUpdate)
    }, [studentToUpdate])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [event.target.id]: event.target.value})
    }

    const handleButtonPress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault()
        if (studentToUpdate !== null){
            // update
            updateStudent(formData)
            setStudentToUpdate(null)
        } else{
            // create
            addStudent({...formData, id: new Date().getTime()})
        }
        
        setFormData({ name:'', specialty:'', gpa:''})
    }

    return (
    <form className={studentToUpdate !== null ? "update" : 'add'}>
        <div className='form-field'>
            <label>Name</label>
            <input id='name' value={formData.name} onChange={handleChange}/>
        </div>
        
        <div className='form-field'>
            <label>Specialty</label>
            <input id='specialty' value={formData?.specialty} onChange={handleChange}/>
        </div>
        <div className='form-field'>
            <label>GPA</label>
            <input id='gpa' value={formData?.gpa} onChange={handleChange}/>
        </div>

        <div className='form-actions'>
            <button onClick={handleButtonPress}>{studentToUpdate !== null ? 'Update student':"Add student"}</button>
        </div>
        
    </form>)
}

export default StudentForm