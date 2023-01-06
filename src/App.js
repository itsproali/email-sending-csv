import { createContext, useReducer } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { emailReducer } from "./utils/reducers";

export const EmailContext = createContext();

function App() {
  const [emails, dispatch] = useReducer(emailReducer, []);
  return (
    <>
      <EmailContext.Provider value={{ emails, dispatch }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </EmailContext.Provider>
    </>
  );
}

export default App;
