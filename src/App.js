import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [veri, setVeri] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/yazilar")
      .then((response) => response.json())
      .then((data) => setVeri(data));
  }, []);

  const filter = (e) => {
    const { value } = e.target;
    if (value === "") {
      setVeri(null);
    } else {
      fetch(`http://localhost:8000/yazilar?q=${value}`)
        .then((response) => response.json())
        .then((data) => setVeri(data));
    }
  };

  return (
    <div className="App">

      <h1>Yazılar</h1>
      <input type="text" onChange={filter} />
      {veri?.map((yazi) => (
        <div key={yazi.id}>
          <h2>{yazi.baslik}</h2>
          <p>{yazi.icerik}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
