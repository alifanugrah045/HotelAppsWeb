import React from "react";
import ImageHero from "../assets/images/banner_img.png";
import IconCities from "../assets/images/icons/icon_cities.svg";
import IconTreasure from "../assets/images/icons/ic_treasure.svg";
import IconTravel from "../assets/images/icons/icon_traveler.svg";
import Button from "../elements/Button/Button";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  const numberFormat = (number) => {
    const formatNumbering = Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
  };
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 class="font-weight-bold line-height-1 mb-3">
            Forget busy work, <br />
            start next vacation
          </h1>
          <p class="mb-4 font-weight-light text-gray-500 w-75">We provide what you need to enjoy your holiday with family.Time make another memorable moments.</p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTravel} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasure} Treasure`} />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasure</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Treasure`} />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5" style={{ width: 520, height: 410 }}>
          <img src={ImageHero} alt="Room" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
