import React from 'react';
import './App.css';
import CareTaker from './caretaker/Caretaker';
import Dean from './dean/Dean';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Security from './security/Security';
import Student from './student/Student';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Apply from './student/Apply';
import Success from './student/Success';
import Reset from './student/Reset';
import Profile from './student/Profile';
import Logout from './Logout';
import Approve from './caretaker/Approve';
import Forward from './caretaker/Forward';
import Deny from './caretaker/Deny';
import Approved from './dean/Approved';
import Reject from './dean/Reject';
import List from './security/List';
import Next from './Next';

function App() {
  return (
    <Router>
    <div className='App'>    
      <Header/>
      <Routes>  
                 <Route exact path='/' element={ < Home/> }/> 
                 <Route  path='student' element={ <Student/> }>
                     <Route index element={<Profile />} />
                        <Route  path='apply' element={ <Apply/> }/> 
                        <Route  path='success' element={ <Success/> }/>
                        <Route  path='reset' element={ <Reset/> }/> 
                        <Route  path='profile' element={ <Profile/> }/> 
                        <Route  path='logout' element={ <Logout/> }/> 
                </Route>
                 <Route  path='caretaker' element={ <CareTaker/> }> 
                        <Route index element={ <Approve/>} />
                        <Route  path='approve' element={ <Approve/> }/> 
                        <Route  path='forward' element={ <Forward/> }/>
                        <Route  path='deny' element={ <Deny/> }/>  
                        <Route  path='logout' element={ <Logout/> }/> 
                 </Route>
                 <Route  path='dean' element={ <Dean/> }>
                 <Route index element={ <Approved/>} />
                        <Route index path='approved' element={ <Approved/> }/>
                        <Route  path='reject' element={ <Reject/> }/>  
                        <Route  path='logout' element={ <Logout/> }/> 
                </Route> 
                 <Route  path='security' element={ <Security/> }>
                 <Route index element={ <List/>} />
                        <Route  path='list' element={ <List/> }/>  
                        <Route  path='logout' element={ <Logout/> }/> 
                </Route> 
                 <Route  path='login' element={ <Login/> }/>
                 <Route  path='register' element={ <Register/> }/> 
                 <Route  path='next' element={ <Next/> }/> 
                 
                 

          </Routes>  
    </div>
    </Router>

  );
}

export default App;
