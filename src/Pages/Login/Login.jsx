import React, { useContext } from 'react';
import { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {

    const navigate = useNavigate();
     const {user,signInUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
         const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Logged in successfully!',
          icon: 'success',
          confirmButtonText: 'Ok',
          
        });
        navigate('/');
       }) 
    .catch((error) => {
        console.error(error.code); 

        if (error.code === 'auth/invalid-credential') {
    Swal.fire({
      title: 'Login Failed',
      text: 'Email or password is incorrect.',
      icon: 'error',
      confirmButtonText: 'Try Again',
    });
        
        } else {
          Swal.fire({
            title: 'Login Failed',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
            }
       });
       
     }
    
    return (
        <div className="hero bg-[#F3F3F3] 
        flex items-center mt-8 justify-center">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login Now!</h1>
      
    </div>
    <div className="card bg-white max-w-lg shrink-0 shadow-2xl">
      <div className="card-body ">
        <form onSubmit={handleLogin} className="fieldset w-sm">
          <label className="label ">Email</label>
          <input type="email" name='email' className="input bg-[#F3F3F3] w-full" placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" name='password' className="input bg-[#F3F3F3] w-full" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div>
            <p className='text-secondary mt-3 text-center'>Don't have an account?
                 <span onClick={()=>navigate('/auth/register')} className=' text-blue-700  
            hover:underline cursor-pointer font-semibold'>Register</span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;