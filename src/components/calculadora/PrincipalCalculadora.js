/** @format */

import React from "react";
import FormCalculadora from "./FormCalculadora";
import "./Styles.scss";
const PrincipalCalculadora = (dataCal) => {
  return (
    <div>
      <section className="pt-1 bg-light">
      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-8 col-xl-8">
                <FormCalculadora dataC={dataCal} />
          </div>
      </div>

      </section>
    </div>
  );
};

export default PrincipalCalculadora;
