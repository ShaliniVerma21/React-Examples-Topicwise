import React from "react";

function Person({ data }) {
  return (
    <div>
      <li>
        I am {data.name}. I know {data.skill}.
      </li>
    </div>
  );
}

export default Person;