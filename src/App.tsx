import React, { useState } from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentsList from './components/StudentsList';
import { IStudent } from './interfaces';

const studentsList:IStudent[] = [
  {name: 'Joseph', gpa: "3.56", specialty:'SE', id:1},
  {name: 'Marta', gpa: "3.99", specialty:'Marketing', id:2},
  {name: 'Jotaro', gpa: "2.56", specialty:'Tourism', id:3},
  {name: 'Dora', gpa: "3.13", specialty:'DA', id:4},
]

function App() {
  const [students, setStudents] = useState<IStudent[]>(studentsList)
  const addStudent = (student:IStudent) =>{
    setStudents([...students, student])
  }
  const deleteStudent = (studentId:number|undefined) =>{
    const updatedStudensList:IStudent[] = students.filter((student:IStudent) => student.id !== studentId)
    setStudents([...updatedStudensList])
  }
  return (
    <div className="App">
      <Header appName='Student App TS'/>
      <StudentForm addStudent={addStudent}/>
      <StudentsList students={students} deleteStudent={deleteStudent}/>
    </div>
  );
}

export default App;
