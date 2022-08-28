import "./Goal.css";

const Goal = () => {
  return (
    <div className="goal widgets">
      <h1 className='goal-title'>Goals</h1>
      <div className="goals-wrapper">
        <div className="goal-text-wrapper">
          <textarea className="goal-text" defaultValue="Complete the Fullstack Course"></textarea>
          <input type="range" className="styled-slider slider-progress" min="1" max="100" defaultValue="20"/>
        </div>
        
        <div className="goal-text-wrapper">
          <textarea className="goal-text" defaultValue="Prepare to run a marathon"></textarea>
          <input type="range" className="styled-slider slider-progress"  min="1" max="100" defaultValue="90"/>
        </div>

        <div className="goal-text-wrapper">
          <textarea className="goal-text" defaultValue="Get my new driver's license"></textarea>
          <input type="range" className="styled-slider slider-progress"  min="1" max="100" defaultValue="70"/>
        </div>
      </div>
    </div>
  );
};

export default Goal;
