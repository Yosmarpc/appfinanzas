/** @format */

import Index from "./components/indicadores/Index";
import NavbarMenu from "./components/navbar/NavbarMenu";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FormCalculadora from "./components/calculadora/FormCalculadora";
import React, { useEffect } from "react";
import Graficos from "./components/Graficos/Graficos";
import PrincipalCalculadora from "./components/calculadora/PrincipalCalculadora";
import { Spinner } from "react-bootstrap";
function App() {
  const [loadings, setLoadings] = React.useState(false);
  const url = "https://mindicador.cl/api";
  const [dataIndicadorcal, setDataIndcalc] = React.useState();

  useEffect(() => {
    setLoadings(true);
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setDataIndcalc(data))
      .catch((error) => console.error(error));
    setTimeout(() => {
      setLoadings(false);
    }, 2000);
  }, []);

  return (
    <>
      <div variant="dark">
        <NavbarMenu />
      </div>
      {loadings ? (
        <div className="text-center my-5 text-dark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spinner animation="grow" variant="secondary" /></div>
      ) : (
        <div>
          <PrincipalCalculadora dataCal={dataIndicadorcal} />
          {/* <FormCalculadora dataCal={dataIndicadorcal} /> */}
          <div variant="dark">
            <div className="container-md">
              <Index />
              <div className="col-lg-12">
                <Graficos />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
