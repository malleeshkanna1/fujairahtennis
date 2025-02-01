import React from "react";
import ClientsPartnersStyles from './css/ClientsPartners.module.css';

const ClientsPartners = () => {
  return (
    <div className="container-fluid p-3 p-md-5 mt-4">
      <div className="row">
        <div className="col-md-9 d-flex align-items-center order-2 order-md-1">
          <div className="row">
            <div className="col-xl-2 col-md-4 col-6">
              <img
                src="/images/clients-and-partners/cl6-copyright.png"
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
                alt="Vagoda"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <img
                src="/images/clients-and-partners/cl5-copyright.png" alt="G"
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
              />
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <img
                src="/images/clients-and-partners/cl4-copyright.png" alt="Sport"
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
              />
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <img 
                src="/images/clients-and-partners/cl3-copyright.png" alt=""
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
              />
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <img
                src="/images/clients-and-partners/cl1-copyright.png" alt="PRocket"
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
              />
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <img
                src="/images/clients-and-partners/cl2-copyright.png" alt="FastCourt"
                className={"img-fluid "+ClientsPartnersStyles['logo-hover']}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-center order-1 order-md-2">
          <p className={ClientsPartnersStyles['aboutclients']}>Check our best clients and partners</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsPartners;
