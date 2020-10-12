import React from 'react';
import featuredService from '../../../images/featuredService.png';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featuredService} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{color: '#3A4256'}}>Exceptional Dental <br/>Care, on Your Terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam deleniti? Ea, voluptas numquam fugiat ab maxime id repellendus hic officiis, aut magnam dolores rem sed minima, ut amet. Accusamus, unde similique consequatur eaque voluptatem quidem! Quas amet delectus placeat beatae dicta minima totam eum iure debitis architecto eius facere doloribus exercitationem fuga, suscipit ullam est sequi error voluptatum dolores?</p>
                        <button style={{background: '#15D2C9', border:'none'}} className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;