export default function App() {
  return (
    <div style={{
      background:"#0d0d0d",
      color:"white",
      minHeight:"100vh",
      padding:"40px",
      fontFamily:"Arial"
    }}>
      <h1 style={{fontSize:"48px", textAlign:"center"}}>
        Ajay Chauhan
      </h1>

      <p style={{textAlign:"center", color:"#aaa"}}>
        Senior Android Engineer • 8+ Years Experience
      </p>

      <div style={{marginTop:"40px"}}>
        <h2>About</h2>
        <p style={{color:"#aaa"}}>
          Experienced Android Developer working on scalable apps across Telecom,
          EdTech and HealthTech domains.
        </p>
      </div>

      <div style={{marginTop:"40px"}}>
        <h2>Skills</h2>
        <p style={{color:"#aaa"}}>
          Java, Kotlin, Android Jetpack, REST APIs
        </p>
      </div>

      <div style={{marginTop:"40px"}}>
        <h2>Experience</h2>
        <p style={{color:"#aaa"}}>Circles (2024–Present)</p>
        <p style={{color:"#aaa"}}>BYJU’S (2022–2024)</p>
        <p style={{color:"#aaa"}}>MediBuddy (2019–2022)</p>
      </div>
    </div>
  );
}
