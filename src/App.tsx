import './css/style.css'
import { StartPage } from './components/login/StartPage';
import { Switch, Route } from 'react-router-dom'
import { TeacherHome } from './components/teacher/home/TeacherHome';
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { TeacherStudents } from './components/teacher/myStudents/TeacherStudents';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <div className="modal">
      {isLoggedIn && <Navbar />}
      <Switch>
        <Route path='/' exact component={() => <StartPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/teacher/home' exact component={TeacherHome}/>
        <Route path='/teacher/students' exact component={TeacherStudents}/>
      </Switch>
    </div>
  );
}

export default App;
