import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UCSB STUDENT",
          "CODING ENTHUSIAST",
          "EXERCISE LOVER",
          "ALL OF THE TECHNICAL KEYWORDS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
