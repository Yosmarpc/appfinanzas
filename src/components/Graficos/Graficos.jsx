import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import moment from 'moment';
const { faker } = require('@faker-js/faker');
const ListTipo = [
  {
    "id": '01',
    "codigo": 'dolar',
    "name": 'Dolar'
  },
  {
    "id": '02',
    "codigo": 'dolar_intercambio',
    "name": 'dolar_intercambio'
  },
  {
    "id": '03',
    "codigo": 'euro',
    "name": 'euro'
  },
  {
    "id": '04',
    "name": 'uf'
  },
  {
    "id": '05',
    "codigo": 'ivp',
    "name": 'ivp'
  },
  {
    "id": '06',
    "codigo": 'ipc',
    "name": 'ipc'
  },
  {
    "id": '07',
    "codigo": 'utm',
    "name": 'utm'
  },
  {
    "id": '08',
    "codigo": 'imacec',
    "name": 'imacec'
  },
  {
    "id": '09',
    "codigo": 'tasa_desempleo',
    "name": 'tasa desempleo'
  },
  {
    "id": '10',
    "codigo": 'bitcoin',
    "name": 'bitcoin'
  },
  {
    "id": '11',
    "codigo": 'tpm',
    "name": 'tpm'
  }];

const Graficos = () => {

  const urlApi = 'https://mindicador.cl/api'
  const [dataTipo, setDataTipo] = useState();
  const [loadingGrafico, setloadingGrafico] = useState(false);

  const [filterTipo, setFilterTipo] = useState({
    tipo: 'dolar',
    anno: 2022
  });

  const { tipo, anno } = filterTipo;

  const hendleFilter = (e) => {
    setFilterTipo({ ...filterTipo, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    getIndicadorTipo(tipo, anno);
  }, [tipo, anno])


  const getIndicadorTipo = (tipo) => {
    setloadingGrafico(true)
    fetch(`${urlApi}/${tipo}/${anno}`)
      .then((response) => response.json())
      .then(data => setDataTipo(data))
      .then(setTimeout(()=>{ setloadingGrafico(false)},1000))
      .catch((error) => console.error(error.message))
  }
  const dataOrden = dataTipo?.serie.sort((a, b) => {
    return moment(a.fecha).format('YYYYMMDD') - moment(b.fecha).format('YYYYMMDD');
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historial por dia',
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        /*    y1: {
             type: 'bar',
             display: true,
             position: 'left',
             grid: {
               drawOnChartArea: true,
             },
           }, */
      },
    },
  };

  const labels = dataTipo && dataTipo?.serie.length > 0 ? dataTipo?.serie.map((dLebel, index) => (
    `${moment(dLebel?.fecha).format('DD.MM.YYYY')}`
  )) : []
  const datas = dataTipo && dataTipo?.serie.length > 0 ? dataTipo?.serie.map((ddata, index) => (
    ddata?.valor
  )) : []
  const data = {
    labels,
    datas,
    datasets: [
      {
        label: tipo,
        fill: true,
        labels: labels,
        data: datas,
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
    ],
  };

  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <Card.Body>
          <div className="row my-3">
            <Form>
              <Row className="align-items-center">
                <Col>
                  <Form.Select
                    size="lg"
                    name="tipo"
                    value={tipo}
                    onChange={hendleFilter}
                  >
                    {ListTipo.map((data, index) => (
                      <option value={data.codigo} key={index + 1}>{data.name}</option>
                    ))}

                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    size="lg"
                    name="anno"
                    value={anno}
                    onChange={hendleFilter}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </div>
          {!loadingGrafico ?
            <Line options={options} data={data} />
            : <div className="text-center"><Spinner animation="grow" variant="secondary" /></div>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Graficos
