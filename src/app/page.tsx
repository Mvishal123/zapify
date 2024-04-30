import React from "react";
import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/scroll-container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#223_100%)]" />
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center">
              <Button
                className="mb-8 flex w-full items-center justify-center gap-4
                rounded-full
                border-t-2
              border-[#4D4D4D] bg-[#1F1F1F] p-8 text-2xl
              text-white/30 transition-all duration-500 hover:bg-white hover:text-black
              hover:shadow-xl hover:shadow-neutral-500 sm:w-fit md:mb-0"
              >
                <span className="goup-hover:to-black bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text  font-sans text-transparent group-hover:bg-gradient-to-r group-hover:from-black md:text-center">
                  Start For Free Today
                </span>
              </Button>
              <h1
                className="
                bg-gradient-to-b from-white to-neutral-600 bg-clip-text 
                font-sans text-5xl font-bold text-transparent md:text-8xl
              "
              >
                Automate your Work With Zapify
              </h1>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default Home;
