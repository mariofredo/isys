import "./App.css";
import { useState, useEffect } from "react";
import TableItem from "./components/TableItem";

function App() {
  const [data, setData] = useState([]);

  async function getAnimalData() {
    const res = await fetch("https://mockdata.sivadira.com/api/mock/animals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const result = await res.json();
      setData(result.data);
    }
  }

  useEffect(() => {
    getAnimalData();
  }, []);

  return (
    <div className="App">
      <ol>
        <TableItem data={data} />
      </ol>
    </div>
  );
}

export default App;
