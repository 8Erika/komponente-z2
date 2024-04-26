import "./App.css";
import ClassComponent from "./component/classComponent/ClassComponent";
import FunctionComp from "./component/functionComp/FunctionComp";

const users = [
  { name: "Ivana", age: 35 },
  { name: "Ivan", age: 18 },
  { name: "Matej", age: 38 },
  { name: "Luka", age: 20 },
];

function App() {
  return (
    <div>
      {users.map((user, index) => (
        <div>
          <FunctionComp name={user.name} age={user.age} />
          <ClassComponent name={user.name} age={user.age} />
        </div>
      ))}
    </div>
  );
}
export default App;
