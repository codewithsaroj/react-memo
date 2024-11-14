import DebouncingExample from "./components/DebouncingExample";
import Parent from "./components/Parent";
import ThrottlingExample from "./components/ThrottlingExample";

function App() {
  return (
    <div className="App">
      <Parent />
      <hr />
      <ThrottlingExample />
      <hr />
      <DebouncingExample />
    </div>
  );
}

export default App;
