import "./Calendar.css";
import StaticDatePickerLandscape from "./NewCalendar";

const Calendar = () => {
  return (
    <div className="calendar widgets">
      <div className="date-picker">
        <StaticDatePickerLandscape />
      </div>
    </div>
  );
};

export default Calendar;
