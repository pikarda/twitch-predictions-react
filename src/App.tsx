import { Global } from "@emotion/react";
import Prediction from "./components/Prediction";

import { global } from "./Global.styles";

import { Routes, Route, Navigate } from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Global styles={global} />
      <Routes>
        <Route path="predictions/" element={<Prediction />} />
        <Route path="test/" element={<Test />} />

        <Route path="*" element={<Navigate to="/predictions" />} />
      </Routes>
    </>
  );
}

export default App;
