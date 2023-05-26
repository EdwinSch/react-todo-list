import SortButtons from "./SortButtons";

const Footer = () => {
  return (
    <footer>
      <p className="items-left">5 items left</p>
      <div className="toggle-hide toggle-show">
        <SortButtons />
      </div>
      <button type="button">Clear Completed</button>
    </footer>
  );
};

export default Footer;
