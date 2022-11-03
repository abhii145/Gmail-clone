import {  Apps, ArrowDropDown, Menu, Notifications, Search } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
import "./Header.css"


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  }

  return (
      <div className='header'>
      <div className="header__left">
        <IconButton>
         <Menu/>
        </IconButton>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOMh39HSgDyM2O2Bc3peHj20f7wa3SoJI-Q&usqp=CAU" alt="" />
      </div>
      <div className="header__middle">
        <Search  className='header__middle__Icon'/>
        <input type="text" placeholder='search' />
        <IconButton>
          <ArrowDropDown/>
        </IconButton>
      
      </div>
      <div className="header__right">
        <IconButton>
        <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar title=" click to logout"  src={user?.photoURL} onClick={signOut} />
        
       
</div>
    </div>
  )
}

export default Header