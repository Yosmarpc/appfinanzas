/** @format */

import React, { useEffect, useState } from "react";
import { Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const FormCalculadora = (dataCal) => {
  const [TipoCalculo, setTipoCalculo] = useState(1);
  const [data, setData] = useState(dataCal);
  const [Result, setResult] = useState(0);
  const [formCalc, setFormCalc] = React.useState({
    cantidad: 1,
    valorResult: 0,
    Tipo: 1,
  });

  const { cantidad, valorResult, Tipo } = formCalc;

  const handleChange = (e) => {
    if (e.target.name == "Tipo") {
      setTipoCalculo(e.target.value);
    }
    setFormCalc({ ...formCalc, [e.target.name]: e.target.value });
  };

  const calculate = (cantidad, valor) => {
    setResult(cantidad * valor);
  };

  return (
    <div>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded my-4">

        <Card.Body>
          <div className="row my-3">
            <Form>
              <Row className="align-items-center">
                <Col>
                  <Form.Select
                    size="lg"
                    name="Tipo"
                    value={Tipo}
                    onChange={handleChange}
                  >
                    <option value="1">Dolar a Pesos Chilenos (activo)</option>
                    <option value="2">Peso Chilenos a Dolar (activo)</option>
                    {/*   <option value="3">Euro a Peso</option>
                <option value="4">Peso a Euro</option> */}
                  </Form.Select>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={
                      TipoCalculo == 1
                        ? `$ ${data.dataCal?.dolar?.valor}`
                        : TipoCalculo == 2
                        ? `CLP ${data.dataCal?.dolar?.valor}`
                        : ""
                    }
                  >
                    <Form.Control
                      type="number"
                      //placeholder="$"
                      name="cantidad"
                      value={
                        TipoCalculo == 1
                          ? cantidad
                          : TipoCalculo == 2
                          ? data.dataCal?.dolar?.valor
                          : 0
                      }
                      onChange={handleChange}
                      onBlur={() =>
                        calculate(cantidad, data.dataCal?.dolar?.valor, Tipo)
                      }
                      onClick={() =>
                        calculate(cantidad, data.dataCal?.dolar?.valor, Tipo)
                      }
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={
                      TipoCalculo == 1
                        ? "Peso CLP"
                        : TipoCalculo == 2
                        ? "$"
                        : ""
                    }
                  >
                    <Form.Control
                      type="number"
                      placeholder="Peso (CLP)"
                      name="valorResult"
                      value={Result}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Col>
                <Col
                  sx={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="text-dark text-center my-3 fs-4"
                >
                  {TipoCalculo == 1
                    ? "$"
                    : TipoCalculo == 2
                    ? "Pesos Chilenos     "
                    : ""}
                  { TipoCalculo == 1 ? cantidad : TipoCalculo == 2 ? `${Result}` : ' ' } =
                  {TipoCalculo == 1
                    ? `${Result}    Pesos Chilenos`
                    : TipoCalculo == 2
                    ? `$   ${cantidad}`
                    : 0}
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormCalculadora;
