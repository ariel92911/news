import React, { useState, Fragment } from "react";
import "./Home.scss";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import Content from "../content/Content";
import Footer from "../footer/Footer";

const Section = ({ getName }) => {
  console.log("Re-render should not be triggered on click");
  return <div>{getName()}</div>;
};

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dear candidate");

  const getName = () => {
    return `Hi ${name} , welcome to Meepshop`;
  };
  return (
    <div>
      <Header />
      <div className="main">
        <SideBar />
        <Content />
      </div>
      {/* <h1 className="Todo">I am a Home component</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Section getName={getName} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <Footer />
    </div>
  );
}
