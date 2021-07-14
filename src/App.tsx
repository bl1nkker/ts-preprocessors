import './css/style.css'
import { StartPage } from './components/login/StartPage';
import { Switch, Route } from 'react-router-dom'
import { TeacherHome } from './components/teacher/TeacherHome';
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <div className="modal">
      {isLoggedIn && <Navbar />}
      <Switch>
        <Route path='/' exact component={() => <StartPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/teacher/home' exact component={TeacherHome}/>
      </Switch>
    </div>
  );
}

export default App;
