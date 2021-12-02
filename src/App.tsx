import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import Trips from "./pages/Trips";
import Alerts from "./pages/Alerts";

const routes = [
  { path: "/reviews", Page: Reviews },
  { path: "/trips", Page: Trips },
  { path: "/alerts", Page: Alerts },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto">
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
