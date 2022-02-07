/** @format */

import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import "./Styles.scss";
const Index = () => {
  const url = "https://mindicador.cl/api";
  const [dataIndicador, setDataIndicador] = React.useState([]);
  const [loadings, setLoadings] = React.useState(false);
  moment.locale('es');

  React.useEffect(() => {
    handleGetApi();
  }, []);

  const handleGetApi = () => {
    try {
      setLoadings(true);
      fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => setDataIndicador(data));
        setTimeout(()=>{
          setLoadings(false);
        },1500)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <section className="container-md  my-4">
        <div className="text-center my-3 text-dark">
            <span>Fecha Actualizada: {moment(dataIndicador?.fecha).format('LLLL')}</span>
        </div>
      <div className="row">
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4 col-lg-4 col-xl-4">
          <div className="card mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{dataIndicador?.dolar?.valor}</h5>
              <p className="d-flex card-text fs-6">
              {dataIndicador?.dolar?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.dolar?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.dolar?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format( dataIndicador?.dolar_intercambio?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.dolar_intercambio?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.dolar_intercambio?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.dolar_intercambio?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{dataIndicador?.euro?.valor}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.euro?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.euro?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.euro?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.uf?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.uf?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.uf?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.uf?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.utm?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.utm?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.utm?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.utm?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.ivp?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.ivp?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.ivp?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.ivp?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.ipc?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.ipc?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.ipc?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.ipc?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>


        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.imacec?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.imacec?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.imacec?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.imacec?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 col-lg-4 col-xl-4">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              <h5 className="card-title fs-2">{new Intl.NumberFormat().format(dataIndicador?.tpm?.valor)}</h5>
              <p className="card-text fs-6">
              {dataIndicador?.tpm?.nombre}
              </p>
              <p className="d-flex card-text fs-6">
                Unidad Medida: {dataIndicador?.tpm?.unidad_medida}
              </p>
              <p className="d-flex card-text fs-6">
                Última Actualización: {moment(dataIndicador?.tpm?.fecha).format('DD-MM-YYYY')}
              </p>
              <button  className="btn btn-primary btn-sm bg-dark" >
                Historial
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
     
    </div>
  );
};

export default Index;
