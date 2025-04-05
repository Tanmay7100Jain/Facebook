import "./App.css";
import Header from "./Components/Header";
import Right from "./Components/Right";
import Left from "./Components/Left-side";
import Middle from "./Components/Middle";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row">
        <Left></Left>
        <Middle></Middle>
        <Right></Right>
      </div>
    </>
  );
}

export default App;
