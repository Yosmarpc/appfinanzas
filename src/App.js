/** @format */

import Index from "./components/indicadores/Index";
import NavbarMenu from "./components/navbar/NavbarMenu";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCalculadora from "./components/calculadora/FormCalculadora";
import React, { useEffect } from "react";

function App() {
  const [loadings, setLoadings] = React.useState(false);
  const url = "https://mindicador.cl/api";
  const [dataIndicadorcal, setDataIndcalc] = React.useState([]);


  useEffect(() => {
      setLoadings(true);
    fetch(`${url}`)
    .then((response) => response.json())
    .then(data =>setDataIndcalc(data))
    .catch((error) => console.error(error))
   setTimeout(()=>{setLoadings(false)},2000)
  },[])

  return (
    <>
    <div variant="dark">
       <NavbarMenu />
    </div>

    <div className="App-header" variant="dark">
    {loadings ? <div className="text-center my-4 text-dark">Loading espere....</div> :
      <>
      <FormCalculadora dataCal={dataIndicadorcal} />
      <Index />
      </>
    }
    </div>
 
    </>
  );
}

export default App;
