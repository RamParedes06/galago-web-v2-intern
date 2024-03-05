import "../../styles/flightresult.scss";

const daysData = [
  {
    date: "Sat, Aug 26",
    price: "PHP 1,600.00",
  },
  {
    date: "Sun, Aug 27",
    price: "PHP 1,600.00",
  },
  {
    date: "Mon, Aug 28",
    price: "PHP 1,600.00",
  },
  {
    date: "Tue, Aug 29",
    price: "PHP 1,600.00",
  },
  {
    date: "Wed, Aug 30",
    price: "PHP 1,600.00",
  },
];

function SortByDay() {
  return (
    <div className="sort-day-container">
      {daysData.map((day) => (
        <div className="day">
          <p>{day.date}</p>
          <h1>{day.price}</h1>
        </div>
      ))}
    </div>
  );
}

export default SortByDay;
