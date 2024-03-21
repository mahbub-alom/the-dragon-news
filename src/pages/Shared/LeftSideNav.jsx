import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("categories.json").then((data) => setCategories(data.data));
  }, []);

  return (
    <div className="space-y-6 p-2">
      <h2 className="text-2xl">All Category: {categories.length}</h2>
      {categories.map((category) => (
        <NavLink
          className="block ml-4 text-xl font-semibold"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
