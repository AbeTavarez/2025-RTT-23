import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import ContentSwitcher from "./components/ContentSwitcher/ContentSwitcher";
import SkillList from "./components/SkillList/SkillList";
import Toggler from "./components/Toggler/Toggler";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <>
      <CharacterCounter />
      <hr />
      <Toggler />
      <hr />
      <ContentSwitcher />
      <hr />
      <SkillList />
      <hr />
      <UserList />
    </>
  );
}

export default App;
