import { CurrentUserLoader } from "./CurrentUserLoader.js";
import { UserInfo } from "./UserInfo.js";

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;
