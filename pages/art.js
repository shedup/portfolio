import dynamic from "next/dynamic"; // Import dynamic from Next.js
import Image from "next/image";
import React from "react";
import p5js from "../public/static/p5js.svg";

const Sketch = dynamic(() => import("../components/Sketch"), {
  ssr: false,
});
const Nav = dynamic(() => import("../components/Nav"), {
  ssr: false,
});

const art = () => {
  return (
    <div>
      <Nav />
      <hr className="mt-4" />
      <div className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-6xl my-24 mt-24 ">
          Some generative art created by &nbsp;
        </h1>
        <a href="https://p5js.org/" target="_blank">
          <Image src={p5js} className="" />
        </a>
      </div>
      <Sketch />
    </div>
  );
};

export default art;
