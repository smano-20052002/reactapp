import React, { useRef, useState } from 'react'
import axios from 'axios';
import '../Styles/Login.css';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
const isValidEmail = (email) => {
  // Define a regular expression pattern for email validation.
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
function LoginComponent() {
  const navigate = useNavigate();
  const emailerrorref = useRef();
  const pwderrorref = useRef();
  const servererrorref = useRef();
  const [loginuser, setLoginUser] = useState({ Email: '', Password: '' });

  const login = (e) => {
    e.preventDefault();
    emailerrorref.current.innerText = pwderrorref.current.innerText = "";
    servererrorref.current.style.visibility='hidden';
    servererrorref.current.style.visibility = 'hidden';
    if (loginuser.Email == '' || loginuser.Password == '' || loginuser.Password.length < 8 || !isValidEmail(loginuser.Email)) {
      if (loginuser.Email == '') {
        // emailerrorref.current.style.visibility = 'visible'
        emailerrorref.current.innerText = "*Required! enter a email"
      } else if (!isValidEmail(loginuser.Email)) {
        // emailerrorref.current.style.visibility = 'visible'
        emailerrorref.current.innerText = "*Required! Invalid email format"
      }
      if (loginuser.Password == '') {
        // pwderrorref.current.style.visibility = 'visible'
        pwderrorref.current.innerText = "*Required! enter a password"
      } else if (loginuser.Password.length < 8) {
        // pwderrorref.current.style.visibility = 'visible'
        pwderrorref.current.innerText = "*Required! must contain 8 character"
      }

    } else {
      //console.log(loginuser);
      axios.post(`http://localhost:5287/api/Login/LoginUser`, loginuser)
        .then((response) => {
          console.log(response.data)
          if (response.data.accountExists) {
            if (response.data.passwordStatus) {
              if (response.data.token != null) {
                var decodetoken = jwtDecode(response.data.token);
                Cookies.set("Id", decodetoken.Id);
                Cookies.set("Role", decodetoken.Role)
                Cookies.set("Token", response.data.token)
                if(decodetoken.Role=="430a9459-e1e5-47b8-9a91-e299df67bd41"){
                  navigate('/dashboard')
                }else if(decodetoken.Role=="225d9203-20f9-46b8-b81c-80ea26537763"){
                  navigate('/home')
                }
                // navigate('/');
                window.location.reload()
              }
            } else {
              servererrorref.current.style.visibility='visible';
              servererrorref.current.innerText="Invalid Password"
              console.log("password incorrect");
            }
          } else {
            servererrorref.current.style.visibility='visible';
            servererrorref.current.innerText="Email is not exist"
            console.log("no email");
          }
        }).catch((e) => {
          console.log(e);
        })
    }

  }
  console.log(Cookies.get("user"));
  return (


    <section class="main mainbg" >
      {/* <!-- Login Form --> */}
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-4 col-md-6 col-sm-6">
          <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile img-thumbnail rounded-circle"
                    width="90px" alt="profile" />
            <div class="card shadow">
              <div class="card-title border-bottom-0 text-center border-bottom">

                <div class="text-center">
                  
                </div>
                <h2 class="p-3 head">Login</h2>
                <div class="alert alert-danger mx-5 servererrmsg" role="alert" ref={servererrorref}>
                  
                </div>
              </div>

              <div class="card-body">
                <form onSubmit={(e) => login(e)}>
                  <div class="mb-4">
                    <label for="username" class="form-label">Email</label>
                    <input type="text" class="form-control" id="username" placeholder='Enter your email' value={loginuser.Email} onChange={(e) => setLoginUser({ ...loginuser, Email: e.target.value })} />
                    <label ref={emailerrorref} className='errmsg'></label>
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder='Enter a password' value={loginuser.Password} onChange={(e) => setLoginUser({ ...loginuser, Password: e.target.value })} />
                    <label ref={pwderrorref} className='errmsg'></label>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn text-dark mt-2 button">Login</button><br />
                    <button type="submit" class="btn-link bg-transparent text-dark mt-3">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default LoginComponent