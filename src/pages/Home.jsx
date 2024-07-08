import React from "react";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <section className="flex px-6 lg:gap-20 medium:mb-8 lg:justify-center flex-wrap items-top lg:px-32 lg:pt-10">
      <Welcome className="w-full smallBP:px-6 lg:max-w-xl mb-4" />
      <Projects className="smallBP:px-6" />
    </section>
  );
}

export default Home;
