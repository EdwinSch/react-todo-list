import Buttons from "./Buttons";

const List = () => {
  return (
    <section className="list-container">
      <ul className="list">
        <li className="item">
          <input type="checkbox" name="" id="" />
          Some item
        </li>
        <li className="item">
          <input type="checkbox" name="" id="" />
          Some item
        </li>
      </ul>
      <Buttons />
    </section>
  );
};

export default List;
