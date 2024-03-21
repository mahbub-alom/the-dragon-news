import React from "react";
import RightSideNav from "../Shared/RightSideNav";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import { useParams } from "react-router-dom";

const News = () => {
    const {id}=useParams()
  return (
    <div>
        <Header></Header>
        <NavBar></NavBar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
            <h1>{id}</h1>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
