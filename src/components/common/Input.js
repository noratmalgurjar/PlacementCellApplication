import React from 'react';

function Input(props){
    return (
        <div className="form-group">
            <label className="form-label">{props.labelName}</label>
            <input className="form-control" placeholder={props.placeholder} type={props.type} name={props.type} id={props.controlId} value={props.value} onChange={(e) => props.handleOnChange(e)}/>
        </div>
    )
}
export default Input;