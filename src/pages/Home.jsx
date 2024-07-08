import React from "react";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <section className="flex px-6 medium:mb-8 smallBP:flex-col smallBP:justify-center smallBP:items-center smallBP:gap-20 lg:justify-center flex-wrap items-top lg:px-32 lg:pt-10 lg:gap-20">
      <Welcome className="w-full smallBP:p-6 lg:max-w-xl mb-4" />
      <Projects className="smallBP:px-6" />
    </section>
  );
}

export default Home;
