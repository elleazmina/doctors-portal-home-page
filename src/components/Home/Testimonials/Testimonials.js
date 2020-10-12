import React from 'react';
import './Testimonials.css'
import Winson from '../../../images/Winson.png';
import Tiana from '../../../images/Tiana.png';
import Joshy from '../../../images/Joshy.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'My wife and I were recently heading to Florida. While on the jetway, my wife told me that she wasn’t feeling well and didn’t think we should get on the plane. We were eventually taken to Jamaica Hospital. From the moment she was wheeled through the doors of the emergency room, my fears were immediately put to rest. A courteous, compassionate and competent group of people immediately enveloped her in a cocoon of security. I would like to tell you that you should be extremely proud of your staff for the manner in which they treated a frightened pair of senior citizens.',
        name: 'Winson Herry',
        from: 'California',
        img: Winson
    },
    {
        quote: 'I am writing this letter to thank everyone at your wonderful hospital for the excellent care that was given to me. Within minutes of arriving in the emergency room I was treated for what was diagnosed as a mild stroke. I want to thank the entire staff for the kind and caring assistance I received, including the security guards, ER staff, and the doctors, nurses and aides on the third floor. Everyone! I have made a remarkable and full recovery thanks to your quick and caring staff. I will be forever grateful to everyone for the care I received.',
        name: 'Tiana Gress',
        from: 'New York',
        img: Tiana
    },
    {
        quote: 'We would like to let you know how much we appreciate the special care our daughter was given by the doctors and staff at your hospital. Our baby’s physician was professional, kind, understanding, and her treatment was “right on.” Your organization should be proud to have such kind hearted people. They made sure that my daughter’s hospitalization was very pleasant.',
        name: 'Margarette Joshy',
        from: 'Michigan',
        img: Joshy
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
            <h5 style={{ color:'#1CC7C1'}} className="text-uppercase">Testimonials</h5>
                <h1 style={{ color:'#3A4256'}}>What's Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} ></Testimonial>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonials;