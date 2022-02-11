import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b="Sean" />
    </>
  );
}

export default App;
