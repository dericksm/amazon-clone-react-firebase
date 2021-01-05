import React from "react";
import "./Home.css";

import { Product } from "../Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Page Image"
        />
        <div className="home_row">
          <Product
          id="123123"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
          <Product
          id="222"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
        </div>
        <div className="home_row">
        <Product
          id="5435"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
          <Product
          id="123"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
          <Product
          id="256"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
        </div>
        <div className="home_row">
        <Product
          id="12"
          title='The title image'
          image='https://images-na.ssl-images-amazon.com/images/I/51CO+Y4bdPL._SX376_BO1,204,203,200_.jpg'
          price={29.99}
          rating={5}
          />
        </div>
      </div>
    </div>
  );
};
