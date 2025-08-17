import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <hr className="text-fuchsia-300" />
      <section className="w-full px-28 my-8">
        <div className="flex items-center justify-between">
          <div className="">
            <Link to="/">
              <p className="md:text-2xl text-xl font-bold text-gradient">
                RESUMIND
              </p>
            </Link>
          </div>
          <div className="">
            <p className="md:text-md text-sm font-semibold text-gradient">
              This Is Just A Learning App
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
