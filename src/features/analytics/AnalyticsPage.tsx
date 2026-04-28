import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 50 },
  { name: "Mar", patients: 70 },
  { name: "Apr", patients: 50 },
  { name: "May", patients: 70 },
  { name: "Jun", patients: 65 },
  { name: "Jul", patients: 23 },
  { name: "Aug", patients: 35 },
  { name: "Sep", patients: 39 },
  { name: "Oct", patients: 47 },
  { name: "Nov", patients: 54 },
  { name: "Dec", patients: 69 },
];

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>
        Analytics Dashboard
      </h2>

      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "25px"
      }}>
        <Card title="Total Patients" value="120" color="#6366f1" />
        <Card title="Appointments" value="45" color="#10b981" />
        <Card title="Revenue" value="₹20K" color="#f59e0b" />
      </div>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}>
        <h3 style={{ marginBottom: "10px" }}>
          Monthly Patient Growth
        </h3>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
            />

            <Line
              type="monotone"
              dataKey="patients"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Card({ title, value, color }: any) {
  return (
    <div style={{
      flex: 1,
      padding: "20px",
      borderRadius: "12px",
      color: "white",
      background: `linear-gradient(135deg, ${color}, #3b82f6)`,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
    }}>
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}