import { useState } from "react";

export default function ListManagement() {

//Global state
  const [items, setItems] = useState([]);

//handler function that takes item as a parameter
  function handleAddItems(item) {
  
  //setter function that returns a new array with elements from current state with a new item  
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <Header />
      <Nav handleAddItems={handleAddItems} /> {/*passing handleAddItems as props*/}
      <ListArea items={items} /> {/*passing items as props*/}
      <Footer items={items} />	{/*passing items as props*/}
    </div>
  );
}

function Header() {
  return <h2>Non-fiction Books List</h2>;
}

function Nav({ handleAddItems }) {
  //Local state function
  const [name, setName] = useState("");
  
  //create a handler function that is triggered by Add button
  const handleAddButtonClick = () => {
    //creating a newItem object with name and id properties
    const newItem = { name, id: Date.now() };

    //passing the newItem object into the handler function as an argument
    handleAddItems(newItem);
    // Reset the input field after adding the item
    setName("");
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </>
  );
}

//ListArea component recieving items as props from global state

function ListArea({ items }) {
  return (
    <>
      <ul>
      {/*mapping over items array to get individual item as list items*/}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

//Footer component recieving items as props from global state

function Footer({ items }) {
  return (
    <>
      {items.length !== 0 ? (
        <p>You have {items.length} items in your cart</p>
      ) : (
        <p>You can start adding items to your list</p>
      )}
    </>
  );
}