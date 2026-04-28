// components/common/Button.tsx
export default function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        borderRadius: "8px",
        background: "#3b82f6",
        color: "white",
        border: "none"
      }}
    >
      {children}
    </button>
  );
}