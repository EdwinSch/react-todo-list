const Buttons = () => {
  return (
    <section className="buttons-container">
      <p className="items-left">5 items left</p>
      <div className="cat-buttons">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
      <button type="button">Clear Completed</button>
    </section>
  );
};

export default Buttons;
