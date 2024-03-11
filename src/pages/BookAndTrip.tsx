import "../styles/bookandtrip.scss";

const upcoming = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/6492/2e3e/493e3a9b2f482150937e772cf0d2cd50?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p44u2xr87iUBG7eKRRkYT9ZFlxNYTcLSsV4is-XnF7j044DosjMpkybS8KVaQX-pqlrP6Xg6QTayM-GRqitDHRun8R8E33RAoFs5R3-11PY60PjtefR7df79fKBJy7boo0s97okdJzgO-Oe7UNgzOjr3xG3EGcKJfo7C-d2h7MHACNbP-aDke4eJnZ30dOcplO6B3mr7N1wzHce8R6erOsLVMUnce7QR2v6z7J07gad6BeN73COhxKHii8TbGVe5aD7aoGsVcZvYFHix5bMRU9b5m7RfJyES3E0kzSFm56K3fmo1lUUymuKuaV3Ab3rRudRg7sl~hiOz5FQrpxallA__",
    status: "Flights.Upcoming",
    title: "Flight from Manila to Cebu",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-manila-cebu",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9697/d832/0cb99e28ca64050e6e12a9308ea4cfa5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HapzHqOXum66779h7LA0Ag22jKSOSXcDeUyUxB-qWbdbOomaf2h89Jd15q-ZvHnRjNZfaL7xvz35gPPZp1GeZHUUa4~njBVV3xywJXS2sQZyFpwo3lCjYBt7kZDF97gz8zep6AjXgB0SwW9BCCrD5HWwq0ZWwppGaua-q8WjwhqzwWYw6WZA84ziErLWxdUC5Z9KGUwb03-RWoDMJXRQTNngHQuyBmfAlnxdoOUAvBK452YifdPlwhHvUqEH-WL9FASRCiCPFmbNraAfvfseHkMr4Fp9XHapXT0uQnz85cxngz7PFtNApCrXMc4BrCXmfO~Q63XNiRhggEiDyz2o0g__",
    status: "Flights.Upcoming",
    title: "Flight from Cebu to Manila",
    date: "Fri, 19 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-cebu-manila",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5e7f/ceb9/9c0803547d6b714d0e5c3e964f86aa33?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6aS8aAQlo5mEMLFupP4mM1E--xYjJJuEeDavRsIJ0HexwlBj7VdrW09uqWQh-MuJLUBpi-zg1NDGEHCziE5Gb9i9Ltlk4yD8jRxeOl3taHuA4JEUgdkqXb4Lg08CyKvuKtA0iiA5HlcCC4gLpPywpsRLoMSO-a2rnRx2AbmtACijBToFNwNCrSE1I6WTfUpCPRu4OzioJqCtRdJHl~rVzI8Vtf-qJu6CjPF0PDjiDo49oDkSt9I-7-zF1Zm-K70iMoB1xor3soJ9d1UvI7AaEKyNkVUO8q8l-m6-8Ed-sBnHxoFSLRHQ1xlpPHY2figkymfSP6BXGIIuXtuBKIgwQ__",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/07ed/a5d5/b264abd598eb9003ddf244804d7f148b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nD8HAya5l3S6EjV8G01sQtZEbtuxLHP9vNlq2kZLUJ4D4nYY5JKFyawWbWVdX2En7X34ilh0~Onh~2fr4fENC~k99jk~3Vh6aLOHdi3ZyI5X4gHmYdok6HI0QGViYzAnP1ksfDp0AnUHYNi0sNKXSI36puKBEUTach8wMMz~l~VjpQyAuKQh2Bh53OYBCbgDkcs8jayGjqL3QXg~JiiGpJ-C2xhle~n8B0KTCRqwSQK9j-X3V0do3GQw61aA96iaPb~88zGrv5PeHhIpkFBORTtOVCYH5oiDkhdAvHxbVN6jYeKa8DVxrytJQfUKpVCs7Le90K2Kcjbgmk5U1hI89w__",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
];

