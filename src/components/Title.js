import React from "react";

function Title({ children, id }) {
    return (
       <h1
          id={id && id}
          className="text-2xl font-dosis font-bold mb-10">       
          {children}
       </h1>

    )
 }
 
 export default Title;