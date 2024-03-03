import React from 'react'
import '../Styles/NavBar.css'
import logo from '../Images/brand.svg'
import Cookies from 'js-cookie'
function NavBarComponent() {
    const auth = { "token": Cookies.get("Token"), "role": Cookies.get("Role") }
    return (
        <section className='navsection'>
            {auth.role == "430a9459-e1e5-47b8-9a91-e299df67bd41" && auth.token ?
                <>admin</>:
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} width="40px" /><span style={{ marginLeft: '-20px' }}>Mvc</span></a>
                        {auth.token ? (auth.role == "225d9203-20f9-46b8-b81c-80ea26537763" && auth.token) &&
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