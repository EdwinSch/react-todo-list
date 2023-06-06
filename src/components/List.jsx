import Footer from "./Footer";

import { AiOutlineClose } from "react-icons/ai";

const List = () => {
  return (
    <section className="list-container">
      <ul className="list">
        {/* start */}
        <li className="item">
          <label htmlFor="checkbox" className="box">
            <input type="checkbox" name="" id="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="flex-container">
            <p>Some item</p>
            <AiOutlineClose className="delete-item" />
          </div>
        </li>
        {/* end */}
      </ul>
      <Footer />
    </section>
  );
};

export default List;
