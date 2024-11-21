import axios from "axios";
import { useEffect, useState } from "react";

export default function PrivateList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    axios.get("http://localhost:8080/items",
      {
        "headers": {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((response) => setList(response.data))
        .catch((error) => console.log(error));
  }, []); //leerer Array damit das immer beim laden ausgeführt wird

  return (
    <>
      <h1>Private Liste</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
