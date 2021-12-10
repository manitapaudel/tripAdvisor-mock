import React from "react";
import { Routes, Route } from "react-router-dom";

import useClickOutside from "./hooks/useOutsideClick";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import Trips from "./pages/Trips";
import Alerts from "./pages/Alerts";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import AuthProvider from "./Providers/AuthProvider";
import "./App.css";

const routes = [
  { path: "/", Page: Home },
  { path: "/reviews", Page: Reviews },
  { path: "/trips", Page: Trips },
  { path: "/alerts", Page: Alerts },
  { path: "/register", Page: Register },
];

function App() {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = React.useState(false);

  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <AuthProvider>
      {showModal ? (
        <Modal ref={modalRef} setShowModal={setShowModal} dark>
          <Register />
        </Modal>
      ) : (
        ""
      )}
      <Navbar showModal={showModal} setShowModal={setShowModal} />
      {/* <div className="bg-gray-400 h-100"> */}
      <main className="mt-4">
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </main>
      {/* </div> */}
    </AuthProvider>
  );
}

export default App;
