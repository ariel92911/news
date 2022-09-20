import React, { useState, Fragment } from "react";
import "./Content.scss";
import axios from "axios";

const data = [];

axios(
  "https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79"
)
  .then((response) => {
    data = response.data.articles;
    console.log("data", response);
  })
  .catch((error) => console.log(error));

export default function Content() {
  const [articles, setArticles] = useState(data);

  const Card = (props) => {
    return (
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="Content">
      {/* {data.map((item, index) => (
        <Card key={index} data={item} />
      ))} */}
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
