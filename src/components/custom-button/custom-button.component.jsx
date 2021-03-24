import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({  children, isGoogleSignIn, inverted, ...otherprops}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        {children}
    </button>
);

export default CustomButton;