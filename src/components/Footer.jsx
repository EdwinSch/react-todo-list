import SortButtons from "./SortButtons";

const Footer = () => {
  return (
    <footer>
      <p className="items-left">5 items left</p>
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
