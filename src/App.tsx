import React, { useState } from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentsList from './components/StudentsList';
import { StudentType } from './types';
import './css/style.css'

const studentsList:StudentType[] = [
  {name: 'Joseph', gpa: "3.56", specialty:'SE', id:1},
  {name: 'Marta', gpa: "3.99", specialty:'Marketing', id:2},
  {name: 'Jotaro', gpa: "2.56", specialty:'Tourism', id:3},
  {name: 'Dora', gpa: "3.13", specialty:'DA', id:4},
]

function App() {
  const [students, setStudents] = useState<StudentType[]>(studentsList)
  const [studentToUpdate, setStudentToUpdate] = useState<StudentType|null>(null)

  const addStudent = (student:StudentType) =>{
    setStudents([...students, student])
  }
  const deleteStudent = (studentId:number|undefined) =>{
    const updatedStudensList:StudentType[] = students.filter((student:StudentType) => student.id !== studentId)
    setStudents([...updatedStudensList])
  }
  const updateStudent = (updatedStudent:StudentType) =>{
    setStudents(students.map( (student:StudentType) => student.id === updatedStudent.id ? updatedStudent : student ))
  }
  return (
    <div className="app">

      <Header appName='Student App TS'/>

      <div className='app__content'>
        <StudentForm setStudentToUpdate={setStudentToUpdate} updateStudent={updateStudent} studentToUpdate={studentToUpdate} addStudent={addStudent}/>
        <StudentsList setStudentToUpdate={setStudentToUpdate} students={students} deleteStudent={deleteStudent}/>
      </div>
      
    </div>
  );
}

export default App;