const complete = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/6492/2e3e/493e3a9b2f482150937e772cf0d2cd50?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p44u2xr87iUBG7eKRRkYT9ZFlxNYTcLSsV4is-XnF7j044DosjMpkybS8KVaQX-pqlrP6Xg6QTayM-GRqitDHRun8R8E33RAoFs5R3-11PY60PjtefR7df79fKBJy7boo0s97okdJzgO-Oe7UNgzOjr3xG3EGcKJfo7C-d2h7MHACNbP-aDke4eJnZ30dOcplO6B3mr7N1wzHce8R6erOsLVMUnce7QR2v6z7J07gad6BeN73COhxKHii8TbGVe5aD7aoGsVcZvYFHix5bMRU9b5m7RfJyES3E0kzSFm56K3fmo1lUUymuKuaV3Ab3rRudRg7sl~hiOz5FQrpxallA__",
    status: "Flights.Upcoming",
    title: "Flight from Manila to Cebu",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-manila-cebu",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9697/d832/0cb99e28ca64050e6e12a9308ea4cfa5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HapzHqOXum66779h7LA0Ag22jKSOSXcDeUyUxB-qWbdbOomaf2h89Jd15q-ZvHnRjNZfaL7xvz35gPPZp1GeZHUUa4~njBVV3xywJXS2sQZyFpwo3lCjYBt7kZDF97gz8zep6AjXgB0SwW9BCCrD5HWwq0ZWwppGaua-q8WjwhqzwWYw6WZA84ziErLWxdUC5Z9KGUwb03-RWoDMJXRQTNngHQuyBmfAlnxdoOUAvBK452YifdPlwhHvUqEH-WL9FASRCiCPFmbNraAfvfseHkMr4Fp9XHapXT0uQnz85cxngz7PFtNApCrXMc4BrCXmfO~Q63XNiRhggEiDyz2o0g__",
    status: "Flights.Upcoming",
    title: "Flight from Cebu to Manila",
    date: "Fri, 19 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-cebu-manila",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5e7f/ceb9/9c0803547d6b714d0e5c3e964f86aa33?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6aS8aAQlo5mEMLFupP4mM1E--xYjJJuEeDavRsIJ0HexwlBj7VdrW09uqWQh-MuJLUBpi-zg1NDGEHCziE5Gb9i9Ltlk4yD8jRxeOl3taHuA4JEUgdkqXb4Lg08CyKvuKtA0iiA5HlcCC4gLpPywpsRLoMSO-a2rnRx2AbmtACijBToFNwNCrSE1I6WTfUpCPRu4OzioJqCtRdJHl~rVzI8Vtf-qJu6CjPF0PDjiDo49oDkSt9I-7-zF1Zm-K70iMoB1xor3soJ9d1UvI7AaEKyNkVUO8q8l-m6-8Ed-sBnHxoFSLRHQ1xlpPHY2figkymfSP6BXGIIuXtuBKIgwQ__",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/07ed/a5d5/b264abd598eb9003ddf244804d7f148b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nD8HAya5l3S6EjV8G01sQtZEbtuxLHP9vNlq2kZLUJ4D4nYY5JKFyawWbWVdX2En7X34ilh0~Onh~2fr4fENC~k99jk~3Vh6aLOHdi3ZyI5X4gHmYdok6HI0QGViYzAnP1ksfDp0AnUHYNi0sNKXSI36puKBEUTach8wMMz~l~VjpQyAuKQh2Bh53OYBCbgDkcs8jayGjqL3QXg~JiiGpJ-C2xhle~n8B0KTCRqwSQK9j-X3V0do3GQw61aA96iaPb~88zGrv5PeHhIpkFBORTtOVCYH5oiDkhdAvHxbVN6jYeKa8DVxrytJQfUKpVCs7Le90K2Kcjbgmk5U1hI89w__",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
];

const BookAndTrip = () => {
  return (
    <>
      <div className="container">
        <h1>Bookings & Trips</h1>
        <p className="title">Upcoming</p>
        <div className="upcoming-container">
          {upcoming.map((data, i) => (
            <div className="info-card" key={i}>
              <div className="image-cont">
                <img src={data.image} alt="" />
              </div>

              <div className="info-list d-flex flex-column gap-1">
                <span className="card-status">{data.status}</span>
                <div>
                  <p className="card-title">{data.title}</p>
                  <p className="card-date">{data.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="title">
          <p className="complete-title">Complete</p>
          <div className="complete-container">
            {complete.map((data, i) => (
              <div className="info-card" key={i}>
                <div className="image-cont">
                  <img src={data.image} alt="" />
                </div>

                <div className="info-list d-flex flex-column gap-1">
                  <span className="card-status">{data.status}</span>
                  <div>
                    <p className="card-title">{data.title}</p>
                    <p className="card-date">{data.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAndTrip;
