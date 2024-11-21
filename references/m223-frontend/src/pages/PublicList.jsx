import axios from "axios";
import { useEffect, useState } from "react";


export default function PublicList() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/')
        .then(response => setList(response.data))
        .catch(error => console.log(error))
    },[]) //leerer Array damit das immer beim laden ausgeführt wird

  return (
    <>
      <h1>Public Liste</h1>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}
