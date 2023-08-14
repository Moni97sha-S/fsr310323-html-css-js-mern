import React from "react";
import "../styles/Footer.css";
import { FiMail } from "react-icons/fi";
import {
  BsInstagram,
  BsYoutube,
  BsTelegram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h3 className="company-name">EDYODA</h3>
        <div className="address">
          1st Floor, <br />
          Gopalan Millennium Tower, <br />
          ITPL Main Rd, Brookefield, <br />
          Bengaluru, Karnataka-560037, <br />
          India
        </div>
        <br />
        <a className="mail" href="mailto:hello@edyoda.com">
          <span>
            <FiMail className="icon" style={{ backgroundColor: "#172146" }} />
          </span>{" "}
          hello@edyoda.com
        </a>
        <br /> <br />
        <div className="connect">
          <a
            href="https://instagram.com/edyoda?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <BsInstagram
              className="icon"
              style={{
                backgroundColor: "#172146",
                textDecoration: "none",
              }}
            />
          </a>
          <a href="https://www.youtube.com/@edyoda/featured" target="_blank">
            <BsYoutube className="icon" />
          </a>
          <a href="https://t.me/joinchat/t5nf5KMkDCg0MmNl" target="_blank">
            <BsTelegram className="icon" />
          </a>
          <a href="https://www.facebook.com/edYoda.here/" target="_blank">
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/edyoda/mycompany/"
            target="_blank"
          >
            <BsLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/edyodahq?lang=en" target="_blank">
            <BsTwitter className="icon" />
          </a>
        </div>
        <hr />
        <div className="fwhiterow">
          {" "}
          © 2023 zekeLabs Technologies Private Limited
        </div>
      </footer>
    </>
  );
}
