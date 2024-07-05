import React from "react";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <section className="flex gap-20 justify-center flex-wrap items-top px-32 lg:pt-10">
      <Welcome className='max-w-xl'/>
      <Projects />
    </section>
  );
}

export default Home;
