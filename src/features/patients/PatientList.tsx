import { usePatientStore } from "./patientStore";

export default function PatientList() {
  const { filteredPatients, deletePatient } = usePatientStore();

  const patients = filteredPatients();

  if (patients.length === 0) {
    return (
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        No patients found
      </p>
    );
  }

  return (
    <div style={container}>
      <table style={table}>
        <thead>
          <tr style={headerRow}>
            <th style={th}>Name</th>
            <th style={th}>Age</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.id} style={row}>
              <td style={td}>{p.name}</td>
              <td style={td}>{p.age}</td>

              <td style={td}>
                <button
                  onClick={() => deletePatient(p.id)}
                  style={deleteBtn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const container = {
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const headerRow = {
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "white",
};

const th = {
  padding: "12px",
  textAlign: "left" as const,
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const row = {
  transition: "0.2s",
};

const deleteBtn = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  background: "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "white",
  cursor: "pointer",
};