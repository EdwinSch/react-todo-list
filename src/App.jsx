import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import SortButtons from "./components/SortButtons";

function App() {
  return (
    <main>
      <Header />
      <Input />
      <List />
      <div className="outer-sort-buttons">
        <SortButtons />
      </div>
    </main>
  );
}

export default App;
