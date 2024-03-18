import { Footer } from "rsuite";
import "../styles/privacypolicy.scss";
import "../styles/root.scss";
import { Link } from "react-router-dom";
import FooterComponent from "../components/ui/FooterComponent";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-header d-flex justify-content-between align-items-center">
        <h1 className="heading-large-bold ">Privacy Policy</h1>
        <div className="d-flex gap-4">
          {/* <a href="/">Terms and Condition</a> */}
          <Link to="/terms-conditions">
            <p>Terms and Conditions</p>
          </Link>
          <Link to="/help-center">
            <p>Help Center</p>
          </Link>
        </div>
      </div>

      <div className="privacy-container d-flex flex-column gap-4">
        <div>
          <p className="footnote-medium text-secondary">
            Last Update August 29, 2023
          </p>
        </div>
        <div className="privacy-content footnote-medium d-flex flex-column gap-4">
          <p>
            This Privacy Statement describes how we collect, use, disclose, and
            protect your personal information when you use our travel and hotel
            booking website. By using our services, you agree to the policies
            outlined in this Privacy Statement.
          </p>
          <div className="d-flex flex-column gap-4">
            <div className="privacy-group">
              <h1>Information We Collect</h1>
              <p>1. Personal Information</p>
              <li>
                When you make a booking, we collect personal information such as
                your name, contact details, payment information, and travel
                preferences.
              </li>
              <p>2. Booking Details</p>
              <li>
                We collect information related to your flight and hotel
                bookings, including travel dates, destinations, and
                accommodation preferences.
              </li>
              <p>3. Device Information</p>
              <li>
                We may collect information about the device you use to access
                our website, including IP address, browser type, and operating
                system.
              </li>
            </div>

            <div className="privacy-group">
              <h1>How We Use You Your Information</h1>
              <li>
                We use the collected information to facilitate flight and hotel
                bookings, process payments, and provide customer support.
              </li>
              <li>
                Your information helps us customize your experience, including
                showing relevant travel options and providing personalized
                recommendations.
              </li>
              <li>
                Your information helps us customize your experience, including
                showing relevant travel options and providing personalized
                recommendations.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Data Sharing</h1>
              <li>
                We share your personal information with airlines, hotels, and
                other travel service providers to facilitate your bookings.
              </li>
              <li>
                Payment information is securely processed by third-party payment
                processors.
              </li>
              <li>
                We may share aggregated and anonymized data for analytical
                purposes.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Data Security</h1>
              <li>
                We employ industry-standard security measures to protect your
                information from unauthorized access, alteration, or disclosure.
              </li>
              <li>
                Despite our efforts, no online transmission or storage method is
                completely secure. We cannot guarantee absolute security.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Cookies and Tracking</h1>
              <li>
                Our website uses cookies and similar technologies to collect
                information about your browsing behavior. You can control cookie
                preferences through your browser settings.
              </li>
              <li>
                We use cookies for analytics, personalized content, and tracking
                referral sources.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Third-Party Links</h1>
              <li>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                sites.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Your Choices</h1>
              <li>
                You can access, update, or delete your personal information
                through your account settings.
              </li>
              <li>
                You can opt out of marketing communications by following the
                instructions provided in those communications.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Children's Privacy</h1>
              <li>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect or store information from children.
              </li>
            </div>

            <div className="privacy-group">
              <h1>Changes to Privacy Policy</h1>
              <li>
                We may update this Privacy Policy from time to time. The latest
                version will be posted on our website.
              </li>
            </div>
          </div>
          <p>
            By using our flight and hotel booking website, you agree to the
            collection, use, and disclosure of your information as described in
            this Privacy Policy. If you do not agree with these practices,
            please do not use our services.
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default PrivacyPolicy;
