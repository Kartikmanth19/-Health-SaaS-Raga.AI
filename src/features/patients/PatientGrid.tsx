import { usePatientStore } from "./patientStore";

export default function PatientGrid() {
  const { filteredPatients, deletePatient } = usePatientStore();

  const patients = filteredPatients();

  if (patients.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        No patients found
      </p>
    );
  }

  return (
    <div style={grid}>
      {patients.map((p) => (
        <div
          key={p.id}
          style={card}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <div style={avatar}>
            {p.name.charAt(0).toUpperCase()}
          </div>

          <h3 style={{ margin: "10px 0 5px 0" }}>{p.name}</h3>
          <p style={{ color: "#6b7280" }}>Age: {p.age}</p>

          <button
            onClick={() => deletePatient(p.id)}
            style={deleteBtn}
          >
            ❌ Delete
          </button>
        </div>
      ))}
    </div>
  );
}


const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
  transition: "0.2s",
};

const avatar = {
  width: "50px",
  height: "50px",
  margin: "0 auto",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "18px",
};

const deleteBtn = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  background: "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "white",
  cursor: "pointer",
};