import SortButtons from "./SortButtons";

const Footer = ({ items, clearList }) => {
  return (
    <footer>
      <p className="items-left">{items.length} items left</p>
      <div className="inner-sort-buttons">
        <SortButtons />
      </div>
      <button type="button" onClick={clearList} className="text-button">
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
