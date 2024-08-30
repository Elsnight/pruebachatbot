import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Limpiar localStorage, sessionStorage o cookies antes de cargar el script
    localStorage.clear();
    sessionStorage.clear();
    // Si el chatbot usa cookies específicas, puedes intentar borrarlas:
    document.cookie.split(";").forEach(function (cookie) {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    // Crear un nuevo script element
    const script = document.createElement("script");
    script.src = "//fw-cdn.com/10760529/3551031.js";
    script.setAttribute("chat", "true");
    script.setAttribute("widgetId", "4a3facd5-a37d-4f20-9fee-181a4b6732fa");

    // Añadir el script al cuerpo del documento
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Este efecto se ejecuta solo una vez cuando el componente se monta

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a mi página</h1>
        {/* Aquí puedes añadir más contenido */}
      </header>
    </div>
  );
}

export default App;
