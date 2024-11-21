import { useState } from "react";
import AuthService from "../services/auth.service";

const Logout = () => {
    const handleLogout = () => {
      AuthService.logout(); // Entfernt Benutzerdaten
      window.location.reload(); // Seite neu laden
    };
   
    return (
      <>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  };
export default Logout