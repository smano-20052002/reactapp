import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponent from '../Component/HomeComponent'
import LoginComponent from '../Component/LoginComponent'
import RegisterComponent from '../Component/RegisterComponent'
import DashboardComponent from '../Component/DashboardComponent'
import NavBarComponent from '../Component/NavBarComponent'
import PrivateRouting from './PrivateRouting'
import MasterPage from '../Component/MasterPage'
import LoaderComponent from '../Component/LoaderComponent'
import WelcomePage from '../Component/WelcomePage'
import AdminRouting from './AdminRouting'
function RouteSetting() {

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route element={<MasterPage />}>
                        <Route element={<PrivateRouting />}>
                            <Route element={<AdminRouting />}>
                                <Route element={<DashboardComponent />} path="/dashboard" />
                            </Route>

                            <Route element={<HomeComponent />} path="/home" />
                        </Route>

                        <Route element={<LoginComponent />} path="/login" />
                        <Route element={<RegisterComponent />} path="/register" />
                        <Route element={<WelcomePage />} path='/' exact index />
                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default RouteSetting