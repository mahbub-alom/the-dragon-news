import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div>
      <div className="flex p-4">
        <button className="bg-[#d72050] p-2 rounded">Latest</button>
        <Marquee speed={100} pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee speed={100} pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
