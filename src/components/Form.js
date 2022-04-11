import React from "react";

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input type="text"
            value = {props.value}
            onChange = {props.change}
            placeholder="Wpisz miasto"
            />
            <button type='submit'>Szukaj</button>
        </form>
    )
}

export default Form;