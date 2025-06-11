import Counter from "./components/Counter";
import "./App.css";
import ShowHideMessage from "./components/ShowHideMessage";

function App() {
  return (
    <div className="m-[5%]">
      <h1 className="text-center text-5xl font-bold mb-20">React State</h1>

      <Counter />

      <hr className="my-10"/>

      <ShowHideMessage />
    </div>
  );
}

export default App;
