import React from 'react'
import '../Styles/NavBar.css'
import logo from '../Images/brand.svg'
function NavBarComponent() {
    const auth = { "token": true, "role": "user" }
    return (
        <section className='navsection'>
            {auth.role == "admin" && auth.token ?
                <><div class="">
                    <nav class="nav-side-menu ">
                        <div class="brand">Site Logo</div>
                        <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                        <div class="menu-list">
                            <ul id="menu-content" class="menu-content collapse out">
                                <li>
                                    <a href="#">
                                        <i class="fa fa-fw fa-dashboard fa-lg"></i>Dashboard
                                    </a>
                                </li>
                                <li data-toggle="collapse" data-target="#products" class="collapsed" data-parent="#menu-content">
                                    <a href="#">
                                        <i class="fa fa-fw fa-gift fa-lg"></i>UI Elements
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                </li>
                                <ul class="sub-menu collapse" id="products">
                                    <li class="active"><a href="#">CSS3 Animation</a></li>
                                    <li><a href="#">General</a></li>
                                    <li><a href="#">Buttons</a></li>
                                    <li><a href="#">Tabs & Accordions</a></li>
                                    <li><a href="#">Typography</a></li>
                                    <li><a href="#">FontAwesome</a></li>
                                    <li><a href="#">Slider</a></li>
                                    <li><a href="#">Panels</a></li>
                                    <li><a href="#">Widgets</a></li>
                                    <li><a href="#">Bootstrap Model</a></li>
                                </ul>
                                <li data-toggle="collapse" data-target="#service" class="collapsed" data-parent="#menu-content">
                                    <a href="#">
                                        <i class="fa fa-fw fa-table fa-lg"></i>Reports
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                </li>
                                <ul class="sub-menu collapse" id="service">
                                    <li><a href="#">Report 1</a></li>
                                    <li><a href="#">Report 2</a></li>
                                    <li><a href="#">Report 3</a></li>
                                </ul>
                                <li data-toggle="collapse" data-target="#new" class="collapsed" data-parent="#menu-content">
                                    <a href="#">
                                        <i class="fa fa-fw fa-users fa-lg"></i>Groups <i class="fa fa-chevron-down"></i>
                                    </a>
                                </li>
                                <ul class="sub-menu collapse" id="new">
                                    <li><a href="#">New 1</a></li>
                                    <li><a href="#">New 2</a></li>
                                    <li><a href="#">New 3</a></li>
                                </ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-fw fa-calendar-o fa-lg"></i>Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-fw fa-user fa-lg"></i>Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-fw fa-users fa-lg"></i>People
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-fw fa-cog fa-lg"></i>System
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div class="content">
                        <p>Page content goes here</p>
                    </div>
                </div>
                </> :
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} width="40px" /><span style={{ marginLeft: '-20px' }}>Mvc</span></a>
                        {auth.token ? (auth.role == "user" && auth.token) &&
                            <>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                            </> :
                            <>
                                <button>Login</button>
                            </>

                        }
                    </div>
                </nav>

            }

        </section>
    )
}

export default NavBarComponent