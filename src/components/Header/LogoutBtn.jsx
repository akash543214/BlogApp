import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {Link ,useNavigate} from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        
    }
  return (
    <button
    onClick={logoutHandler}
    >Sign out</button>
  )
}

export default LogoutBtn