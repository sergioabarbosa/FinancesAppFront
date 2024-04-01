import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Definindo o tipo para o contexto de autenticação
interface AuthContextType {
  authenticated: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  signIn: async () => { },
  signOut: () => { },
  register: async () => { },
});

// Provedor de autenticação
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  // Função para fazer login
  const signIn = async (username: string, password: string) => {
    try {
      // Aqui você pode fazer a requisição para sua API Nest.js
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Define o estado de autenticação como verdadeiro
        setAuthenticated(true);

        // Salva o token de autenticação no localStorage
        const { token } = await response.json();
        localStorage.setItem('token', token);

        // Redireciona para a página de perfil do usuário
        router.push('/profile');
      } else {
        // Se ocorrer algum erro, você pode tratar aqui
        // Por exemplo, exibir uma mensagem de erro para o usuário
        console.error('Erro ao fazer login:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  // Função para fazer logout
  const signOut = () => {
    // Limpa o token de autenticação do localStorage
    localStorage.removeItem('token');

    // Define o estado de autenticação como falso
    setAuthenticated(false);

    // Redireciona para a página de login
    router.push('/signin');
  };

  // Função para registrar
  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setAuthenticated(true);
        localStorage.setItem('token', 'fake-token');
        router.push('/profile');
      } else {
        console.error('Erro ao fazer registro:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer registro:', error);
    }
  };

  // Verifica se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = (): AuthContextType => useContext(AuthContext);
