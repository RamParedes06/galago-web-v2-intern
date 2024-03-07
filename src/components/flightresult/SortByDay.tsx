import { useState } from "react";
import "../../styles/flightresult.scss";
import ButtonComponent from "../ui/ButtonComponent";

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
  {
    date: "Thu, Aug 31",
    price: "PHP 1,600.00",
  },
  {
    date: "Fri, Sept 1",
    price: "PHP 1,600.00",
  },
  {
    date: "Sat, Sept 2",
    price: "PHP 1,600.00",
  },
];

function SortByDay() {
  //? Reference from herehttps://stackoverflow.com/questions/68873876/how-do-i-add-next-and-previous-buttons-to-my-react-slideshow-website
  const [current, setCurrent] = useState(0);
  const totalCards = daysData.length;
  const cardsPerPage = 5;

  function nextSlide() {
    setCurrent((prevCurrent) => (prevCurrent + 1) % totalCards);
  }

  function prevSlide() {
    setCurrent((prevCurrent) => (prevCurrent - 1 + totalCards) % totalCards);
  }

  const startIndex = current;
  const endIndex = (startIndex + cardsPerPage) % totalCards;
  const sortedDays =
    endIndex > startIndex
      ? daysData.slice(startIndex, endIndex)
      : [...daysData.slice(startIndex), ...daysData.slice(0, endIndex)];

  return (
    <div className="sort-day-container">
      <ButtonComponent
        buttonText="<"
        onClick={prevSlide}
        className="btn-transparent"
      />

      {sortedDays.map((day, index) => (
        <div className="day" key={index}>
          <p>{day.date}</p>
          <h1>{day.price}</h1>
        </div>
      ))}
      <ButtonComponent
        buttonText=">"
        onClick={nextSlide}
        className="btn-transparent"
      />
    </div>
  );
}

export default SortByDay;
