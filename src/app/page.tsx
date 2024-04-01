import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Superior */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 text-center">
        <p className="text-lg font-semibold">
          Bem-vindo ao Aplicativo de Finanças Multi-Tenant
        </p>
      </div>

      {/* Barra de Navegação */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={30}
              priority
            />
          </div>
          <div className="flex space-x-4">
            <NavLink href="#">Início</NavLink>
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="">Contato</NavLink>
            <NavLink href="signin">Entrar</NavLink>
            <NavLink href="register">Registrar</NavLink>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Docs"
            description="Find in-depth information about Next.js features and API."
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />
          <Card
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          />
          <Card
            title="Templates"
            description="Explore starter templates for Next.js."
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />
          <Card
            title="Deploy"
            description="Instantly deploy your Next.js site to a shareable URL with Vercel."
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Sérgio Alves Barbosa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="px-4 py-2 text-white hover:bg-gray-700 transition duration-300 rounded"
    >
      {children}
    </a>
  );
}

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}
