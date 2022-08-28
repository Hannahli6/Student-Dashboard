import "./App.css";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import Music from "./components/Music/Music";
import Notes from "./components/Notes/Notes";
import Icons from "./components/Icons/Icons";
import Timer from "./components/Timer/Timer";
import Task from "./components/Task/Task";

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
          <Music />
          <Notes />
          <Icons />
          <Video></Video>
          <Timer></Timer>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;

