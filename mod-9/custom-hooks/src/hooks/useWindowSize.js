import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // add event lister
    window.addEventListener("resize", handleResize);
    
    return () => {
        // remove event lister
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export default useWindowSize;
