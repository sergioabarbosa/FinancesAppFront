import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../app/AuthContext/Auth";

interface SignInProps {
  signIn: ReturnType<typeof useAuth>['signIn']; // Recebendo a função signIn via props
}

const SignIn: React.FC<SignInProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signIn } = useAuth();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Chama a função signIn fornecida via props
      await signIn(username, password);

      // O redirecionamento é tratado dentro do contexto de autenticação,
      // então não é necessário fazer nada aqui após o login bem-sucedido.
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <h1 className="text-3xl font-semibold mb-4">Faça login na sua conta</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
        <input
          type="username"
          placeholder="Usuário"
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
          type="submit"
          className="submit-button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default SignIn;
