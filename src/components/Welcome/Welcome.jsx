import React from 'react'
import Title from '../Title/Title';

const Welcome = ({className}) => {
  return (
    <section className={` ${className}`}>
      <Title text="Welcome " className="mb-2"/>
      <p className="lg:mt-5 text-sm lg:text-lg border-l-2 border-[#FFc94b] px-4">
        My name is Joseph Grace, a frontend developer based in Ibadan city, Oyo
        State, Nigeria. I have hands-on experience in React, Next.js,
        TypeScript, and Tailwind, working on projects ranging from e-commerce
        applications with API integrations and Context API for state management
        to static applications. I am passionate about creating cutting-edge,
        pixel-perfect, and beautiful interfaces with intuitively implemented UX.
        Eager to grow and enhance my skills, I am currently seeking a junior
        developer role to contribute to dynamic projects and achieve
        professional growth.
      </p>
    </section>
  );
}

export default Welcome