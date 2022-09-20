import React, { useState, Fragment } from "react";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <ul className="SideBar nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          熱門報導
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          台灣
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          中國
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          全球
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          娛樂
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          商業
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          運動
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          科技
        </a>
      </li>
    </ul>
  );
}
