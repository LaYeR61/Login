import { useState } from "react";

// Diccionario de listado de usuarios y contraseñas
const usuarios = {
  admin: "admin",
  user: "1234",
  laura: "abcd",
};

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const disparadorAccion = (e) => {
    // Evita que la pagina se recargue y no muestre el mensaje
    e.preventDefault();

    if (usuarios[usuario] === contrasena) {
      setMensaje("Contraseña correcta");
    } else {
      setMensaje("Usuario o contraseña incorrectos");
      setUsuario("")
      setContrasena("")
    }};

  return (
    // 
    <form onSubmit={disparadorAccion}>
      <h2>Iniciar sesión</h2>
        {/* Placeholder de usuario */}
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
        {/* Placeholder de contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      {/* Boton de validar datos */}
      <button type="submit">Ingresar</button>

      

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default Login;