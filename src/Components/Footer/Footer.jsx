import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };



  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created with care by{" "}
          <a
            href="https://github.com/dotKavash"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Varun Shastry
          </a>
        </h6>
      </div>
     
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
         
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
