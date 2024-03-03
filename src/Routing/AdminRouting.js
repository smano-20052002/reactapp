import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import NavBarComponent from '../Component/NavBarComponent'
import Cookies from 'js-cookie'
function AdminRouting() {
    
    let auth = {'token': Cookies.get("Token"),'role':Cookies.get("Role")}
    
    return(
        auth.token  && auth.role=="430a9459-e1e5-47b8-9a91-e299df67bd41"?
            <Outlet/> : 
         <>
            <Navigate to="/login"/>
         </>
         
    )
}

export default AdminRouting