import "./login.css"
import { toast } from "react-toastify"
import React, { useState } from 'react'

const Login = () => {
    const [avatar,setAvatar] = useState({
        file: null,
        url:""
    })

    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    const handleRegister = async(e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)

        const {username, email, password} = Object.fromEntries(formData);

        // try {

        //     const res = await createUserWithEmailAndPassword(auth , email, password);

        //     const imgUrl = await upload(avatar.file);
            
        //     await setDoc(doc(db,"users", res.user.uid), {
        //         username,
        //         email,
        //         avatar: imgUrl,
        //         id: res.user.uid,
        //         blocked: []
        //     });

        //     await setDoc(doc(db,"userchats", res.user.uid), {
        //         chats: [],
        //     });

        //     toast.success("Account created! You can login now")

        // }catch(err) {
        //     console.log(err);
        //     toast.error(err.message)
        // } finally {
        //     setLoading(false)
        // }
        
    }
const handleLogin = e => {
    e.preventDefault()
}
  return (
    <div className="login">
        <div className="item">
            <h2>Welcome back</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" id="" placeholder="Email"/>
                <input type="password" placeholder="Password" name="password" />
                <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                    Upload an image</label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" name="username" id="" placeholder="Username"/>
                <input type="text" name="email" id="" placeholder="Email"/>
                <input type="password" placeholder="Password" name="password" />
                <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login