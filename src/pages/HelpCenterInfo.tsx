import React from "react";
import Accordion from "react-bootstrap/Accordion";

type HelpCenterInfoProps = {
  selectedOption: string;
};

const HelpCenterInfo = ({ selectedOption }: HelpCenterInfoProps) => {
  return (
    <div className="helpcenter-content">
      <div></div>
      {selectedOption === "Option 1" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              What services does GalaGO! provide?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Welcome to GalaGO! We’ve got your trip covered. Here’s what we
                can do for you!
              </p>
              <h1>Booking Flights & Hotels</h1>
              <p>
                Explore the world with ease! On our platform, you can book
                flights and hotels anywhere ‘round the world!
              </p>
              <h1>Tours & Bespoke Itineraries</h1>
              <p>
                We’re travel experts in the Philippines! So if you’re seeking an
                adventure on Philippine shores, we can customize tours or curate
                an itinerary to fit your wants and needs! Get in touch so we can
                help you on your journey. We’ve got great rates on hotels, too!
              </p>
              <h1>Travel Insurance (Coming Soon)</h1>
              <p>
                Your safety and ease of travel are important to us! Stay
                tuned—we'll soon be offering travel insurance and other exciting
                features. Follow us on our socials for updates!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              How do I make a booking through GalaGO?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Ready to GalaGO? Book your trip directly on our website :
                https://www.galago.com.ph/"
              </p>
              <p>
                Want a more personalized touch? Our travel desk is always ready
                to provide you with the best deals and packages that suit your
                wants and needs.
              </p>
              <p>
                Stay tuned for the launch of the GalaGO! mobile app for an even
                more convenient booking experience!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              Do you have a mobile app and what features does it offer?{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We don't have an app yet, but not for long! We want to make your
                next adventure as smooth-sailing as can be so we’re currently
                powering up our mobile app with more convenient features. Sit
                tight! The GalaGO! app takes off in late 2023!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>How does GalaGO! work? </Accordion.Header>
            <Accordion.Body id="2">
              <p>
                We're a travel booking platform where you can book flights and
                hotels around the world. Head to our website to get started!
                Need help? Send us a message and our Customer Support team will
                get back to you soon.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 2" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>What are your contact details?</Accordion.Header>
            <Accordion.Body>
              <p>Email us at customersupport@galago.com.ph!</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              How do I make a booking through GalaGO?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Need help? Our customer service team is available from Monday to
                Saturday, 9am to 6pm. You can reach out to us with any queries,
                concerns, or requests you may have.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              How can I contact you for assistance during my trip?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You can get in touch with our customer service team on Facebook
                Messenger, or email at customersupport@galago.com.ph!
              </p>
              <p>
                Please reach out to us with any queries, concerns, or questions
                you may have.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 3" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>What tours do you offer?</Accordion.Header>
            <Accordion.Body>
              <p>
                If you’re on the GalaGO! booking platform, you should see the
                room capacity indicated in your booking!
              </p>
              <p>
                We’d love to help you plan your next unforgettable journey. Just
                get in touch with our friendly travel desk to book! Shoot us an
                email at customersupport@galago.com.ph!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              How many travelers can I book per reservation?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                If you’re on the GalaGO! booking platform, you should see the
                room capacity indicated in your booking!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              Is it possible to book for large groups or corporate events?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Of course! The more, the merrier, right? To make a booking for
                large groups, please get in touch with our team at
                customersupport@galago.com.ph or use the Contact Form on our
                website.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 4" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              How do I know if my booking is confirmed?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                All set and booked? Once your payment is successfully processed,
                keep an eye out for your booking status update on our website.
                Please check your email, too, where we’ll send a confirmation
                email with all your details. Don’t forget to check your spam
                folder, just in case our email takes an unexpected detour!
              </p>
              <p>
                Rest easy, your travel plans are locked and ready before you
                GalaGO!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              Can I cancel my booking? What’s your refund and cancellation
              policy?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We understand plans can change! With flights, our refund policy
                depends on the booking class and fare rules. As for hotels,
                we’ve covered with refund and cancellation policies clearly
                outlined during the booking process.
              </p>
              <p>
                Just remember to give those policies a double or even
                triple-check before hitting that Confirm button! We’ve made sure
                you have all the information you need to make your travel plans.
                Your satisfaction is our top priority!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
              How can I keep track of my past and upcoming bookings?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Keep tabs on your next adventure right on our website! Head to
                the ‘My Bookings’ section to easily manage and view your past
                and upcoming bookings in one convenient spot.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 5" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              What payment methods do you accept?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We accept debit/credit cards and e-wallets (GCash, Maya), as
                well as bank transfers (UnionBank, BDO, BPI).
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>Do you accept cash payments?</Accordion.Header>
            <Accordion.Body>
              <p>
                Oops, we don't do cash, but we’ve got plenty other convenient
                payment options! We gladly accept debit/credit cards, e-wallets
                (GCash, Maya), and bank transfers (UnionBank, BDO, BPI).
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              How do I use promo codes on GalaGO?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Got a GalaGO! promo code? Save more and travel more with these
                simple steps!
              </p>
              <p>
                1. During the checkout process, keep an eye out for the "Enter
                Promo Code" box.
              </p>
              <p>2. Pop in your promo code and hit "Apply."</p>
              <p>3. Voila! Discounts should apply automatically.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
              Do you offer any package deals or discounts?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Sure we do! Check out our Promotions section for current deals
                and packages.
              </p>
              <p>
                Want a more personalized touch? We'd love to custom-create a
                package that caters to your unique travel needs. Get in touch
                with our travel booking team at customersupport@galago.com.ph
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>
              Are your prices inclusive of all fees and taxes?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Of course! Travel may be full of fun surprises, but we hate the
                shock of hidden charges! That’s why we’ve clearly outlined all
                charges in your booking. What you see is what you get, and what
                you pay is for sure the final amount.
              </p>
              <p>
                However, do keep in mind that travel taxes may apply. So always
                double-check the policy outlined in your booking!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className="item">
            <Accordion.Header>
              Can you provide an invoice for my booking transactions?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Need receipts? We got you! Send us a message or email
                customersupport@galago.com.ph and include your name, booking
                confirmation number, and a copy of your booking reservation.
                We’ll send an invoice straight to your inbox right away!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6" className="item">
            <Accordion.Header>
              Do you offer price matching if I find a better deal elsewhere?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                While we’re all about delivering the best deals, unfortunately,
                we can’t offer price matching at the moment. But don’t sweat.
                Check out our Promotions section for our latest and hottest
                deals!
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 6" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              How safe are my personal data and payment details on the GalaGO!
              platform?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Your security is our top priority. Our website uses secure
                encryption, and we have a PCI DSS-certified payment gateway to
                ensure the utmost protection of your personal information and
                payment details.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 7" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              Do you offer travel insurance or protection plans?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Can’t GalaGO! without your gadgets, right? We know how much your
                devices mean to you and your adventure. So we’re offering a FREE
                gadget protection plan that covers up to PHP 30,000 for every
                booking.
              </p>
              <p>
                Need an upgrade? We also offer options for monthly or annual
                gadget protection plans.
              </p>
              <p>
                We're bringing more travel insurance options soon! Stay tuned
                for updates as we'll be integrating travel insurance into our
                booking process!
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {selectedOption === "Option 8" && (
        <Accordion>
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              Do you provide assistance for travelers with special needs or
              requests?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Absolutely. We believe in making travel accessible for everyone.
                If you have any special needs or requests, please contact our
                customer service team at customersupport@galago.com.ph and we'll
                do our best to accommodate you.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              Do you offer pet-friendly travel packages?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You bet, but not yet! Just like you, we can’t wait to travel
                with our furry companions! Stay tuned because we’ve got some
                paw-some features and packages coming your way real soon.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
};

export default HelpCenterInfo;
