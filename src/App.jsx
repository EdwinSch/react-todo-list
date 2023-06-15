import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import SortButtons from "./components/SortButtons";

import testdata from "./testdata";

import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  //init list
  const [items, setItems] = useState(testdata);
  // console.log(items);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <main>
      <Header />
      <Input addItem={addItem} />
      <List items={items} clearList={clearList} />
      <div className="outer-sort-buttons">
        <SortButtons />
      </div>
    </main>
  );
}

export default App;
