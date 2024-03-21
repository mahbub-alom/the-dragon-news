import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, details, image_url, title, total_view } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-16">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          {
            details.length >200 ? 
            <p>{details.slice(0,200)} <Link to={`news/${_id}`} className="text-blue-500">Read More....</Link></p>
            :
            <p>{details}</p>
          }
      
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
