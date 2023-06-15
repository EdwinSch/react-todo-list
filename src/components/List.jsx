import Footer from "./Footer";

import { AiOutlineClose } from "react-icons/ai";

const List = ({ items, clearList, removeItem }) => {
  // check for zero items
  if (items.length === 0) {
    return (
      <section className="list-container">
        <p className="empty-list">No items on the list</p>
      </section>
    );
  }

  // list
  return (
    <section className="list-container">
      <ul className="list">
        {items.map((item) => {
          const { id, name, completed } = item;
          // console.log(item);
          return (
            <li className="item" key={id}>
              <label htmlFor="checkbox" className="box">
                <input type="checkbox" name="" id="checkbox" />
                <span className="checkmark"></span>
              </label>
              <div className="flex-container">
                <p>{name}</p>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="delete-item"
                >
                  <AiOutlineClose />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Footer items={items} clearList={clearList} />
    </section>
  );
};

export default List;
