import React from "react";

function NameList() {
  const data = ["Ironman", "Spiderman", "Batman"];
  let lists = data.map((data, index) => (
    <h2 key={index}>
      {index} {data}
    </h2>
  ));
  return <div>{lists}</div>;
}

export default NameList;