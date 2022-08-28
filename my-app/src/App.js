import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="dashbaord">
        <Nav />

        {/* grid */}
        <div className="grid">
          <div className="calendar widgets">
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </div>
          <div className="goal widgets"></div>
          <div className="graph widgets"></div>
          <div className="music widgets"></div>
          <div className="todo widgets"></div>
          <div className="icons widgets"></div>
          <div className="video widgets"></div>
          <div className="timer widgets"></div>
          <div className="task widgets"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

