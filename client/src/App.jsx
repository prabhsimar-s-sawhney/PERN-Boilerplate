import { useEffect, useState } from "react";

function App() {
  const [APIhealth, setAPIHealth] = useState(null);
  const [DBHealth, setDBHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then(res => res.json())
      .then(setAPIHealth)
      .catch(() => setAPIHealth({ status: "backend down" }));

    fetch("http://localhost:8000/health/db")
      .then(res => res.json())
      .then(setDBHealth)
      .catch(() => setDBHealth({ status: "DB down" }));

  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>React + Node + Postgres Dockerized Boilerplate</h1>

      <h3>API Health Check:</h3>
      <pre>{JSON.stringify(APIhealth, null, 2)}</pre>

      <h3>DB Health Check:</h3>
      <pre>{JSON.stringify(DBHealth, null, 2)}</pre>

    </div>
  );
}

export default App;
