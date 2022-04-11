import React from "react";

const Result = ( { data, temp, cisnienie, wiatr, wschod, zachod, err, miasto } ) => {
    if ( err ) {
        return (
            <div>
                Nie moglismy znalesc pogody dla : { miasto }. Powod: { err }
            </div>
        )
    }
    if ( temp ) {
        const wschodData = new Date(wschod*1000).toLocaleTimeString()
        const zachodData = new Date(zachod*1000).toLocaleTimeString()
        return (
            <div>
                <h1>Pogoda dla: { miasto } </h1>
                <h2>Data: {data}</h2>
                <h3>Temperatura: { temp } C</h3>
                <h3>Wiatr: { wiatr } m/s</h3>
                <h3>Cisnienie: { cisnienie }hPa</h3>
                <h3>Wschod: { wschodData }</h3>
                <h3>Zachód: { zachodData }</h3> 
            </div>
        )
    }
}

export default Result;