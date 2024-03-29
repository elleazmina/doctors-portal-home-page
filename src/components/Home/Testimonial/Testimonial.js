import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p style={{ color:'#3A4256'}} className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 style={{ color:'#1CC7C1'}}>{name}</h6>
                    <p className="m-0 text-secondary">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;