const SortButtons = () => {
  return (
    <div className="sort-buttons-container">
      <button type="button" className="text-button">
        All
      </button>
      <button type="button" className="text-button">
        Active
      </button>
      <button type="button" className="text-button">
        Completed
      </button>
    </div>
  );
};

export default SortButtons;
