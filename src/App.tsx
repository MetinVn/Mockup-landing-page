import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
