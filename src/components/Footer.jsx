import SortButtons from "./SortButtons";

const Footer = ({ items }) => {
  return (
    <footer>
      <p className="items-left">{items.length} items left</p>
      <div className="inner-sort-buttons">
        <SortButtons />
      </div>
      <button type="button" className="text-button">
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
