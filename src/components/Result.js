import React from "react";

const Result = (props) => {
    const {err, miasto} = props.weather
    return (
        <div>
            Pogoda dla: {miasto}
        </div>
    )
}

export default Result;