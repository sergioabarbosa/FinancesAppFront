import { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      // Aqui você pode fazer a requisição para sua API Nest.js
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Define o estado de autenticação como verdadeiro
        setAuthenticated(true);

        // Redireciona para a página de perfil do usuário e passa o estado de autenticação como uma propriedade
        router.push({
          pathname: "/profile",
          query: { authenticated: true },
        });
      } else {
        // Se ocorrer algum erro, você pode tratar aqui
        // Por exemplo, exibir uma mensagem de erro para o usuário
        console.error("Erro ao fazer login:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <h1 className="text-3xl font-semibold mb-4">Faça login na sua conta</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field text-black"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field text-black"
        />
        <button
          type="button"
          onClick={handleSignIn}
          className="submit-button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
