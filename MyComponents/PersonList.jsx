import React from 'react'
import Person from './Person'
function PersonList(props) {
    let data = [
      {
        id: 1,
        name: "Saish",
        skill: "React",
      },
      {
        id: 2,
        name: "Pratik",
        skill: "PHP",
      },
      {
        id: 3,
        name: "Prafulla",
        skill: "Java",
      },
      {
        id: 4,
        name: "Jyoti",
        skill: "Python",
      },
      {
        id: 5,
        name: "Kavya",
        skill: "Data Science",
      },
    ];
    let list = data.map((data) => <Person data={data} />);
    //let list = data.map((data) => <Person key={data.id} data={data} />);

    return (
        <div>
          <h1>Key list mapping</h1>
          <ul>{list}</ul>
        </div>
    );
  }
  
  export default PersonList;