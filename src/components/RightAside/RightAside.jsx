import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../Find us/FindUs';
import Qzone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div className=''>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;