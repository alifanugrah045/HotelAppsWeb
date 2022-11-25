import React from "react";
import Button from "../elements/Button/Button";
import IconText from "./IconText";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagline">We kaboom your beauty holiday instanly anda memorable</p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item ">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Star Booking Rooms
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:Support@staycation.id">
                  Support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622191791405">
                  021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation oy, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">Copyright 2021-All right reserved-Staycation</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
