import "./App.css";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import Music from "./components/Music/Music";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
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
          <Music className="music widgets" />
          <div className="todo widgets"></div>
          <div className="icons widgets"></div>
          <Video className="video widgets"></Video>
          <div className="timer widgets"></div>
          <div className="task widgets"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

