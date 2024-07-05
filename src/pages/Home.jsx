import React from "react";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <section className="flex justify-between gap-6 items-center px-32">
      <Welcome className='max-w-xl'/>
      <Projects />
    </section>
  );
}

export default Home;
