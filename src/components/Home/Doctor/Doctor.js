import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {
  return (
      <div className="col-md-4 text-center">
        <img className="img-fluid mb-3" src={doctor.img} alt="" />
        
        <h6 style={{ color: "#3A4256" }}>
          {doctor.name}
        </h6>
        <p> <FontAwesomeIcon style={{ color: "#1CC7C1"}} icon={faPhoneAlt}/>{doctor.phone}</p>
      </div>
  );
};

export default Doctor;
