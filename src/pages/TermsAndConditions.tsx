import { Link } from "react-router-dom";
import "../styles/termsconditions.scss";
import { useRef } from "react";
import { useState } from "react";

const TermsAndConditions = () => {
  const terms1 = useRef(null);
  const terms2 = useRef(null);
  const terms3 = useRef(null);
  const terms4 = useRef(null);
  const terms5 = useRef(null);
  const terms6 = useRef(null);
  const terms7 = useRef(null);
  const terms8 = useRef(null);
  const terms9 = useRef(null);
  const terms10 = useRef(null);
  const terms11 = useRef(null);
  const terms12 = useRef(null);
  const terms13 = useRef(null);
  const terms14 = useRef(null);
  const terms15 = useRef(null);
  const terms16 = useRef(null);
  const [activeButton, setActiveButton] = useState(0);

  const scrollToSection = (ref: any, buttonNumber: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    if (activeButton !== buttonNumber) {
      setActiveButton(buttonNumber);
    }
  };
  return (
    <>
      <div className="terms-header d-flex justify-content-between align-items-center">
        <h1 className="heading-large-bold">Terms and Condition</h1>
        <div className="d-flex gap-4">
          <Link to="/help-center">
            <p>Help Center</p>
          </Link>
        </div>
      </div>
      <div className="terms-info d-flex flex-column gap-4">
        <div>
          <p className="footnote-medium text-secondary">
            Version 1 • Last Updated August 29, 2023
          </p>
        </div>
        <div className="terms-content">
          <div className="terms-group">
            <div className="terms-intro">
              <p className="intro">
                YOUR USE OF THIS WEBSITE ESTABLISHES A LEGALLY BINDING AGREEMENT
                TO ADHERE TO THESE TERMS AND CONDITIONS. IF YOU DO NOT ACCEPT
                THESE TERMS, IT IS RECOMMENDED THAT YOU LEAVE THIS SITE
                IMMEDIATELY.
              </p>
              <p>
                The www.WalkThePlanet.com site (“Site”) and the Galago! app
                ("App") is managed by WalkThePlanet Inc., including its
                subsidiaries and affiliated companies ("we", "us", "our" or
                “WalkThePlanet”). By accessing and/or using any part of the
                Site, you acknowledge that you have read and understood, and
                agree to the Terms of Use (“Terms”) and other terms and
                conditions in relation to the Site as referred to in these
                Terms. If you do not agree to be bound by these Terms, you may
                not access or use any part of the Site. These Terms constitute a
                binding legal agreement between you as an individual user (“you”
                or “your”) and WalkThePlanet. You must be at least eighteen (18)
                years old to use the Site.
              </p>
              <p>
                Please take note that we may make changes to these Terms at any
                time, including modifications, additions, and deletions. This
                may be necessary to comply with applicable laws or regulations,
                or to reflect any changes in our operational practices. We will
                make reasonable efforts to notify you of any material changes to
                the Site. It is recommended that you check these Terms each time
                you use the Site to ensure that you are aware of the most
                up-to-date version. By continuing to use any part of the Site
                after such changes have been made, you are indicating your
                agreement and consent to be bound by the updated Terms.
              </p>
              <p>
                If you use any of our other services, then your usage is based
                on the submission to and acceptance of the terms and conditions
                applicable to such services, which will be made available to you
                when you use those other services.
              </p>
            </div>
            <div className="terms-text d-flex flex-column">
              <div ref={terms1}>
                <h1>1. SERVICES OFFERED</h1>
                <p>
                  The Site operated by WalkThePlanet is an online platform that
                  enables you to explore various types of transportation
                  services, temporary lodging and accommodation, tickets for
                  tourist attractions, tour packages, experiences, and other
                  services ("Services"). You can make bookings for these
                  services through the Site and App, which are provided by
                  hotels, transportation operators, tourist attraction
                  operators, travel agencies, or other service providers
                  ("Vendors"). By utilizing the Site and App, you can book and
                  purchase airline or other transportation tickets, temporary
                  lodging and accommodation, tourist attraction tickets, tour
                  packages, experiences, tours, or other services, and a
                  confirmation email will be provided to you upon booking.
                  However, we reserve the right to reject bookings in compliance
                  with these Terms
                </p>
                <p>
                  Although we will use our expertise with caution in performing
                  the Services, we do not verify, and do not guarantee, that all
                  information provided by Vendors that is available on the Site
                  is accurate, complete, correct, or the latest available, and
                  we are not responsible for any errors (including placement and
                  typing errors), obstruction (either because of temporary
                  and/or partial, damage, repair or improvement to the Site or
                  otherwise), inaccurate, misleading or false information of
                  Vendors or non-delivery of information by Vendors.
                </p>
                <p>
                  Changes in market conditions or circumstances that occur
                  within a short time frame can lead to discrepancies in the
                  information provided by Vendors that is available on the Site,
                  and causes such information to be inaccurate or not
                  applicable. In case of any problems, please contact
                  WalkThePlanet’s Customer Service and they will assist you.
                </p>
                <p>
                  In providing the Services, we provide an online platform to
                  connect users with Vendors. To the extent permitted by law, we
                  are not responsible or liable for the acts or omissions of a
                  Vendor, and you have sole responsibility for any obligations
                  or liabilities to Vendors. We do not make any representations
                  and should not be construed as making any recommendations or
                  suggestions of the level of service, quality, or rating of the
                  Vendors listed on the Site, and in no event shall we be
                  responsible or liable for any information, content, products,
                  services or other materials provided or made available by
                  Vendors. Vendors may be introduced in the form of different
                  classes based on factors including but not limited to their
                  reviews, ratings or any other factors. The given rating is
                  calculated based on automated algorithms that can be updated
                  and changed as per our discretion.
                </p>
                <p>
                  We reserve the right, to the extent allowed by law, to refuse
                  any user or booking, or cancel a booking confirmation, at our
                  sole discretion and without providing any reasons for such
                  rejection, refusal, or cancellation. The grounds for rejecting
                  or cancelling a user or booking may include, but are not
                  limited to: violation of these Terms, economic or trade
                  sanctions imposed by national or global authorities, embargo,
                  regulation prohibitions, fraud, theft (or suspected or
                  indicated fraud or theft), suspicion of criminal activity,
                  suspicious ordering, unavailability of services by the Vendor,
                  provision of inaccurate, erroneous, or misleading information
                  by the user, credit card communication, information, or
                  transaction issues, inappropriate conduct, threats, insults,
                  refusal to provide information, practical difficulties,
                  communication breakdowns, history of violating these Terms, or
                  being listed on any government or international "blacklists"
                  or "watch lists." We may delete or suspend the account of any
                  user on the Site, either temporarily or permanently, at any
                  time. Users whose accounts have been removed must not attempt
                  to use the Site under a different name or through other users.
                </p>
                <p>
                  In particular cases, we may cancel or reject reservations with
                  respect to real or apparent mistakes, which does not depend on
                  where the error originated. A real or apparent mistake is a
                  fault on the Site (for example, in terms of price) which no
                  reasonable person would consider appropriate or to make
                  business sense. The amount charged shall be reimbursed without
                  further charges in such a case.
                </p>
                <p>
                  Every payment related to the booking or reservation of the
                  Services shall be made directly to WalkThePlanet payment
                  channels. Except where WalkThePlanet is required to hold such
                  payments based on trust for the relevant Vendor pursuant to a
                  separate agreement applicable to the relevant Vendor, all such
                  payments will be the property of WalkThePlanet and amounts
                  will be due and payable to the relevant Vendor when the
                  services to which a payment relates are provided or at any
                  other applicable time required by the relevant Vendor.
                  WalkThePlanet shall not be responsible for the validity of the
                  reservation, if the payment is not being made directly to
                  WalkThePlanet’s bank account or WalkThePlanet payment
                  channels.
                </p>
              </div>
              <div ref={terms2}>
                <h1>2. TRAVEL ADVICE</h1>

                <p>
                  By displaying particular destinations, WalkThePlanet does not
                  represent or warrant that travel to such destinations is
                  advisable or risk-free and WalkThePlanet is not liable for
                  damages or losses that may result from travel to such
                  destinations. Under no circumstances shall WalkThePlanet be
                  liable for any incidents occurring during your trip or your
                  stay. You are personally responsible for the selection of
                  travel, travel route and destination, for the entire duration
                  of your trip. To the extent permitted by law, WalkThePlanet is
                  not responsible for any loss that occurs if you fail to bring
                  the required travel documents, such as your passport,
                  e-ticket, e-voucher, and any other reasons caused by you.
                </p>
                <p>
                  Should you purchase roundtrip tickets under the same Airline
                  Booking Code (Passenger Name Record, abbreviated as PNR), both
                  the departure and return tickets must be used in full, as
                  written in the itinerary of your WalkThePlanet e-ticket. Use
                  of (i) only the departure or the return ticket; or (ii)
                  partial use of any segment of the roundtrip flight, may cause
                  the other ticket to be invalid and not refundable.
                  WalkThePlanet will not be responsible for any consequence
                  resulting from violation of these terms and conditions.
                </p>
                <p>
                  Before finalizing your travel arrangements, it is your sole
                  responsibility to obtain and maintain the necessary and valid
                  travel permits or foreign entry requirements, such as visas or
                  other travel documents, for the country you are traveling
                  from, into, over, or transiting through, in compliance with
                  the applicable laws. WalkThePlanet is not obligated to inform
                  you of the required travel arrangements and permits for you to
                  execute your travel plans and will not be held responsible for
                  any losses or damages resulting from or related to your travel
                  permits.
                </p>
              </div>
              <div ref={terms3}>
                <h1>3. SITE AND APP PROMOTION</h1>

                <p>
                  We may offer lower prices or roll out promotions from time to
                  time. Please note that these may involve different conditions
                  and requirements as it relates to booking and refund policies.
                  Any and all embedded products with WalkThePlanet Services are
                  subject to change without prior notice and can be withdrawn
                  and recanted at the sole discretion of WalkThePlanet. No right
                  is reserved for such products.
                </p>
                <p>
                  If there is any promotion provided directly by a Vendor, then
                  the rights and authority over the promotion will be fully
                  under that Vendor’s separate terms and conditions and will not
                  apply to the reservation conducted through WalkThePlanet.
                </p>
              </div>
              <div ref={terms4}>
                <h1>4. CANCELLATION POLICIES</h1>
                <p>
                  When you make a booking, order, or reservation through the
                  Site, you are acknowledging and agreeing to the terms and
                  conditions of the relevant Vendors, which may include policies
                  on cancellation, absence, and any specific requests you make
                  to them. It is important to carefully review the Vendors'
                  terms and conditions before making a booking, as WalkThePlanet
                  cannot be held responsible for any breaches of these terms and
                  conditions or any issues arising from your specific requests.
                </p>
                <p>
                  WalkThePlanet may withhold or deduct from the refund amount,
                  including through a credit card chargeback, any reasonable
                  costs that were incurred in connection with the cancellation,
                  subject to any legal rights you may have regarding refunds.
                </p>
              </div>
              <div ref={terms5}>
                <h1>5. CHARGES AND REFUNDS</h1>
                <p>
                  The prices listed on the Site are subject to certain
                  conditions and may change based on factors such as
                  availability and length of booking. Additional taxes and
                  charges may apply, such as tips for tour guides and other fees
                  for services outside of those provided by WalkThePlanet. It is
                  your responsibility to confirm the total cost and terms of
                  your booking before receiving a confirmation email. If you
                  cancel before paying in full and such cancellation is allowed
                  by Vendors or WalkThePlanet, you may receive a refund, less
                  any applicable costs incurred by us. For any other
                  cancellations, WalkThePlanet will investigate and verify the
                  booking before offering refunds, which may be initially
                  provided as electronic vouchers. Refunds will be subject to
                  applicable costs incurred by WalkThePlanet and may not be
                  immediate, depending on your initial mode of payment. If you
                  have any questions about the services, you can contact
                  WalkThePlanet Customer Service.
                </p>
                <p>
                  You can contact WalkThePlanet Customer Service for further
                  details on the estimated duration for receiving your refund
                  and we will assist you as best as we can.
                </p>
                <p>
                  WalkThePlanet is not responsible or liable for any cancelled
                  issuing of e-tickets, e-vouchers, or other transactions caused
                  by inaccurate transfer amounts, or exceeding the time limit
                  for transfers or any payment that is not being made directly
                  to WalkThePlanet’s bank account or WalkThePlanet payment
                  channels.
                </p>
              </div>
              <div ref={terms6}>
                <h1>6. ADDITIONAL CHARGES FROM HOTELS</h1>
                <p>
                  The prices for hotel reservations provided through our Site
                  are based on your selections, including the period of stay and
                  number of guests, unless otherwise stated. Prices are per room
                  and per night, and you are responsible for verifying whether
                  your selection and any additional requests or services are
                  reflected in the price displayed on the Site or in the
                  confirmation email. Breakfast is usually not included in the
                  price, and you will be responsible for paying any resort fees,
                  mandatory costs, local taxes, or occupancy charges, unless
                  otherwise stated. It is your responsibility to verify any
                  hotel policies or explanations provided on the Site, and
                  insurance is not included in the price unless otherwise
                  stated. The standard hotel room reservation is for one or two
                  guests, and an additional charge may be required for an extra
                  bed. The hotel may refuse to accept additional guests if not
                  notified in advance.
                </p>
                <p>
                  Please note that some hotels may charge a resort fee and
                  additional charges may be required to use certain services.
                  The resort fee is usually not included in the price, and more
                  information will be included in the hotel's description on the
                  Site. You may also be charged directly by the hotel for
                  services such as energy surcharges, baggage handling fees,
                  newspaper delivery, in-room security costs, travel or tour
                  fees, or cleaning fees under extraordinary circumstances.
                  These additional charges are beyond WalkThePlanet's control.
                </p>
                <p>
                  The Hotel Price typically does not cover optional incidental
                  expenses and personal consumption charges incurred during your
                  stay, such as parking fees, in-room minibar charges, telephone
                  charges, room service, food and beverage costs, special (gala)
                  dinner costs, movie rentals or movies-on-demand, and Internet
                  usage costs. During certain peak holiday seasons, some hotels
                  may require guests to participate in special dinners, such as
                  for New Year's, Christmas, Chinese New Year, and other events.
                  These charges are not included in the room rate, but will be
                  displayed on the booking form. More information can be found
                  under headings such as "Hotel Information", "Booking
                  Requirements", "Cancellation Policy", or similar on the Site.
                  If you are unsure whether a charge is included in the tariff,
                  please contact WalkThePlanet Customer Service for
                  clarification.
                </p>
                <p>
                  Certain hotels may add fees for transport or transfer to and
                  from the airport. This is a common practice for travelling
                  between islands (such as the Maldives), in order to reach the
                  hotel. Such transportation is always governed by the hotel and
                  is offered by or on behalf of the hotel, which is responsible
                  for the transportation service. WalkThePlanet does not arrange
                  any transport and is not responsible for such transport
                  service. You agree that WalkThePlanet is not responsible for
                  the quality, safety, frequency or service level of the
                  transportation services, and for any loss or damage that may
                  result from the use of such transportation services.
                </p>
                <p>
                  Certain jurisdictions may require hotels to directly collect
                  occupancy or local city taxes from guests, and government
                  authorities may also impose additional taxes that the hotel is
                  required to collect directly. You agree to pay any such taxes
                  or costs directly to the hotel when you check out, unless
                  otherwise specified. If you have any inquiries, please contact
                  WalkThePlanet Customer Service for information on any
                  additional costs that may be included in the hotel price.
                </p>
              </div>
              <div ref={terms7}>
                <h1>7. USER ACCOUNT</h1>
                <p>
                  In order to use the Services, you must first create an account
                  and provide us with personal information such as your name,
                  email address, and mobile phone number. You are responsible
                  for providing accurate and up-to-date information and
                  verifying your identity when requested. We will collect, use,
                  disclose, and process your personal information in accordance
                  with the Data Privacy Act of 2012.
                </p>
                <p>
                  You are the only person authorized to use your account, and
                  you agree not to allow anyone else to use it unless permitted
                  by WalkThePlanet. You cannot transfer or assign your account
                  to anyone else. You must maintain the security and
                  confidentiality of your account password and any
                  identification we provide to you. If your password is
                  disclosed, resulting in unauthorized use of your account, any
                  orders received from that unauthorized use will still be
                  considered valid, and we will process those orders.
                  WalkThePlanet will not be responsible for any loss or damage
                  resulting from the misuse of your account.
                </p>
                <p>
                  If you lose control of your account, such as in the event of
                  hacking or theft of your phone, you must immediately notify us
                  so we can temporarily block or deactivate your account. You
                  are responsible for any use of your account and may be held
                  liable for any misuse by others.
                </p>
                <p>
                  We reserve the right to temporarily block, delete, or
                  deactivate your account at our discretion and for any reason,
                  without providing an explanation for such action, as long as
                  it does not affect our obligation to provide any Services you
                  have already purchased, unless we are permitted to cancel
                  those Services under these Terms.
                </p>
                <p>
                  Your account may be blocked, deleted, or deactivated for
                  various reasons, which may include, but are not limited to,
                  the following: violation of these Terms, prohibition in
                  applicable laws or regulations, fraud or theft (or any
                  indication or suspicion of fraud or theft), suspicion of
                  criminal activity, suspicious ordering, providing inaccurate,
                  erroneous or misleading information, inappropriate behavior,
                  making threats or insults, refusing to provide information,
                  practical impediments, communication difficulties or
                  breakdowns, or being listed on any government or international
                  organization's "black lists" or "watch lists."
                </p>
              </div>
              <div ref={terms8}>
                <h1>8. PAYMENT DETAILS AND PROCEDURES</h1>
                <p>
                  Payments are made in the amount and currency as stated, not
                  including bank fees or any other charges by WalkThePlanet.
                </p>
                <p>
                  WalkThePlanet does not collect taxes or levies. If a hotel or
                  city destination charges taxes, those taxes are the
                  responsibility of the user.
                </p>
                <p>
                  For all forms of reservations, you must make payment within
                  the specified time limit. If the payment is not made, then
                  WalkThePlanet reserves the right to cancel all reservations.
                </p>
                <p>
                  For other payment methods such as credit card, you must follow
                  the procedures stated by WalkThePlanet and/or the relevant
                  payment service provider.
                </p>
                <p>
                  After you make full payment, WalkThePlanet will place the
                  order and issue a reservation code, which will be accompanied
                  by but not limited to: Booking Code, Customer Name, Number
                  Booking, Booking Details; and Phone Number / Extension.
                </p>
              </div>
              <div ref={terms9}>
                <h1>9. UNAUTHORIZED TRANSACTIONS AND FRAUD</h1>
                <p>
                  When you book a reservation through the Site, WalkThePlanet
                  will charge your credit card for the full amount at the time
                  of booking and confirmation, and any refunds will be subject
                  to the terms and conditions of the reservation. Before making
                  a reservation, it is important to carefully review the booking
                  details. If a refund is necessary, WalkThePlanet will process
                  it within a reasonable period. In some cases, payment may need
                  to be made directly to the Vendor. We use encryption
                  technology such as but not limited to Transport Layer Security
                  (“TLS”) or Secure Sockets Layer (“SSL”) to protect your credit
                  card information during transit to us. If you suspect that
                  your credit card has been used fraudulently, please notify
                  your bank or credit card issuer immediately. WalkThePlanet
                  cannot be held responsible for any losses resulting from
                  credit card fraud or unauthorized use, unless we are at fault
                  or as required by law.
                </p>
                <p>
                  To make a reservation, you must be at least 18 years old and
                  have legal capacity to make the transaction or have
                  authorization from your legal guardian. You must use a credit
                  or debit card that is issued in your name and ensure that
                  there are sufficient funds to cover the transaction costs.
                  WalkThePlanet may not accept certain credit cards and can add
                  or remove payment methods at our discretion.
                </p>
                <p>
                  In some cases, we may require additional information or
                  verification to confirm your reservation, and reservations are
                  not considered confirmed until you receive a confirmation
                  email with an e-ticket or voucher. Vendors may also implement
                  fraud examination mechanisms during the booking process, and
                  if fraud occurs or is suspected, the booking will be void.
                  WalkThePlanet is not responsible for any cancellations made by
                  Vendors due to fraud. If you choose not to provide additional
                  information, the reservation will not be completed and will be
                  voided.
                </p>
              </div>
              <div ref={terms10}>
                <h1>10. RIGHTS AND OBLIGATIONS</h1>
                <p>
                  These Terms grant the user a limited license to access and use
                  the Site, which cannot be assigned or transferred, to the
                  extent expressly permitted. The Limited License does not
                  confer any other rights or licenses beyond those explicitly
                  stated, and any additional rights or licenses not granted are
                  reserved by WalkThePlanet or third-party owners. The Content
                  available on the Site, including data, text, images, sound,
                  graphics, video, messages, reviews, and other materials, as
                  well as the software infrastructure used to provide such
                  Content, are owned by WalkThePlanet or its suppliers and
                  service providers, including Vendors, as applicable.
                </p>
                <p>
                  You may use the Site to place orders, provided that you do not
                  submit false reservation requests. It is your responsibility
                  to ensure that the payment information you provide is
                  accurate, as well as providing accurate contact information
                  such as email and mailing address.
                </p>
                <p>
                  You agree not to use the Site or the Content for commercial
                  purposes, either directly or indirectly, except for personal
                  use or as otherwise permitted by law. Any actions that violate
                  these Terms are prohibited.
                </p>
                <p>
                  You agree not to modify, copy, distribute, transmit, display,
                  perform, reproduce, publish, license, create derivative works
                  from, transfer, sell or re-sell any information, software,
                  products, or services obtained in connection with the Site,
                  unless you have obtained written consent from WalkThePlanet.
                  Furthermore, you also agree not to:
                </p>
                <div>
                  <p>
                    a. You are not allowed to use the Site or its Content for
                    commercial purposes without obtaining permission from
                    WalkThePlanet.
                  </p>
                  <p>
                    b. Written permission from WalkThePlanet is required to
                    access, monitor, or copy any Content on the Site using
                    technology, software, or any program, whether manually or
                    automatically, for any purpose.
                  </p>
                  <p>
                    c. You must not take any action that could place an
                    unreasonable burden on the Site or Site infrastructure.
                  </p>
                  <p>
                    d. Without the written consent of WalkThePlanet, you may not
                    create a significant link to the Site, including the booking
                    path, for any purpose.
                  </p>
                  <p>
                    e. The reselling, using, copying, monitoring (such as
                    installing spider or scrape programs), displaying,
                    downloading, or performing any Content production, software,
                    products, or services available through the Site for
                    commercial purposes or competition is prohibited.
                  </p>
                  <p>
                    f. Prior written consent is required to reproduce the Site
                    (such as through a "frame" or "mirror") or to set up a part
                    of the Site on any other website.
                  </p>
                  <p>
                    g. It is not permitted to send or store any material through
                    the Site that violates any law, regulation, or rules or that
                    may support unlawful or criminal activities.
                  </p>
                  <p>
                    h. You must not send or store any material (including
                    providing links to other material) that is defamatory,
                    slanderous, false, obscene, threatening, libelous, or
                    otherwise unlawful or tortious.
                  </p>
                  <p>
                    i. Sending spam or other unsolicited messages or causing any
                    nuisance, annoyance, or inconvenience is prohibited.
                  </p>
                  <p>
                    j. Sending or storing any material that may infringe upon
                    the intellectual property or other rights of a particular
                    entity or person, including but not limited to copyrights,
                    patents, trademarks, trade secrets, confidential
                    information, or publications, is not allowed.
                  </p>
                  <p>
                    k. Do not send or store any material in violation of
                    applicable law or that would violate the rights and
                    obligations that exist based on the contractual
                    relationship.
                  </p>
                  <p>
                    l. Do not send or store any material that contains harmful
                    computer code such as software viruses, worms, trojan
                    horses, or any other malicious software.
                  </p>
                  <p>
                    m. Do not impersonate any person or entity for any purpose.
                  </p>
                  <p>
                    n. Do not manipulate or falsify information to hide the
                    origin of provided statements.
                  </p>
                  <p>
                    o. Do not use the Site in a way that could harm, disable,
                    obstruct, or interfere with the Site's use or other users'
                    computer equipment or cause damage, disruption or limit the
                    functionality of the software, hardware or
                    telecommunications equipment.
                  </p>
                  <p>
                    p. Do not gain unauthorized access or perform unauthorized
                    modifications to the Site, related websites, other accounts,
                    computer systems, or networks connected to the Site through
                    hacking, password theft or other similar means.
                  </p>
                  <p>
                    q. Do not obtain or attempt to obtain any materials or
                    information through means not intentionally supplied by the
                    Site, including but not limited to, obtaining or collecting
                    information about others such as email addresses.
                  </p>
                  <p>
                    r. Do not engage in fraudulent acts or actions aimed at
                    manipulating a search engine results page ("SERP") or
                    performing search engine optimization ("SEO"), including
                    practices considered unethical or to constitute "spamdexing"
                    such as cloaking, metadata, title tags, content scraping,
                    link schemes, google bomb, search keywords, hidden text or
                    hidden links, comments containing spam, and other practices.
                  </p>
                  <p>
                    s. Do not take any other action that may have an adverse
                    effect on or result in damage to the Site, WalkThePlanet,
                    its affiliates and employees, or WalkThePlanet's reputation.
                  </p>
                  <p>
                    t. Do not modify or create derivative works based on the
                    Site and/or the Services, or reverse engineer or access the
                    underlying software for any reason.
                  </p>
                  <p>
                    u. Do not use the Site to build a competitive product or
                    service.
                  </p>
                </div>
                <p>
                  By placing an order through the Site, you hereby represent and
                  warrant that you are not subject to any prohibitions or
                  restrictions by any sanctions program, or subject to any
                  penalties under any anti-money laundering regime.
                </p>
              </div>
              <div ref={terms11}>
                <h1>11. INTELLECTUAL PROPERTY RIGHTS</h1>
                <p>
                  The Content on the Site is protected by various Intellectual
                  Property Rights such as copyrights, trademarks, patents,
                  domain names, logos, symbols, designs, and more, which are
                  owned by WalkThePlanet, its affiliated companies, vendors, or
                  other third parties. These rights prohibit the publication,
                  modification, copying, reproduction, duplication, or
                  alteration of any information or materials, including
                  software, text, data, graphics, images, sounds, videos,
                  trademarks, logos, icons, HTML codes, and other codes outside
                  the area of the Site without the express written permission of
                  WalkThePlanet. Any violation of these rights may result in
                  civil claims for damages or losses and may even be considered
                  criminal offenses.
                </p>
                <p>
                  Unless explicitly stated in these Terms, you are not granted a
                  license or any rights to use, possess, distribute, or modify
                  any of WalkThePlanet's Intellectual Property Rights. The use
                  of third-party Intellectual Property Rights on the Site does
                  not constitute a recommendation or sponsorship for the Site by
                  third parties. You may only use the information on the Site
                  for personal, non-commercial use, and any downloads you make
                  from the Site may not be copied, reproduced, redistributed,
                  retransmitted, published, or commercially exploited without
                  the permission of the owner of the Intellectual Property
                  Rights.
                </p>
                <p>
                  WalkThePlanet and its affiliated companies are the owners of
                  certain Intellectual Property Rights, and any use of the
                  open-source software and Intellectual Property Rights of third
                  parties is done with the necessary licenses or permits.
                  WalkThePlanet shall not be responsible for Intellectual
                  Property Rights owned by third parties or for any infringement
                  of Intellectual Property Rights owned by third parties.
                </p>
              </div>
              <div ref={terms12}>
                <h1>12. COMPLIANCE WITH DATA PRIVACY LAWS</h1>
                <p>
                  WalkThePlanet and its affiliated companies have always
                  complied with all relevant data privacy and security laws and
                  regulations in the jurisdictions where they do business,
                  including but not limited to the Data Privacy Act of 2012.
                  Personal data by users may be shared between WalkThePlanet and
                  any of its subsidiaries or affiliates in accordance with the
                  rules set out by law.
                </p>
              </div>
              <div ref={terms13}>
                <h1>13. LIMITATION OF LIABILITY</h1>
                <p>
                  By using our services and accessing the content on the site,
                  you acknowledge and agree that, to the extent permitted by
                  applicable law:
                </p>
                <div>
                  <p>
                    a. The services and content are provided "as is" and "as
                    available," and we expressly disclaim any warranties,
                    whether express or implied, including any warranties of
                    merchantability or fitness for a particular purpose without
                    limitation, and any warranties against non-infringement,
                    where applicable.
                  </p>
                  <p>
                    b. We do not guarantee that the functions, services, and
                    security features provided on the site will be
                    uninterrupted, error-free, or free from viruses, malware,or
                    other harmful components.
                  </p>
                  <p>
                    c. We do not warrant the accuracy, authenticity, integrity,
                    or quality of the content, sites, or resources available on
                    the site, and we do not guarantee that such content, sites,
                    or resources are free from malicious, indecent, or
                    controversial material.
                  </p>
                  <p>
                    d. We do not guarantee or warrant that you will be granted
                    valid travel permits applicable to you, and we are not
                    responsible for any losses or damages you may suffer
                    relating to your lack of visa or travel permits, including
                    refusal of entry or deportation.
                  </p>
                  <p>
                    e. Any material downloaded or obtained through the use of
                    our services is at your own risk, and you will be fully
                    responsible for any damage to your computer system or loss
                    of data that results from downloading such material.
                  </p>
                </div>
                <div>
                  <p>
                    We are not responsible for any direct or indirect losses or
                    damages resulting from or related to your use of the site or
                    links on the site, without prejudice to what is set out in
                    these terms, including but not limited to economic loss,
                    special, incidental, punitive, or consequential damages.
                    Even if we have been informed of the possibility of such
                    loss or damage, we shall not be liable.
                  </p>
                  <p>
                    These Terms do not restrict or exclude liability for: (a)
                    negligence resulting in death or personal injury; (b) fraud;
                    or (c) any liability that cannot be limited or excluded by
                    applicable law. By using the Site, you agree to defend,
                    indemnify, and hold WalkThePlanet, its employees,
                    affiliates, staff, and partners harmless from any claims,
                    demands, liability, damage, or loss, including legal fees,
                    arising from: (a) your use of the Site; (b) accessing or
                    providing Content through the Site; (c) your violation of
                    the Terms or any other rights or obligations; and/or (d) any
                    act or omission by you, regardless of whether it is
                    negligent, unlawful or otherwise. The only remedy available
                    to you is termination of your use of the Site.
                  </p>
                  <p>
                    The Site may include links to websites operated by third
                    parties, and we are not responsible for their content,
                    privacy or activities. We do not control the sites or links
                    and do not endorse or recommend the origin of such Content.
                    You release us from any liability, expense, loss, or damage
                    arising from the use of such Content, sites, or resources.
                  </p>
                  <p>
                    WalkThePlanet has the right to change, postpone,
                    discontinue, or stop the Site and/or Services at any time
                    without notice, at our sole discretion. Termination does not
                    affect the obligations in these Terms, including warranties,
                    indemnification, waiver, and limitation of liabilities for
                    any Services already provided.
                  </p>
                  <p>
                    WalkThePlanet is not liable for any termination or
                    suspension of your access to the Site. By using the Site,
                    you consent to our collection, use, disclosure, and
                    processing of your personal data as set out under the Data
                    Privacy Act of 2012.
                  </p>
                </div>
              </div>
              <div ref={terms14}>
                <h1>14. EVENTS BEYOND CONTROL</h1>
                <p>
                  We will not be held liable for any violation of these Terms
                  due to an event or circumstance outside of our and/or our
                  Vendor’s control. Such events or circumstances may include but
                  are not limited to natural disasters, weather conditions,
                  fire, nuclear incidents, electromagnetic pulses, terrorist
                  acts, riots, wars, arson attacks, insurgency, rebellion, armed
                  hostilities, labour disputes, lockouts, strikes, shortages,
                  government actions or restrictions, theft, bankruptcy,
                  machinery malfunctions, network or system disruptions,
                  internet or communications disruptions, quarantine, epidemic,
                  or pandemic.
                </p>
              </div>
              <div ref={terms15}>
                <h1>15. GOVERNING LAW</h1>
                <p>
                  These Terms (and any and all disputes arising out of or in
                  connection with these Terms (including any alleged breach or
                  challenge to the validity or enforceability of these Terms))
                  shall be governed by and interpreted in accordance solely with
                  Philippine laws.
                </p>
              </div>
              <div ref={terms16}>
                <h1>16. DISPUTES RESOLUTION</h1>
                <p>
                  If a dispute arises relating to these Terms, both parties must
                  first attempt to resolve it through good faith discussions
                  within sixty (60) working days. If no resolution is reached,
                  the dispute will be referred to the Philippine Mediation
                  Center Office or PMCO. If the dispute remains unresolved, the
                  parties agree that the courts in the Republic of the
                  Philippines have exclusive jurisdiction. These Terms represent
                  the entire agreement between you and WalkThePlanet,
                  superseding any prior agreements. If you use the Site for a
                  third-party, you are responsible for the accuracy of
                  information provided and must inform the third-party of
                  applicable terms and conditions.
                </p>
                <p>
                  You agree to indemnify WalkThePlanet for any liabilities,
                  losses, damages, or claims resulting from any breach of these
                  Terms by you or the third-party. These Terms are in English,
                  and any translations are for convenience only; in case of
                  conflict, the English version prevails. If any provision is
                  unenforceable, it will still be enforced to the fullest extent
                  permitted by law, and the remaining provisions will remain
                  valid. Failure to enforce any provision does not constitute a
                  waiver of that provision. You cannot transfer your rights or
                  obligations under these Terms without written consent.
                  WalkThePlanet may change the Terms at any time but will make
                  reasonable efforts to notify users of material changes. These
                  Terms do not grant any third-party rights. Notices must be in
                  writing and sent by registered post or recorded delivery.
                  WalkThePlanet may provide notice through the Site or to the
                  email address in your account, and you must provide notice to
                  WalkThePlanet by registered post or recorded delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="terms-table card shadow-sm mb-5 bg-white rounded">
            <div className="card-body" id="card1">
              <div className="terms-card-title">Table of Contents</div>
              <p
                style={{ color: activeButton === 1 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms1, 1)}
              >
                1. SERVICES OFFERED
              </p>
              <p
                style={{ color: activeButton === 2 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms2, 2)}
              >
                2. TRAVEL ADVICE
              </p>
              <p
                style={{ color: activeButton === 3 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms3, 3)}
              >
                3. SITE AND APP PROMOTION
              </p>
              <p
                style={{ color: activeButton === 4 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms4, 4)}
              >
                4. CANCELLATION POLICIES
              </p>
              <p
                style={{ color: activeButton === 5 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms5, 5)}
              >
                5. CHARGES AND REFUNDS
              </p>
              <p
                style={{ color: activeButton === 6 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms6, 6)}
              >
                6. ADDITIONAL CHARGES FROM HOTELS
              </p>
              <p
                style={{ color: activeButton === 7 ? "#fc8f3a" : "" }}
                onClick={() => {
                  scrollToSection(terms7, 7);
                }}
              >
                7. USER ACCOUNT
              </p>
              <p
                style={{ color: activeButton === 8 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms8, 8)}
              >
                8. PAYMENT DETAILS AND PROCEDURES
              </p>
              <p
                style={{ color: activeButton === 9 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms9, 9)}
              >
                9. UNAUTHORIZED TRANSACTIONS AND FRAUD
              </p>
              <p
                style={{ color: activeButton === 10 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms10, 10)}
              >
                10. RIGHTS AND OBLIGATIONS
              </p>
              <p
                style={{ color: activeButton === 11 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms11, 11)}
              >
                11. INTELLECTUAL PROPERTY RIGHTS
              </p>
              <p
                style={{ color: activeButton === 12 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms12, 12)}
              >
                12. COMPLIANCE WITH DATA PRIVACY LAWS
              </p>
              <p
                style={{ color: activeButton === 13 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms13, 13)}
              >
                13. LIMITATION OF LIABILITY
              </p>
              <p
                style={{ color: activeButton === 14 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms14, 14)}
              >
                14. EVENTS BEYOND CONTROL
              </p>
              <p
                style={{ color: activeButton === 15 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms15, 15)}
              >
                15. GOVERNING LAW
              </p>
              <p
                style={{ color: activeButton === 16 ? "#fc8f3a" : "" }}
                onClick={() => scrollToSection(terms16, 16)}
              >
                16. DISPUTES RESOLUTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
