import "./Goal.css";

const Goal = () => {
  return (
    <div className="goal widgets">
      <h1 className='goal-title'>Goals</h1>
      <div className="goals-wrapper">
        <div className="goal-text-wrapper">
          <textarea className="goal-text">Complete the Fullstack Course</textarea>
          <input type="range" className="styled-slider slider-progress"/>
        </div>
        
        <div className="goal-text-wrapper">
          <textarea className="goal-text">Complete the Fullstack Course</textarea>
          <input type="range" className="styled-slider slider-progress"/>
        </div>

        <div className="goal-text-wrapper">
          <textarea className="goal-text">Complete the Fullstack Course</textarea>
          <input type="range" className="styled-slider slider-progress"/>
        </div>
      </div>
    </div>
  );
};

export default Goal;
