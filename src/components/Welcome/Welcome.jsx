import React from 'react'

const Welcome = ({className}) => {
  return (
      <section className={`${className}`}>
        <h1 className="text-6xl font-bold">Welcome.</h1>
        <p className="mt-5 text-lg border-l-2 px-4">
          My name is Ian Dunkerley, I'm a front-end developer based in Torquay,
          Devon, UK. I have developed many types of front-ends from well-known
          DJ applications to Ecommerce booking platforms. I'm passionate about
          cutting-edge, pixel-perfect, beautiful interfaces and intuitively
        implemented UX.
        </p>
      </section>
    
  );
}

export default Welcome