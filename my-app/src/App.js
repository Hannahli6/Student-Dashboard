import "./App.css";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import Music from "./components/Music/Music";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <Nav />
        <div className="grid">
          <div className="calendar widgets">
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </div>
          <div className="goal widgets"></div>
          <div className="graph widgets"></div>
          <Music className="music widgets" />
          <div className="todo widgets"></div>
          <div className="icons widgets"></div>
          <Video></Video>
          <Timer></Timer>
          <div className="task widgets"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

