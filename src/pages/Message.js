import React from 'react'
import './Message.css'
import List from "../components/list/List"
import Detail from "../components/detail/Detail"
import Chat from "../components/chat/Chat"
import Login from "../components/login/Login"
import Notification from "../components/notification/Notification"

const Message = () => {
  return (
    <div className='container'>
      {
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
      }
      <Notification/>
    </div>
  )
}
 
export default Message