import Buttons from "./Buttons";

import { AiOutlineClose } from "react-icons/ai";

const List = () => {
  return (
    <section className="list-container">
      <ul className="list">
        <li className="item">
          <input type="checkbox" name="" id="" />
          <div className="flex-container">
            <p>Some item</p>
            <AiOutlineClose className="delete-item" />
          </div>
        </li>
        <li className="item">
          <input type="checkbox" name="" id="" />
          <div className="flex-container">
            <p>Some item 2</p>
            <AiOutlineClose className="delete-item" />
          </div>
        </li>
      </ul>
      <Buttons />
    </section>
  );
};

export default List;
