import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PublicList from "./pages/PublicList";
import Login from "./pages/Login";
import PrivateList from "./pages/PrivateList";
import AuthService from "./services/auth.service";
import Logout from "./pages/Logout";
import AddItem from "./pages/AddItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <hr />
      <PublicList />
      <hr />
      {AuthService.getCurrentUser() ? (
        <>
          <PrivateList />
          <AddItem />
          <Logout />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
      <hr />      
      
    </>
  );
}

export default App;
