import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import { useState } from "react";
import Font from "./route/fonsts/Fonts";
import Footer from "./components/footer/Footer";
function App() {
  const [serach, setSerach] = useState("");
  const [type, setType] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
      <Nav
        serach={serach}
        setSearch={setSerach}
        type={type}
        setType={setType}
        modal={modal}
        setModal={setModal}
        modal2={modal2}
        setModal2={setModal2}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              serach={serach}
              modal={modal}
              modal2={modal2}
              setModal={setModal}
              setModal2={setModal2}
            />
          }
        />
        <Route
          path="/product-view/:family"
          element={<Font modal2={modal2} />}
        />
      </Routes>
      <Footer modal2={modal2} modal={modal} />
    </>
  );
}

export default App;
