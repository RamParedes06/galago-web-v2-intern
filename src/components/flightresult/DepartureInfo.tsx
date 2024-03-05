import "../../styles/flightresult.scss";
function DepartureInfo() {
  return (
    <div>
      <div className="return-flight-container d-flex justify-content-between align-items-center ">
        <div className="return-flight ">
          <p className="text-grey">Select your departure flight</p>
          <h1>
            Manila <span>MNL</span> to Cebu <span>CEB</span>
          </h1>
          <p className="text-grey">Showing 123 results</p>
        </div>

        <div className="sort-by">
          <p>
            Sort by: <span>Best Overall</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepartureInfo;
