import { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import { AuthProvider, useAuth } from "@/app/AuthContext/Auth"; // Importando AuthProvider e useAuth

export default function Profile() {
  const { authenticated } = useAuth(); // Usando o hook useAuth para acessar o estado de autenticação

  const [user, setUser] = useState({
    name: "Usuário",
    email: "usuario@example.com",
    age: 30,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const router = useRouter();

  const handleLogout = () => {
    // Lógica para fazer logout, como limpar o token de autenticação, etc.
    // Por enquanto, apenas redirecionaremos para a página de login
    router.push("/signin");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <h1 className="text-3xl font-semibold mb-4">Perfil do Usuário</h1>
      {authenticated ? (
        <>
          <p className="mb-2">Nome: {user.name}</p>
          <p className="mb-2">E-mail: {user.email}</p>
          <p className="mb-2">Idade: {user.age}</p>
          <p className="mb-4">Biografia: {user.bio}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white rounded py-2 px-4 hover:bg-red-600 transition duration-300"
          >
            Sair
          </button>
        </>
      ) : (
        <p>Você não está autenticado. Por favor, faça login para acessar esta página.</p>
      )}
    </div>
  );
}
