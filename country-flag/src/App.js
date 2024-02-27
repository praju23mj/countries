import React from "react";
import { useEffect,useState } from "react";
import './App.css';

function App() {

const[countries,setCountries]= useState([]);


useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then(response=>response.json())
  .then(data=>setCountries(data))
  .catch(err=>console.error("Error fetching data: ",err))
},[])

const flagStyle = {
  width: "100px",
  height: "100px",
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "10px",
  borderColor: "lightgrey",
  margin: "10px",
  padding: "10px",
  width: "200px",
};



  return (
    <div style={containerStyle} >
      {countries.map((country)=>(
        <div key={country.name.common} style={cardStyle}>
          <img 
          src={country.flags.png}
          alt={country.name.common}
          style={flagStyle}
          />
          <h3>{country.name.common}</h3>
        </div>
      ))}
     
    </div>
  );
}

export default App;
