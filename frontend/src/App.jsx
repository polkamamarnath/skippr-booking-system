import { useState } from "react";
import AdminPage from "./pages/AdminPage";
import ResidentPage from "./pages/ResidentPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("resident");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          margin: "20px",
        }}
      >
        <button onClick={() => setPage("resident")}>
          Resident Page
        </button>

        <button onClick={() => setPage("admin")}>
          Admin Dashboard
        </button>
      </div>

      {page === "resident" ? <ResidentPage /> : <AdminPage />}
    </div>
  );
}

export default App;