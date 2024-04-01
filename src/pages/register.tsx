import { useState } from "react";
import "../app/globals.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lógica para realizar o registro
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Crie uma nova conta</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2"
        />
        <button
          type="button"
          onClick={handleRegister}
          className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-300"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
