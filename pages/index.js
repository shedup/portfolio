import React from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaArrowCircleUp } from "react-icons/fa";

const Nav = dynamic(() => import("../components/Nav"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <Nav id="top" />
      {/* Main page */}
      <section className="h-full my-24 ml-4 lg:my-64 lg:ml-16">
        <h1 className="text-3xl lg:text-6xl ">Tenzin Chaksam</h1>
        <h2 className="text-6xl lg:text-9xl mt-10">Software Engineer.</h2>
      </section>

      <div className="flex my-24 items-center justify-center">
        <hr className="w-4/5 text-center" />
      </div>

      {/* About */}

      <section
        id="about-section"
        className="h-full my-26 ml-4 lg:my-64 lg:ml-16"
      >
        <h1 className="mb-6 text-4xl lg:text-6xl ">About</h1>
        <p className="text-base lg:text-2xl w-4/5">
          I am helping clients and organizations build their web applications by
          proficiently navigating both front-end and back-end development. From
          designing visually appealing user interfaces to implementing scalable
          and robust software architectures, I contribute to the entire
          application development lifecycle to ensure the successful creation of
          comprehensive and efficient solutions.
        </p>
        <div className="my-12 md:my-18 lg:my-24">
          <hr className="w-4/5 text-center" />
        </div>
        <div className="ml-0 sm:flex justify-between container mx-auto ">
          <div>
            <h1 className="mb-6 text-2xl lg:text-6xl ">Let's Connect!</h1>
            <div className="flex w-1/3 justify-between">
              <a
                className="inline mr-2 md:mr-8 w-20"
                href="https://github.com/shedup"
                target="_blank"
              >
                <IoLogoGithub size={"5em"} />
              </a>
              <a
                className="inline mx-2 md:mx-8 w-20"
                href="https://www.linkedin.com/in/shedup/"
                target="_blank"
              >
                <FaLinkedin size={"5em"} />
              </a>
              <a
                className="inline mx-2 md:mx-8 w-20"
                href="mailto:chaksamt@gmail.com"
              >
                <MdOutlineEmail size={"5em"} />
              </a>
            </div>
          </div>
          {/* <div className="my-4 mt-12 sm:mt-0 mr-10 ">
            <h1 className="text-2xl lg:text-6xl ">My resume</h1>
            <div className="flex w-1/3 justify-between">
              <a className="inline w-20" href="/">
                <IoDocumentText size={"5em"} />
              </a>
            </div>
          </div> */}
        </div>
        <div className="my-12 md:my-18 lg:my-24">
          <hr className="w-4/5 text-center" />
        </div>
      </section>

      <section
        id="projects-section"
        className="h-full my-26 mx-4 lg:my-56 lg:ml-16"
      >
        <h1 className="mb-6 text-4xl lg:text-6xl pt-10">Projects</h1>
        <a href="https://bodja.org" target="_blank">
          <section className="py-20 border-t-2 border-b-2 border-gray-500">
            <h2 className="text-2xl lg:text-4xl">Bodja</h2>
            <p>E-Commerce Website for Bodja Podcast</p>
          </section>
        </a>
        <a href="https://passangholdings.com" target="_blank">
          <section className="py-20 border-t-2 border-b-2 border-gray-500">
            <h2 className="text-2xl lg:text-4xl">Passang Holdings</h2>
            <p>An investment portfolio with blog posts.</p>
          </section>
        </a>
      </section>

      {/* The end.*/}
      <div className="flex justify-center bottom-4 sticky ">
        <a href="#top" className="">
          <FaArrowCircleUp size={"4em"} />
        </a>
      </div>
    </div>
  );
};

export default Home;
