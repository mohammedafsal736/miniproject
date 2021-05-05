import React from 'react';

const Navigation = ({ onRouteChange , isSignedIn }) => {

        if (isSignedIn) {
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f4 link dim black underline pa2 pointer'>Sign out</p>
                </nav>
            );
        } else {
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('admin')} className='f4 link dim black underline pa3 pointer'>Admin</p>
                    <p onClick={() => onRouteChange('signin')} className='f4 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f4 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }
       

}


export default Navigation;