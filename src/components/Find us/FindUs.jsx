import React from 'react';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-primary text-lg mb-4 mt-4 font-semibold'>Find Us On</h1>
            <div className="join join-vertical w-full">
  <button className="btn join-item">
      <img src="/src/assets/fb.png" alt="" />
    Facebook</button>
  <button className="btn join-item">
     <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
  Login with X
    </button>
  <button className="btn join-item"><img src="/src/assets/instagram.png" alt="" /> Instagram</button>
</div>
        </div>
    );
};

export default FindUs;