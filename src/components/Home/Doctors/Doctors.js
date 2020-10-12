import React from "react";
import doctor from "../../../images/makeAppointment.png";
import Doctor from "../Doctor/Doctor";

const doctors = [
  {
    name: "John Smith",
    img: doctor,
    phone: "+123987456",
  },
  {
    name: "Hussain Hammad",
    img: doctor,
    phone: "+1098723456",
  },
  {
    name: "Christopher Green",
    img: doctor,
    phone: "+1239872389",
  },
];

const Doctors = () => {
  return (
    <section className="doctors my-5">
      <div className="container">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }} className="text-center mb-5">OUR DOCTORS</h5>
      </div>

      <div className="row">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
