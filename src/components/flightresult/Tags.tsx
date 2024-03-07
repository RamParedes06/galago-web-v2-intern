import "../../styles/flightresult.scss";
import percentage from "../../resources/flightresults/percentage_icon.png";

function Percentage() {
  return (
    <div className="percentage">
      <img src={percentage} alt="percent_icon" />
      <p>100%</p>
    </div>
  );
}

function Cheapest() {
  return (
    <div className="cheapest">
      <p>Cheapest</p>
    </div>
  );
}

function Fastest() {
  return (
    <div className="fastest">
      <p>Fastest</p>
    </div>
  );
}

export { Percentage, Cheapest, Fastest };
