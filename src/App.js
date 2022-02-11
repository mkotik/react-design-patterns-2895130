import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWrappedData = withUser(UserInfoWrapped, 123);

function App() {
  return (
    <>
      <UserInfoWrappedData />
      <UserInfoForm />
    </>
  );
}

export default App;
