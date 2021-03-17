import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({  children, ...otherprops}) => (
    <button className='custom-button' {...otherprops}>
        {children}
    </button>
);

export default CustomButton;