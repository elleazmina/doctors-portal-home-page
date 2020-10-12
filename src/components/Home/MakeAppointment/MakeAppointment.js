import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/makeAppointment.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 style={{ color:'#1CC7C1'}} className="text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti deleniti suscipit voluptates quasi expedita inventore commodi, soluta obcaecati vitae?</p>
                        <button style={{background:'#1CC7C1'}} className="btn btn primary text-white my-4 p-2">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;