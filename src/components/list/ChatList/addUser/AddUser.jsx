import "./addUser.css"

import React from 'react'

const AddUser = () => {
  return (
    <div className="addUser">
        <form>
            <input type="text" placeholder="Username" name="username"/>
            <button>Search</button>
        </form>
        <div>
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Iadu hamu</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser