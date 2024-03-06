// Router Provider
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/root.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
