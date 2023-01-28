import React from "react";
import Audiophile from "../images/client-audiophile.svg";
import Databiz from "../images/client-databiz.svg";
import Maker from "../images/client-maker.svg";
import Meet from "../images/client-meet.svg";

function Hero() {
  return (
    <main className="hero h-[90vh] w-screen">
      <div className="hero-content h-full w-full flex-col-reverse lg:flex-row gap-8 lg:gap-4">
        {/* Info Section */}
        <section className="h-[90%] w-full p-6 flex flex-col justify-around items-center lg:items-start gap-8">
          <div className="flex flex-col items-start translate-y-5">
            <h1 className="text-7xl font-bold text-primary hidden lg:block">
              Make
            </h1>
            <h1 className="text-3xl lg:text-7xl font-bold text-primary">
              <span className="lg:hidden">Make </span>remote work
            </h1>
          </div>
          <p className="text-secondary lg:w-[70%] lg:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.{" "}
          </p>
          <button className="btn btn-outline bg-primary capitalize text-neutral hover:bg-white hover:border-primary hover:text-primary">
            learn more
          </button>
          <div className="w-full flex mt-12 justify-between lg:gap-10 lg:justify-start">
            <img src={Databiz} alt="databiz" className="h-[20px] lg:h-[25px]" />
            <img
              src={Audiophile}
              alt="audiophile"
              className="h-[20px] lg:h-[25px]"
            />
            <img src={Meet} alt="meet" className="h-[20px] lg:h-[25px]" />
            <img src={Maker} alt="maker" className="h-[20px] lg:h-[25px]" />
          </div>
        </section>
        {/* Banner */}
        <section className="h-[90%] w-full p-0 bg-hero-mobile bg-contain bg-no-repeat bg-center lg:bg-hero-desktop"></section>
      </div>
    </main>
  );
}

export default Hero;
