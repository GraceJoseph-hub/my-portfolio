import React from 'react'

const Title = ({text, className}) => {
  return (
    <div className={`lg:text-6xl text-3xl font-bold text-[#FFc94b] ${className}`}>
      {text}
    </div>
  );
}

export default Title