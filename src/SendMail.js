import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form";
import { updateDoc, serverTimestamp } from "firebase/firestore";
import React from 'react'
import "./SendMail.css"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
   
    
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (formData) => {
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: serverTimestamp()
                // --have to look
            });
        dispatch(closeSendMessage());
    }
  
    return (
      <div className='sendMail'>
          <div className="sendMail__header">
              <h3>Send Message</h3>
                <Close className='sendMail__close' onClick={()=> dispatch(closeSendMessage())} />
            </div>
            
<form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' type="email" placeholder='To' {...register("to", { required: true })} />
                {errors.to && <p className="sendMail__error">To is Required!</p>}
                
              <input name="subject" type="text" placeholder='Subject' {...register("subject", { required: true })} />
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                
                <input name="message" type="text" className='sendMail__Message' placeholder='Message...'  {...register("message", { required: true })} />
                {errors.message && <p className="sendMail__error">MSG is Required!</p>}

                <div className="sendMail__options">
                     {/* <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} /> */}
                  <Button variant="contained"  color="primary" type="submit" className='sendMail__send'>Send</Button>
              </div>
          </form>
    </div>
  )
}

export default SendMail