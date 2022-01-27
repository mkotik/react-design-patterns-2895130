import { SplitScreen } from "./SplitScreen";
import { ThreeWaySplit } from "./ThreeWaySplit";

const Left = ({ name }) => {
  return <h1 style={{ backgroundColor: "green", margin: "0" }}>{name}</h1>;
};

const Right = ({ age }) => {
  return <h1 style={{ backgroundColor: "red", margin: "0" }}>{age}</h1>;
};

const Bottom = ({ location }) => {
  return <h2 style={{ backgroundColor: "orange", margin: "0" }}>{location}</h2>;
};

function App() {
  // Passing component in as children instead of props is more "programmer friendly"
  // it also allows us to pass props directly into the child components, whereas otherwise we would have to pass props into the parent first, then the children
  return (
    <ThreeWaySplit leftWeight={1} rightWeight={6}>
      <Left name="Marat" />
      <Right age="24" />
      <Bottom location="Halfmoon" />
    </ThreeWaySplit>
  );
}

export default App;
