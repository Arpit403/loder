import React, { useState, useEffect } from 'react';
function Loder(){
        const [seconds, setSeconds] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
          return () => clearInterval(interval);
        }, []);
    return(
        <>
            {
              (seconds<3)?<h1>hii</h1>:<h1>hello</h1>
            }
        </>
    );
}

export default Loder;