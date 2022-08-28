import "./Goal.css";

const Goal = () => {
  return (
    <div className="goal widgets">
      <h2>Goal</h2>
      <div className="goals-wrapper">
        <div className="goal-text-wrapper">
          <p contentEditable="true" >Complete the Fullstack Course</p>
          <input type="range" className="styled-slider slider-progress"/>
        </div>
        <div className="goal-text-wrapper">
          <p contentEditable="true" >Complete the Fullstack Course</p>
          <input type="range" className="styled-slider slider-progress"/>
        </div>
      </div>
    </div>
  );
};

export default Goal;
