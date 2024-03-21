import React from "react";
import googleIcon from "../../assets/google.svg";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";
import instaIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className=" mb-10">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn my-3 btn-outline flex w-full items-center gap-3">
          <img className="w-2/12" src={googleIcon} alt="" />
          Login With Google
        </button>
        <button className="btn my-3 btn-outline flex w-full items-center gap-3">
          <img className="w-2/12" src={githubIcon} alt="" />
          Login With Github
        </button>
      </div>

      {/* find use section */}

      <div className=" mb-10">
        <h2 className="text-2xl font-bold">Find Us On</h2>
        <div className="my-4">
          <a
            href=""
            className="flex w-full p-3 border rounded-t-lg items-center gap-3"
          >
            <img className="w-2/12" src={facebookIcon} alt="" />
            Facebook
          </a>
          <a href="" className="flex w-full p-3 border-x items-center gap-3">
            <img className="w-2/12" src={twitterIcon} alt="" />
            Twitter
          </a>
          <a
            href=""
            className="flex w-full p-3 border rounded-b-lg items-center gap-3"
          >
            <img className="w-2/12" src={instaIcon} alt="" />
            Instagram
          </a>
        </div>
      </div>

      {/* q zone  */}

      <div className=" mb-10">
        <h2 className="text-2xl font-bold">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
