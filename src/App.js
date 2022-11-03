import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList'
import Mail from './Mail';
import "./App.css"
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {

  const user = useSelector(selectUser)
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(Login({
        displayName: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL
      }))
    }
  })

}, [])



  return (
    <BrowserRouter>
      {!user ? (<Login />) :
        (
           <div className="app">
      <Header />
<div className="app__body">
<Sidebar />
          <Routes>
            <Route excat path="/" element={<EmailList />} />
            <Route exact path="/mail" element={ <Mail/>} />
        </Routes>
        </div>
        {sendMessageIsOpen && <SendMail/> }
        
      </div>
      )
      }
   
      </BrowserRouter>
  );
}

export default App;
