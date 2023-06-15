import Footer from "./Footer";

import { AiOutlineClose } from "react-icons/ai";

const List = ({ items }) => {
  // console.log(items);

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
                <AiOutlineClose className="delete-item" />
              </div>
            </li>
          );
        })}
      </ul>
      <Footer items={items} />
    </section>
  );
};

export default List;
