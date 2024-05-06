import "./App.css";
import FunctionCompFirst from "./component/functionCompFirst/FunctionCompFirst";
import FunctionCompSecond from "./component/functionCompSecond/FunctionCompSecond";
import ClassComponentFirst from "./component/classComponentFirst/ClassComponentFirst";
import ClassComponentSecond from "./component/classComponentSecond/ClassComponentSecond";

function App() {
  const users = [
    { name: "Ivana", age: 35 },
    { name: "Ivan", age: 18 },
    { name: "Matej", age: 38 },
    { name: "Luka", age: 20 },
  ];

  return (
    <div>
      <FunctionCompFirst users={users[0]} />
      <FunctionCompSecond users={users[1]} />
      <ClassComponentFirst users={users[2]} />
      <ClassComponentSecond users={users[3]} />
    </div>
  );
}



export default App;
