import React from 'react';

function Button(props){
    console.log(props);
    return (
        <button className={props.btnClass} type={props.btnType} onClick={() => props.handleSubmit()}>{props.btnName}</button>
    )
}

export default Button;