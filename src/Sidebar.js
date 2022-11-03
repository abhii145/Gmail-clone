import { Add, Message, People } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import { Duo, Expand, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Snooze, Star } from '@mui/icons-material';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch();

  return (
      <div className='sidebar'>
      
      <Button onClick={()=> dispatch(openSendMessage())} className="sidebar__compose" startIcon={<AddIcon fontSize='large' />}>
        Compass</Button>         
    <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} /> 
      <SidebarOption Icon={Star} title="Starred" number={ 54} />  
      <SidebarOption Icon={AccessTimeSharpIcon} title="Snooze" number={54} />  
      <SidebarOption Icon={NearMe} title="Sent" number={54} /> 
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />  
      <SidebarOption Icon={Note} title="Drafts" number={54} />  
      <SidebarOption Icon={ExpandMore} title="More" number={54} />  
   
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person/>
          </IconButton>
          <IconButton>
            <Duo/>
          </IconButton>
          <IconButton>
            <Phone/>
          </IconButton>
        </div>
   </div>
      
    </div>
  )
}

export default Sidebar