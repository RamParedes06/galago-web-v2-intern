import { Link } from "react-router-dom";
import "../styles/termsconditions.scss";

const TermsAndConditions = () => {
  return (
    <>
      <div className="terms-header d-flex justify-content-between align-items-center">
        <h1 className="heading-large-bold">Terms and Condition</h1>
        <div className="d-flex gap-4">
          <Link to="/help-center">
            <p className="text-decoration-none">Help Center</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
