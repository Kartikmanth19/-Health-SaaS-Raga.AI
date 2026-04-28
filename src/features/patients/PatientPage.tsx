import { useState } from "react";
import { usePatientStore } from "./patientStore";
import PatientGrid from "./PatientGrid";
import PatientList from "./PatientList";

export default function PatientPage() {
  const { view, toggleView, search, setSearch, addPatient } =
    usePatientStore();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAdd = () => {
  if (!name || !age) return alert("Enter valid data");

  addPatient({ name, age: Number(age) });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification("Patient Added", {
        body: `${name} added successfully`,
        icon: "/icon.png", // optional
      });
    });
  }

  setName("");
  setAge("");
};

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Patient Management
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="🔍 Search patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />

        <button onClick={toggleView} style={toggleBtn}>
          {view === "grid" ? "📋 List View" : "🔲 Grid View"}
        </button>
      </div>

      <div style={card}>
        <h3 style={{ marginBottom: "10px" }}>Add Patient</h3>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleAdd} style={addBtn}>
            ➕ Add
          </button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        {view === "grid" ? <PatientGrid /> : <PatientList />}
      </div>
    </div>
  );
}


const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const toggleBtn = {
  padding: "10px 15px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "white",
  cursor: "pointer",
};

const addBtn = {
  padding: "10px 15px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg,#10b981,#059669)",
  color: "white",
  cursor: "pointer",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
};