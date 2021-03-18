import React from "react";
import LoginHooks from "./components/LoginHooks";
import LogoutHooks from "./components/LogoutHooks";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <LoginHooks />
      <Nav />
      <Books />
      <LogoutHooks />
    </div>
  );
}

export default App;
