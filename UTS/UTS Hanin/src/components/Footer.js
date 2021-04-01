import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column2 */}
          <div className="col">
            <h4>ABOUT</h4>
            <ui className="list-unstyled">
              <li>Nama  : Hanin Syafiq Roziqie</li>
              <li>Kelas : TI-3E</li>
              <li>Nim   : 1841720183</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4></h4>
            <ui className="list-unstyled">
              <img src="../../media/10.jpg" width="50"
         height="50">

         </img>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Hanin Syafiq Roziqie | UTS Framework |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;