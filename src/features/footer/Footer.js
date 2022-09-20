import React, { useState, Fragment } from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <nav className="Footer nav">
      <a className="nav-link" href="#">
        隱私權和 Cookie
      </a>
      <a className="nav-link" href="#">
        法律聲明
      </a>
      <a className="nav-link" href="#">
        廣告
      </a>
      <a className="nav-link" href="#">
        關於我的的廣告
      </a>
      <a className="nav-link" href="#">
        說明
      </a>
      <a className="nav-link" href="#">
        意見反應
      </a>
    </nav>
  );
}
