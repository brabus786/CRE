import React from 'react';

import style_button from './button.module.scss';

const Button = (props) => {

    const buttonClasses = [style_button.Button];

    if (props.color == 'orange') buttonClasses.push(style_button.Button_orange);
    if (props.stretch) buttonClasses.push(style_button.stretch);

    return (
        <button className={buttonClasses.join(' ')}>
            {props.text}
        </button>
    );
};

export default Button;