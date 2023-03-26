import { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from '../context/userContext'

export function UserRoute() {
  const [state] = useContext(UserContext)
  if (state.user.is_admin === false) {
    return <Outlet />
  }
  return <Navigate to="/" />
}


export function AdminRoute() {
  const [state] = useContext(UserContext)
  if (state.user.is_admin === true) {
    return <Outlet />
  }
  return <Navigate to="/" />
}
