import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import PostFetcher from "./components/PostFetcher/PostFetcher";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <main className="text-center">
      <h1 className="text-5xl font-bold m-10">Task Manager App</h1>
      <RegistrationForm />
      {/* <PostFetcher /> */}
      {/* <Dashboard /> */}
    </main>
  );
}

export default App;
