import React, { useState, useEffect } from 'react';

const Breathe = () => {
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathing((prevBreathing) => !prevBreathing);
    }, 3000); // Interval set to 4 seconds (4000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className={`w-20 h-20 rounded-full bg-blue-500 transition-transform duration-1000 ease-in-out ${breathing ? 'scale-125' : 'scale-75'}`}></div>
      <div className="mt-2 text-lg font-bold">{breathing ? 'Breathe out' : 'Breathe in'}</div>
    </div>
  );
};

export default Breathe;
