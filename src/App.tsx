import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import Trips from "./pages/Trips";
import Alerts from "./pages/Alerts";
import Home from "./pages/Home";
import Register from "./pages/Register";

const routes = [
  { path: "/", Page: Home },
  { path: "/reviews", Page: Reviews },
  { path: "/trips", Page: Trips },
  { path: "/alerts", Page: Alerts },
  { path: "/register", Page: Register },
];

function App() {
  return (
    <div>
      <Navbar />
      {/* <div className="bg-gray-400 h-100"> */}
      <main className="mt-4">
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </main>
      {/* </div> */}
    </div>
  );
}

export default App;
