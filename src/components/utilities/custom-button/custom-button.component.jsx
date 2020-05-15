import {CustomButtonContainer} from './custom-button.styles';
import React from 'react';

const CustomButton = ({children, ...props}) => (//Destructuring
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);
export default CustomButton;