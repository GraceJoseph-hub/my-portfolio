import React from "react";
import Title from "../Title/Title";

const Welcome = ({ className }) => {
  return (
    <section className={` ${className}`}>
      <Title text="Welcome " className="mb-2" />
      <p className="lg:mt-5 smallBP:text-center lg:text-center text-sm lg:text-lg border-l-2 border-[#FFc94b] px-4">
        My name is Joseph Chioma Grace, a software engineer based in Lagos
        State, Nigeria. I have hands-on experience with React, Next.js,
        TypeScript, and Tailwind CSS, and have worked on projects ranging from
        e-commerce applications with API integrations and Context API for state
        management to static websites. I’m passionate about building
        cutting-edge, pixel-perfect, and user-friendly interfaces with a focus
        on intuitive user experiences. In addition to my frontend expertise, I
        am currently expanding my skills by learning PHP to deepen my
        understanding of backend development and become a more versatile
        developer. I am actively seeking a frontend/fullstack developer role
        where I can contribute to dynamic projects, grow professionally, and
        continue learning in a collaborative environment.
      </p>
    </section>
  );
};

export default Welcome;
