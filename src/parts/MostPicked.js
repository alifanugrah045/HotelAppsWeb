import React from "react";
import Button from "../elements/Button/Button";
import Fade from "react-reveal/Fade";

const MostPicked = (props) => {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div key={`mostpicked-${index}`} className={`item column-4${index === 0 ? " row-2" : "  row-1"}`}>
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light"> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img src={item.imageUrl} alt="img-mostpicked" className="img-cover" />
                    </figure>
                    <div className="meta-wrapper">
                      <Button className="stretched-link d-block text-white" type="link" href={`/properties/${item._id}`}>
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city},{item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
          {/* <div className="item column-4 row-2">
          <div className="card">card1</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card2</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card3</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card4</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card5</div>
        </div> */}
        </div>
      </Fade>
    </section>
  );
};

export default MostPicked;
