import React, { useCallback, useEffect, useState } from "react";
import './App.css';
import Form from './Form';
import Result from './Result';
import axios from "axios";

export const App = () => {
  const [data, setData] = useState( '' );
  const [miasto, setMiasto] = useState( '' );
  const [wschod, setWschod] = useState( '' );
  const [zachod, setZachod] = useState( '' );
  const [temp, setTemp] = useState( '' );
  const [wiatr, setWiatr] = useState( '' );
  const [cisnienie, setCisnienie] = useState( '' );
  const [err, setErr] = useState( '' );

  const handleInputChange = ( e ) => {
    setMiasto( e.target.value )
  }

  const fetchData = async ( e ) => {
    try {
      e.preventDefault()      
      const res = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${miasto}&appid=3f47f75dd423f2cd71c8e03cab60db75` );
      const time = new Date().toLocaleString();
      const { main, sys, wind } = res.data
      console.log( main );
      console.log( sys );
      console.log( wind );
      setData(time)
      setTemp( (main.temp -273.15).toFixed(0))
      setWiatr( wind.speed )
      setCisnienie( main.pressure )
      setWschod(sys.sunrise)
      setZachod(sys.sunset)
    } catch ( error ) {
      console.log( error )
      setErr( error )
    }
  }


    return (
      <div className="App">
        <Form value={ miasto }
          change={ handleInputChange }
          submit={ fetchData }
        />
        <Result data={ data } temp={ temp }cisnienie={ cisnienie } wiatr={ wiatr } wschod={ wschod } zachod={ zachod } miasto={ miasto } err={ err } />
      </div>
    );
  
}