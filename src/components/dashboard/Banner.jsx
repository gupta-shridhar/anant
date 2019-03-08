import React from 'react';
import { searchImg } from '../../ constants/images';

const Banner = () => (
  <section className="benner__section">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="homer__benner">
            <h1>Your Service Expert in Delhi</h1>
            <h2>Get instant access to reliable and affordable services</h2>  
            <form className="form-inline">
              <img className="search_icon" alt="search" src={searchImg} />
              <input className="form-control mr-sm-2" type="search" placeholder="search for a video" aria-label="Search" />                
            </form>      
          </div> 
        </div>
      </div>
    </div>     
  </section>
);

export default Banner;
