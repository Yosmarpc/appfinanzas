/** @format */

import moment from "moment";
import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { currency } from "../../helpers";
import ModalHistorial from "../modales/ModalHistorial";
import "./Styles.scss";
const Index = () => {
  const url = "https://mindicador.cl/api";
  const [dataIndicador, setDataIndicador] = React.useState([]);
  const [loadings, setLoadings] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [stateAll, setstateAll] = React.useState(false);
  moment.lang('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
  );


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
    <div style={{ marginTop: "-6.4rem" }}>
      <section className="container my-1">
     <ModalHistorial show={modalShow}
        onHide={() => setModalShow(false)}
      />
  <div className="row my-3 shadow p-3 mb-5 bg-white rounded" >
    <Card className="my-4">
      <Card.Body>
      <div className="text-left my-3 text-dark">
          <span><b>Fuente data</b> <a href="https://mindicador.cl/" target="_blank" title="mindicador.cl" alt="mindicador.cl" rel="noreferrer"> mindicador.cl</a> </span>
            <span><b>Fecha Actualizada</b> {moment(dataIndicador?.fecha).format('LLLL')}</span>
      </div>
      </Card.Body>
      </Card>
      {!loadings ?
      <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3">
            <div className="card-body text-dark">
              {dataIndicador?.dolar?.valor ?
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2"> {currency(dataIndicador?.dolar?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.dolar?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.dolar?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.dolar?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <img src="/img/logos/dolar-logo.svg" alt={dataIndicador?.dolar?.nombre} title={dataIndicador?.dolar?.nombre} width="100rem" height="100rem" />
                {/* <button  className="btn btn-primary btn-sm bg-dark">
                Historial
                </button> */}
                </div>

              </div>:
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.dolar_intercambio?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.dolar_intercambio?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.dolar_intercambio?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.dolar_intercambio?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.dolar_intercambio?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/dolar-logo.svg" alt={dataIndicador?.dolar_intercambio?.nombre} title={dataIndicador?.dolar_intercambio?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>
            </div>
            :
            <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
          </div>
        </div>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.euro?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.euro?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.euro?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.euro?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.euro?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/euro-2.svg" alt={dataIndicador?.euro?.nombre} title={dataIndicador?.euro?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.bitcoin?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.bitcoin?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.bitcoin?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.bitcoin?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.bitcoin?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/bitcoin.svg" alt={dataIndicador?.bitcoin?.nombre} title={dataIndicador?.bitcoin?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        {stateAll ?
        <>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.uf?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.uf?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.uf?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.uf?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.uf?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/dolar-logo.svg" alt={dataIndicador?.uf?.nombre} title={dataIndicador?.uf?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.utm?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.utm?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.utm?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.utm?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.utm?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/dolar-logo.svg" alt={dataIndicador?.utm?.nombre} title={dataIndicador?.utm?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.ivp?.valor ? 
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.ivp?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.ivp?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.ivp?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.ivp?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/dolar-logo.svg" alt={dataIndicador?.ivp?.nombre} title={dataIndicador?.ivp?.nombre} width="100rem" height="100rem" />
             {/*    <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.ipc?.valor ? 
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.ipc?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.ipc?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.ipc?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.ipc?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/percent-sign-flat-design-long-shadow-icon-percentage-shop-discount-symbol-silhouette-illustration-vector.jpg" alt={dataIndicador?.ipc?.nombre} title={dataIndicador?.ipc?.nombre} width="100rem" height="100rem" />
                {/* <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>


        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
              {dataIndicador?.imacec?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <h5 className="card-title fs-2">{currency(dataIndicador?.imacec?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.imacec?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.imacec?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.imacec?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/percent-sign-flat-design-long-shadow-icon-percentage-shop-discount-symbol-silhouette-illustration-vector.jpg" alt={dataIndicador?.imacec?.nombre} title={dataIndicador?.imacec?.nombre} width="100rem" height="100rem" />
               {/*  <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <div className="card mb-3 ">
            <div className="card-body text-dark">
        {dataIndicador?.tpm?.valor ?
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="card-title fs-2">{currency(dataIndicador?.tpm?.valor)}</h5>
              <p className="card-text fs-6 fw-bold">
              {dataIndicador?.tpm?.nombre}
              </p>
              <p className="card-text fs-6">
              <b>Unidad Medida:</b>    {dataIndicador?.tpm?.unidad_medida}
              </p>
              <p className="card-text fs-6">
                <b>Última Actualización:</b>  {moment(dataIndicador?.tpm?.fecha).format('DD-MM-YYYY')}
              </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/img/logos/percent-sign-flat-design-long-shadow-icon-percentage-shop-discount-symbol-silhouette-illustration-vector.jpg" alt={dataIndicador?.tpm?.nombre} title={dataIndicador?.tpm?.nombre} width="100rem" height="100rem" />
                {/* <button  className="btn btn-primary btn-sm bg-dark"  >
                Historial
              </button> */}
                </div>

              </div>
              :
               <div className="text-center"> <Spinner animation="grow" variant="secondary" /></div> }
            </div>
          </div>
        </div>
        </>: ''}
       
        <div className="text-center">
        {!stateAll ?
          <button className="btn btn-link" onClick={() =>setstateAll(true) }>Mostrar todo</button> :
          <button className="btn btn-link" onClick={() =>setstateAll(false) }>Mostrar Menos</button>
        }
        </div>
      </div>
      : <div className="text-center"><Spinner animation="grow" variant="secondary" /> </div>}
      </div>
      </section>
     
    </div>
  );
};

export default Index;
