import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      background:"#0d0d0d",
      color:"white",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <h1>Ajay Chauhan</h1>
      <p>Senior Android Engineer</p>
      <p>8+ Years Experience • 10M+ Users</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
