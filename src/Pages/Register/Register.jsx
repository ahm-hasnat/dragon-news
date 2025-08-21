import React, { use, useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {

     const navigate = useNavigate();

     const {createUser,setUser} = useContext(AuthContext);
     const handleRegister = e =>{
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
         const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;

       createUser(email,password)
      .then((result) => {
          const user = result.user;
     setUser(user);
     
       Swal.fire({
           title: 'Success!',
            text: 'Registration Successful!',
         icon: 'success',
          confirmButtonText: 'Ok'
   })
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
           title: 'warning!',
            text: 'user already exist!',
         icon: 'warning',
          confirmButtonText: 'Ok'
   })
        });

      navigate ('/auth/login');
     }
    return (
        <div className="hero bg-[#F3F3F3]  
        flex items-center justify-center">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card bg-white max-w-lg shrink-0 shadow-2xl">
      <div className="card-body ">
        <form onSubmit={handleRegister} className="fieldset w-sm">
          <label className="label ">Name</label>
          <input type="text" name='name' className="input bg-[#F3F3F3] w-full" placeholder="Name" required/>
           <label className="label ">Photo URL</label>
          <input type="url" name='photo' className="input bg-[#F3F3F3] w-full" placeholder="photo link" required/>
           <label className="label ">Email</label>
          <input type="email" name='email' className="input bg-[#F3F3F3] w-full" placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" name='password' className="input bg-[#F3F3F3] w-full" placeholder="Password" required/>
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          
          <div className='flex gap-2'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-sm" required/>
            <p>Accept terms & conditions</p>
          </div>
           <p className='text-secondary mt-3 text-center'>Already have an account? <span onClick={()=> navigate ('/auth/login')} className=' text-blue-700  
            hover:underline cursor-pointer font-semibold'>Login</span></p>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;