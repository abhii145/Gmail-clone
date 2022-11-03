import React from 'react'
import "./EmailRow.css"
import { Checkbox, IconButton } from '@mui/material';
import { LabelImportant, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';


function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const openMail = () => {
    dispatch(selectMail({
      id, title, subject, description, time,
    })
    );
navigate("/mail")
  }

    return (
      <div onClick={openMail } className='emailRow'>
          <div className="emailRow__options">
              <Checkbox />
              <IconButton> <Star/> </IconButton>
              <IconButton> <LabelImportant/> </IconButton>
          </div>

          <h3 className="emailRow__title">
              {title}
          </h3>

          <div className="emailRow__message">
              <h4> {subject}  
              <span className='emailRow__description'>
                  {description}
                  </span>   
                  </h4>
          </div>
          
          <div className="emailRow__time">
            <p>{time}</p>  
          </div>
    </div>
  )
}

export default EmailRow