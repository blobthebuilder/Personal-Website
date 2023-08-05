import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UCSB STUDENT",
          "CODING ENTHUSIAST",
          "EXERCISE ADDICT",
          "LOT OF OTHER TECHNICAL KEYWORDS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
